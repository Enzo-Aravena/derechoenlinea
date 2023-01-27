import Layout from "@/components/layout";
import Curso from "../components/curso"; 
import styles from '../styles/grid.module.css'

export default function Capacitaciones({ cursos }) {
  console.log(cursos);
  return (
    <Layout title={"Capacitaciones"} description="Capacitaciones ofrecidas">
      <main className="contenedor">
        <h1 className="heading">Nuestros Cursos</h1>
        
        <div className={styles.grid}>

        {cursos.map(curso =>(
          <Curso  
            key={curso.id}
            curso={curso.attributes}
          />
        ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/cursos?populate=imagen`
  );
  const { data: cursos } = await respuesta.json();
  return {
    props: {
      cursos
    },
  };
}

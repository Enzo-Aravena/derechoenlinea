import Layout from "@/components/layout";
import Notas from "../components/notas";
import styles from '../styles/grid.module.css'

export default function Novedades ({ noticias }) {
  console.log(noticias);
  return (
    <Layout title={"Capacitaciones"} description="Capacitaciones ofrecidas">
      <main className="contenedor">
        <h1 className="heading">Noticas</h1>
        
        <div className={styles.grid}>

        {noticias.map(nota =>(
          <Notas  
            key={nota.id}
            nota={nota.attributes}
          />
        ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/noticias?populate=imagen`
  );
  const { data: noticias } = await respuesta.json();
  return {
    props: {
      noticias
    },
  };
}
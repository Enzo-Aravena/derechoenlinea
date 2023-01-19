import Image from 'next/image'
import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, Derechos en Linea, blog"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
        <Image
              src="/img/nosotros.jpg"
              width={1000}
              height={900}
              alt="imagen sobre nosotros"
            />

          <div>
          <h3 className="nosotros">Nuestra Misión</h3>
            <p>Somos una propuesta de intervención profesional, estamos orientados a individuos, familias y microelectivos(agrupaciones civiles,
              empresas, colegios, entre otras.). 
            </p>
            <p>Abordamos problemáticas y conflictos judicializados o en riesgo de ello, desde su evaluación preliminar y hasta la reparación terapéutica
               cada vez que sea requerido.
            </p>

            <h3 className="nosotros">Nuestra Visión</h3>
            <p>Nos consideramos una propuesta innovadora de servicios profesionales que destacan por su rigurosidad, calidad y pertenencia diciplinar
              realizamos procesos de intervención diseñados e implementados de acuerdo a las necesidades del cliente.
            </p>
            <p>Integramos los diversos saberes que, en conjunto, permiten abordar las problemáticas y conflictos judicializados de nuestros clientes.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'


export default function Contacto() {
  return (
    <Layout
    title={"Contacto"}
    description="Contactar con nosotros"
  >
    <main className="contenedor">

        <h2 className="heading">Contacta con nosotros</h2>
        <div >
        <form action="https://formsubmit.co/enzo.aravena.c@gmail.com" method="POST" className={styles.formulario}>

            <label className={styles.formulario__label} for="Nombre">nombre</label>
            <input className={styles.formulario__input} type="text" name="name"/>

            <label className={styles.formulario__label} for="email">Email</label>
            <input className={styles.formulario__input} type="email" name="email"/>

            <label className={styles.formulario__label} for="Subject">Asunto</label>
            <textarea className={styles.formulario__input} type="text" name="subject"/>

            <input className={styles.enlace} type="submit" value="Enviar"/>

        </form>
        </div>


    </main>
    </Layout>
  )
}

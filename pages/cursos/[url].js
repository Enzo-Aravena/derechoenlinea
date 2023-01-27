import Image from "next/image"
import styles from '../../styles/blog.module.css'
import Layout from "../../components/layout"

export default function Capacitacion({curso}) {

    const {nombre, imagen, descripcion, precio} = curso[0].attributes
  return (
    <Layout
        title = {`Curso ${nombre}`}
    >
<div className={`${styles.post} ${styles['mt-3']}` }>
            <Image src={imagen.data.attributes.url} width={1000} height={600} alt={`Imagen Curso ${nombre}`}/>
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.texto}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>



            </div>

        </div>
</Layout>
)
}

export async function getServerSideProps({query: {url}}){


    const respuesta = await fetch(`${process.env.API_URL}/cursos?filters[url]=${url}&populate=imagen`)
    const {data: curso} = await respuesta.json()



    return{
        props: {
            curso
        }
    }
}
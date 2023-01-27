import Image from "next/image"
import Layout from "@/components/layout"
import {formatearFecha} from '../../utils/helpers'
import styles from '../../styles/blog.module.css'

export default function Noticia({noticia}) {

    const {titulo, contenido, imagen, publishedAt} = noticia[0].attributes

  return (
   <Layout title = {titulo}>
        <article className={`${styles.post} ${styles['mt-3']}` }>
        <Image src={imagen.data.attributes.url} height={600} width={1000} alt={`Imagen de noticia ${titulo}`}  />

        <div className={styles.contenido}>

            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.texto}>{contenido}</p>

        </div>
        
    </article>  

   </Layout>
  )
}

export async function getServerSideProps({query: {url}}){


    const respuesta = await fetch(`${process.env.API_URL}/noticias?filters[url]=${url}&populate=imagen`)
    const {data: noticia} = await respuesta.json()
    return {
      props: {
        noticia
      },
    };
  }


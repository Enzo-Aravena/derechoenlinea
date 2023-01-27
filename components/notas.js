import Image from "next/image"
import Link from "next/link"
import {formatearFecha} from '../utils/helpers'
import styles from '../styles/blog.module.css'

export default function Notas({nota}) {

    const {contenido, imagen, titulo, url, publishedAt} = nota

  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} height={400} width={600} alt={`Imagen de noticia ${titulo}`}  />

        <div className={styles.contenido}>

            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link className={styles.enlace} href={`/noticia/${url}`}>
                Leer Noticia
            </Link>
        </div>
        
    </article>
  )
}

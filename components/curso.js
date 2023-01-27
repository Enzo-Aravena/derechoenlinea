import Image from "next/image"
import Link from "next/link"
import styles from '../styles/cursos.module.css'

export default function Curso({curso}){
    
    const {descripcion ,url, imagen, nombre, precio} = curso

    return (
        <div >
            <Image src={imagen.data.attributes.formats.thumbnail.url} width={600} height={400} alt={`Imagen Curso ${nombre}`}/>
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/cursos/${url}`}>
         
                      <p className={styles.enlace}> Ver Curso</p>
                  
                </Link>


            </div>

        </div>
    )
}
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/header.module.css'



export default function Header() {
    return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <a>
        <Image src="/img/logo.svg" width={300} height={40} alt="imagen logotipo"/>
        </a>
        <nav className={styles.navegacion}>
          <Link href="/">
            Inicio
          </Link>
          <Link href="/nosotros">
            Nosotros
          </Link>
          <Link href="/servicios">
            Servicios
          </Link>
          <Link href="/capacitaciones">
            Capacitaciones
          </Link>
        </nav>
      </div>
    </header>
    ) 
  }
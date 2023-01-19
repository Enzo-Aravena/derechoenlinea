import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export default function Header() {
  const router = useRouter();
  console.log(router);

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        
          <Link href={"/"}>
            <Image
              src="/img/logo.svg"
              width={300}
              height={40}
              alt="imagen logo"
            />
          </Link>
        
        <nav className={styles.navegacion}>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className={router.pathname === "/nosotros" ? styles.active : ""}
          >
            Nosotros
          </Link>
          <Link
            href="/servicios"
            className={router.pathname === "/servicios" ? styles.active : ""}
          >
            Servicios
          </Link>
          <Link
            href="/capacitaciones"
            className={
              router.pathname === "/capacitaciones" ? styles.active : ""
            }
          >
            Capacitaciones
          </Link>
        </nav>
      </div>
    </header>
  );
}

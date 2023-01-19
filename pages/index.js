import Link from "next/Link";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout title="Inicio" description="Blog de derecho, cursos y más">
        <h1>Hola Mundo</h1>
        <Link href="/nosotros">Nosotros</Link>
      </Layout>
    </>
  );
}

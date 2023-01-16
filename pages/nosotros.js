import Link from 'next/Link'
import Layout from '@/components/layout'

export default function Nosotros() {
  return (
    <Layout
    title = {'Nosotros'}
    description="Sobre nosotros, Derechos en Linea, blog">
    <Link href='/'>Inicio</Link>
    </Layout>
  )
}

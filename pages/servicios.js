import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'

export default function Servicios() {
  return (
    <Layout
      title={"Servicios"}
      description="Sobre los servicios que ofrecemos "
    >
      <main className="contenedor">
        <h2 className="heading">Servicios</h2>

        <div >
          <div>
          <h3 className="nosotros">Nuestros Servicios</h3>
            <p>Contamos con profesionales cuyas credenciales académicas y trayectoria los habilita en su actuación con cada uno de nuestros
              usuarios, brindando un trato digno, una intervención oportuna, y un resultado que permita aportar procesos judiciales, y a los
              procesos que individuos, familias y microcolectivos requieran abordar con nuestros servicios. 
            </p>


            
          </div>

          <div >
            <h3 className={styles.textoa}>Intervencion Profesional Indirecta</h3>
            <p className={styles.textoas}>Capacitaciones (cursos y talleres)</p>
            <p className={styles.textoas}>Supervisiones</p>
            <p className={styles.textoas}>Estudios</p>
          </div>
          <div >
            <h3 className={styles.texto}>Intervencion Profesional Directa</h3>
            <p className={styles.textos}>Diagnósticos</p>
            <p className={styles.textos}>Peritajes</p>
            <p className={styles.textos}>Terapias Breves</p>
            <p className={styles.textos}>Atención reparatoria</p>
            <p className={styles.textos}>Mediación </p>
            <p className={styles.textos}>Coaching y Orientación profesional</p>

          </div>
        </div>
      </main>
    </Layout>
  );
}
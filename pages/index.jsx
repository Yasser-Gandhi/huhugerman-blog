import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout
        title="Home | HuhuGerman"
        description="Alemán para curiosos"
        home //home={true}
    >
      <section className={utilStyles.headingMd}>
        <h2>¿Por qué aprender alemán?</h2>
        <p>Si aún buscas razones para aprender este maravilloso idioma, 
          sólo echa un vistazo a nuestra galería para que puedas imaginarte con esos lugares. </p>
        <p>Seguro que algo memorable e interesante te encontrarás, 
          desde el Muro de Berlín (<span className="dt-begriff">Berliner Mauer</span>), 
          <span className="dt-begriff"> Alexanderplatz</span>, los escaparates en época navideńa, 
          la Torre de Televisión (<span className="dt-begriff">Fernsehturm</span>) o el 
          <span className="dt-begriff"> Berliner Dom</span>.</p>
        <p><em>Guck mal das!</em></p>
      </section>
    </Layout>
  );
}

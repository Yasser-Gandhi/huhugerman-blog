import Layout from '../../components/Layout';
import utilStyles from '../../styles/utils.module.css';

export default function SaludosYDespedidas() {
  return (
    <Layout
        title="Saludos y despedidas | HuhuGerman"
        description="Alemán para curiosos"
    >
    <section className={utilStyles.headingMd}>
      <h2>Saludos y despedidas</h2>
      <h3 className="subtitulo">1. Begrüßungen und Verabschiedungen</h3>
      <p>Es probable que cuando llegues a Alemania no puedas hablar alemán con el agente de migración, 
        sea por nervios o porque aún no tienes la confianza de hacerlo y termines hablando en inglés. Fail! 
        No obstante, una vez que tengas que desplazarte por la ciudad para llegar a tu nuevo hogar, un&nbsp;
        hotel<span className="dt-begriff"> (Hotel)</span>&nbsp;o un&nbsp;cuarto compartido de estudiantes, 
        al que nos referimos coloquialmente como&nbsp;<span class="dt-begriff">WG (Wohngemeinschaft)</span>,
        querrás saludar a las personas con un&nbsp;hola&nbsp;<span class="dt-begriff">(Hallo)</span>&nbsp;
        o con un&nbsp;buenos días&nbsp;<span class="dt-begriff">(Guten Tag)</span>.
      </p>
      <p>
        Sin embargo, en los países de habla germana como Alemania&nbsp;<span class="dt-begriff">(Deutschland)</span>, 
        Suiza&nbsp;<span class="dt-begriff">(die Schweiz)</span>&nbsp;
        y Austria&nbsp;<span class="dt-begriff">(Österreich)</span>, se hablan varios dialectos&nbsp;
        <span class="dt-begriff">(Dialekte)</span>, es decir, variantes del alemán, 
        que forman parte de la identidad desde niños hasta adultos mayores. 
        Es por eso, que es conveniente comenzar a acostumbrarnos a esos saludos, 
        según la región que tengamos planeada conocer.
      </p>
      <p>En este primer video aprenderemos algunos saludos&nbsp;<span class="dt-begriff">Begrüßungen</span>&nbsp;y despedidas&nbsp;<span class="dt-begriff">Verabschiedungen</span>, para poder hacer el primer contacto con las personas. Además, te daré algunos consejos de fonética para que puedas pronunciar tus primeras palabras desde una perspectiva para hispanohablantes, así como datos relevantes sobre la cultura.</p>
      
    </section>
    </Layout>
  );
}

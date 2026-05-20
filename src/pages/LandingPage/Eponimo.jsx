import eponimo_img from "../../assets/img/eponimo-dr-domingo-bracho-diaz.webp"
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useRef } from "react";

const info = {
  semblanza: "El Dr. Domingo Bracho Díaz es uno de los grandes referentes académicos, científicos y humanos de nuestra ilustre Universidad del Zulia (LUZ) y del gremio médico. Sus aportes han sido fundamentales para la educación superior en Venezuela, la salud pública y la ética cristiana. \n\nSu vida es un testimonio de excelencia: Médico Cirujano egresado de LUZ y Doctor en Ciencias Médicas, consolidó su formación con maestrías en Salud Pública y Epidemiología en instituciones de prestigio mundial como la Universidad de Michigan y la Universidad Central de Venezuela. \n\nSu liderazgo en LUZ es histórico. Tras recorrer cada peldaño de la carrera docente, sirvió a su alma mater como Rector (2000-2004), Vicerrector Académico y Director General de Estudios para Graduados. Su gestión se caracterizó por una visión transformadora y el fortalecimiento de los postgrados, labor reconocida con el Doctorado Honoris Causa y condecoraciones como la Orden Lago de Maracaibo y la Orden Jesús Enrique Lossada. \n\nEl Dr. Bracho es un científico con profunda vocación social. Desde sus inicios como médico rural hasta su labor como fundador de las Escuelas de Bioanálisis, Enfermería y Nutrición, ha dedicado su intelecto a la epidemiología. \n\nOrdenado al Ministerio Pastoral en 2010, ha integrado sus valores espirituales en cada faceta de su vida. Además, siendo autor de obras de la talla de “Espacios de Contemporaneidad” y “Sobre los Muros del Tiempo”, el Dr. Domingo Bracho Díaz se mantiene como un referente de sabiduría y un pilar del pensamiento académico y humanista en el estado Zulia. \n\nTras su jubilación, su compromiso sigue vigente como coordinador del Doctorado en Ciencias de la Salud y mentor de nuevas generaciones de investigadores. "
}

const Eponimo = () => {
  const [expanded, setExpanded] = useState(false)
  const textContainerRef = useRef(null)

  const handleToggleExpand = () => {
    if (expanded) {
      if (textContainerRef.current) {
        textContainerRef.current.scrollTop = 0;
      }
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  }; 

  return (
    <section className="page-section eponimo" id="eponimo">
      <div className="info-container">
        <div className="title-group">
          <h2 className="upper-title">Epónimo</h2>
          <span className="lower-title d-none">Homenajeado</span>
        </div>

        <div className="semblanza-wrapper">
          <div className="eponimo-profile-col">
            <img 
              src={eponimo_img} 
              alt="Epónimo Homenajeado - Dr. Domingo Bracho Díaz" 
              className="eponimo-picture"
              onContextMenu={(e) => e.preventDefault()} 
            />

            <div className="profile-text">
              <p className="eponimo-name fw-semibold">Dr. Domingo Bracho Díaz</p>
              <p className="eponimo-title">Epónimo Homenajeado</p>
            </div>
          </div>

          <div className="semblanza-col">
            <div 
              className={`text-container ${ expanded ? 'expanded' : 'collapsed'}`}
              ref={textContainerRef}
            >
              <h3 className="semblanza-title">Domingo Bracho Díaz: Padrino Epónimo del XIII Congreso Científico Internacional de la Facultad de Medicina</h3>

              <div className="text-wrapper">
                <p className="ws-pw" dangerouslySetInnerHTML={{__html: info.semblanza}} />
              </div>
              
              {
                !expanded && <div className="hidden-gradient"></div>
              }
            </div>

            <Button 
              className="btn-wrapper"
              variant="outline-light"
              onClick={handleToggleExpand}
            >
              { expanded ? 'Contraer información' : 'Continuar leyendo' }
            </Button>
          </div>
        </div>

        <div className="invitacion-conferencia">
          <p className="invitation-text">Nos honra invitar a toda la comunidad académica, estudiantes y profesionales de la salud a la <b>Conferencia Magistral</b> dictada por el <b>Dr. Domingo Bracho Díaz</b> que lleva por título: </p>

          <p className="conferencia-title">"Medicina: La Facultad del Mañana"</p>

          <div className="icons-container">
              <div className="icon-group">
                <div className="group-col">
                  <i className="bi bi-calendar-event"></i>
                </div>
                <div className="group-col">
                  <span>18 de mayo de 2026</span>
                </div>
              </div>
              <div className="icon-group">
                <div className="group-col">
                 <i className="bi bi-clock"></i>
                </div>
                <div className="group-col">
                 <span>08:15 AM</span>
                </div>
              </div>
              <div className="icon-group">
                <div className="group-col">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="group-col">
                 <span>Salón Caroní</span>
                </div>
              </div>
          </div>
          
          <p className="final-text">
            ¡Acompáñanos a escuchar la ponencia de nuestro Padrino Epónimo para dar inicio a esta gran cita científica!
          </p>
        </div>
      </div>
    </section>
  );
};

export { Eponimo }

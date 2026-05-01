import pdfNormativa from "../../assets/resources/NORMATIVA PARA TRABAJOS LIBRES 06-03-2026.pdf"
import pdfFormatoTrabajos from "../../assets/resources/FORMATO  PARA TRABAJOS LIBRES.pdf"

const TrabajosLibres = () => {
  return (
    <section className="page-section trabajos-libres" id="trabajos-libres">
      <div className="info-container md">
        <h2 className="section-title">Trabajos Libres</h2>

        <p className="section-p mb-4">
          Nos complace anunciar la apertura de la recepción de trabajos libres científicos. Invitamos a investigadores, profesionales y estudiantes a presentar sus propuestas en diversas áreas de las Ciencias de la Salud.
        </p>
        <p className="section-p text-center fw-500 mb-2 mt-1">
          Apertura: 13 de febrero de 2026. 
        </p>
        <p className="section-p text-center fw-semibold">
          <u>Fecha tope:</u> 27 de abril de 2026 a las 11:00 AM. 
        </p>
        <p className="section-p mb-sm">
          El Trabajo Libre es una presentación de investigación original realizada por investigadores, profesionales o estudiantes de acuerdo a las normativas establecidas. Estos trabajos abordan temas relevantes y novedosos en el campo de la Medicina y la Salud. 
        </p>
        <p className="section-p mb-sm">
          Los autores presentan sus hallazgos a través de pósteres, presentaciones orales o artículos, en diversas áreas de la salud en modalidades como: estudios clínicos, investigaciones básicas, avances en tratamientos, y más. 
        </p>
        <p className="section-p mb-lg">
          La presentación de estos trabajos permite el intercambio de conocimientos, la discusión académica y la actualización de avances científicos entre la Comunidad de las Ciencias de la Salud.
        </p>

        <div className="span-group">
          <span>Para mayor información, contáctenos a través del correo: </span>
          <br/>
          <a className="email-span" target="blank"
            href="mailto:ccientificafmedluz2025@gmail.com">ccientificafmedluz2025@gmail.com</a>
        </div>

        <p className="mb-2">¡Esperamos tu participación!</p>
        <p className="section-p emphasis">Comité Organizador</p>

        <div className="button-group d-flex flex-column">
          <a className="cta-btn btn-normativa btn btn-light d-none" href="#"
            target="blank">
            Horario de presentaciones
          </a>
          <a 
						className="std-btn btn btn-outline-light" 
						href={pdfNormativa}
            target="blank"
					>
            Descargar normativa
          </a>
          <a 
						className="std-btn btn btn-outline-light" 
						href={pdfFormatoTrabajos}
            target="blank"
					>
            Formato para Trabajos Libres
          </a>
        </div>
      </div>
    </section>
  )
}

export { TrabajosLibres }
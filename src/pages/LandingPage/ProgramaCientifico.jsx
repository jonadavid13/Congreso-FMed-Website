import pdfPrograma from '/resources/PROGRAMA-CIENTIFICO-2026.pdf'
import coverProgramaCientifico from "../../assets/img/Programa-Cientifico-2026.webp"

const ProgramaCientifico = () => {
  return (
    <section
      className="page-section programa-cientifico"
      id="programa-cientifico"
    >
      <div className="info-container">
        <h1 className="section-title d-none">Programa Científico</h1>
        <div className="title-group">
          <span className="upper-title">Programa</span>
          <span className="lower-title">Científico</span>
        </div>

        <a
          className="program-link"
          href={pdfPrograma}
          target="blank"
        >
          <img
            src={coverProgramaCientifico}
            alt="Programa Cientifico 2026"
            className="program-thumbnail"
          />
          <span className="hidden-help-text">
            Haga click para ver el Programa
          </span>
        </a>

        <a
          className="download-btn btn btn-outline-light"
          href={pdfPrograma}
          download="PROGRAMA CIENTIFICO 2026"
        >
          Descargar Programa
        </a>
      </div>
    </section>
  );
};

export { ProgramaCientifico }

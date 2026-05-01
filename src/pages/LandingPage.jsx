import { NavigationBar } from "../components/NavigationBar"
import { ProgramaCientifico } from "./LandingPage/ProgramaCientifico"
import mainBanner from "../assets/img/banner-congreso-ls (crop).webp"
import mainBannerMobile from "../assets/img/banner-congreso-mb.webp"
import { TrabajosLibres } from "./LandingPage/TrabajosLibres"

const LandingPage = () => {
  return (
    <>
      <NavigationBar />
      <main className="main">
        <section className="page-section main-section" id="inicio">
          <picture className="picture-container" id="inscripcion">
            <source srcSet={mainBannerMobile} media="(max-width: 576px)" />
            <img src={mainBanner}
              alt="XIII Congreso Científico Internacional de la Facultad de Medicina" className="main-banner"/>
          </picture>
        </section>
        <section className="page-section inscripciones" id="inscripciones">
          <div className="info-container">
            <div className="info-col">
              <div className="text-wrapper">
                <p className="lead">Inscripciones</p>
                <p>Abiertas</p>
              </div>
            </div>
            <div className="info-col">
              <p className="section-p">
                El decano, Dr. Sergio Osorio Morales, y el Comité Organizador anuncian el inicio del proceso de inscripciones para el:
              </p>

              <h3>XIII CONGRESO CIENTÍFICO INTERNACIONAL DE LA FACULTAD DE MEDICINA DE LA UNIVERSIDAD DEL ZULIA En homenaje al “Dr. Domingo Bracho Díaz”</h3>

              <p className="section-p">Dirigido a: Estudiantes y profesionales del área de la salud.</p>

              <p className="section-p">Fecha: Del 18 al 22 de mayo de 2026.</p>

              <p className="section-p">Lugar: Hotel Tibisay del Lago, Maracaibo, Edo. Zulia.</p>

              <p className="section-p">Cualquier duda sobre el proceso de inscripción o trabajos libres, comunícate al número de contacto: 
                <a 
                  className="phone-link" 
                  href="https://api.whatsapp.com/send?phone=584246856979"
                  target="_blank"
                >
                  0424-6856979
                </a> 
              </p>
            
              <p className="slogan-text mb-4">SALUD DIGITAL CON ROSTRO HUMANO</p>
              
              <div className="cta-container">
                <a className="inscripcion-btn btn btn-light" href="https://forms.gle/npveqmQHTzcNLqjL7" target="_blank">
                  Inscríbete aquí
                </a>
              </div>
            </div>
          </div>
        </section>
        <ProgramaCientifico />
        <TrabajosLibres />
      </main>
    </>
  )
}

export { LandingPage }
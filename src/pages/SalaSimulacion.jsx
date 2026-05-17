import { FormularioSorteoSimul } from "../components/FormularioSorteoSimul";
import { LogoCongreso } from "../components/LogoCongreso";
import { NavigationBar } from "../components/NavigationBar";

const SalaSimulacion = () => {
  return (
    <>
      <NavigationBar />
      <main className="main simulacion">
        <section className="page-section">
          <div className="info-container">
            <h2 className="section-title">Sala de Simulación</h2>

            <p>
              En este apartado podrás solicitar un cupo para participar en la
              Sala de Simulación.{" "}
            </p>

            <FormularioSorteoSimul />

          </div>
        </section>
      </main>
    </>
  );
};

export { SalaSimulacion };

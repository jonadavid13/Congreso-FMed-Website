import { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { solicitarCupoSala } from "../functions/supabaseClient";
import { useRef } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

const FormularioSorteoSimul = () => {
  const alertTimerRef = useRef(null);
  const [cedula, setCedula] =  useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
		show: false,
		variant: 'primary',
		message: '',
		dismissible: true,
		delay: 0
	})

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const cedulaLimpia = cedula.trim();

    if (!/^\d+$/.test(cedulaLimpia)) {
      setAlert({
        show: true,
        variant: 'warning',
        message: 'La cédula solo debe contener números',
        dismissible: true,
        delay: 10000
      })
      return;
    }

    setLoading(true);
    closeAlert();

    const resultado = await solicitarCupoSala(cedulaLimpia);

    if (!resultado.success) {
      setAlert({
        show: true,
        variant: resultado.variant,
        message: resultado.message,
        dismissible: true,
        delay: 10000
      });

      resultado?.exisiting && setCedula('')
    } else {
      setAlert({
        show: true,
        variant: resultado.variant,
        message: resultado.message,
        dismissible: true,
        delay: 7500
      });

      setCedula('');
    }

    setLoading(false)
  };

  const validarCedula = (event) => {
    const { value } = event.target;
    const regex =  /^[0-9]*$/;
    if(regex.test(value) && value !== ""){
      setCedula(value);
    } 
    else {
      setCedula("");
    }
  }

  const closeAlert = useCallback(() => {
		if(alertTimerRef.current) {
			clearTimeout(alertTimerRef.current)
		}
		setAlert(prev => ({ ...prev, show: false }))
	}, [])

	useEffect(() => {
		if(!alert.show) return;

		if(alert.delay && alert.delay > 0){
			alertTimerRef.current = setTimeout(() => {
				closeAlert()
			}, alert.delay);
		}

		return () => {
			clearTimeout(alertTimerRef.current)
		};
	}, [alert.delay, alert.show, closeAlert]);

  return (
    <Form
      id="solicitudCupoSimulacionForm"
      className="form-register-simul"
      onSubmit={handleSubmitForm}
    >
      <Alert
        show={alert.show}
        variant={alert.variant}
        dismissible={alert.dismissible}
        onClose={closeAlert}
      >
        <p className="alert-message ws-pw" dangerouslySetInnerHTML={{ __html: alert.message }} />
      </Alert>
      <Form.Group className="form-group" controlId="formSolicitudByCedula">
        <Form.Label>Cédula de identidad</Form.Label>
        <Form.Control
          className="input-cedula mb-3"
          type="text"
          inputMode="numeric"
          placeholder="Ingrese su cédula de identidad"
          value={cedula}
          minLength={5}
          maxLength={20}
          pattern="\d*"
          onChange={validarCedula}
          disabled={loading}
          required
        />
      </Form.Group>
      <Button
        variant="light"
        className="submit-button"
        type="submit"
        disabled={!cedula || loading}
      >
        {loading ? (
          <>
            <Spinner
              className={`button-spinner ${loading ? "active" : "d-none"}`}
              role="status"
              animation="border"
            />
            Enviando
          </>
        ) : (
          "Enviar"
        )}
      </Button>
    </Form>
  );
};

export { FormularioSorteoSimul };

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const solicitarCupoSala = async (cedula) => {
  try {
    const { data, error } = await supabase.rpc('procesar_solicitud_cupo', {
      p_cedula: cedula.trim()
    })

    if (error) throw error

    switch (data) {
      case 'ERROR_SORTEO_CERRADO':
        return { 
          success: false, 
          variant: 'danger',
          message: 'El proceso de solicitud de cupos se encuentra deshabilitado. \n\nIntente nuevamente en el horario establecido. '
        }
      case 'ERROR_NO_INSCRITO':
        return {
          success: false,
          variant: 'danger',
          message: 'No se encuentra registrado como participante del Congreso. ',
          submessage: 'Si se inscribió luego de las 12:00 PM el día de hoy, podrá optar por un cupo a partir del día siguiente. '
        }
      case 'ERROR_YA_SOLICITADO':
        return {
          success: false,
          variant: 'warning',
          message: 'Ya ha enviado una solicitud previa el día de hoy. ',
          exisiting: true
        }
      case 'EXITO':
        return {
          success: true,
          variant: 'success',
          message: 'Su solicitud ha sido enviada correctamente. \n\nLe invitamos a esperar los resultados en el horario indicado. '
        }
      default:
        return {
          success: false,
          variant: 'danger',
          message: 'Ha ocurrido un error. Espere un poco e intente nuevamente. '
        }
    }
  } catch (error) {
    console.error('Error al solicitar cupo para la Sala de Simulación: ', error.message)
    return {
      success: false,
      variant: 'danger',
      message: 'Error al solicitar cupo para la Sala de Simulación. Espere un poco e intente nuevamente. '
    }
  }
}
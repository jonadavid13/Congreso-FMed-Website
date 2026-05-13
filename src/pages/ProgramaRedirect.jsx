import { useEffect } from "react"

const ProgramaRedirect = () => {
	useEffect(() => {
		const pdfProgramaPath = '/resources/PROGRAMA-CIENTIFICO-2026.pdf'

		window.location.replace(pdfProgramaPath)
	}, [])

  return null
}

export { ProgramaRedirect }
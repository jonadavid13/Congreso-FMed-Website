import { useEffect } from 'react';
import { useLocation } from 'react-router'; 

export const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Buscamos el elemento en el DOM que coincida con el #id
      const elemento = document.getElementById(hash.replace('#', ''));
      if (elemento) {
        // Hacemos un scroll suave hacia la sección
        setTimeout(() => {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // Un delay milimétrico para asegurar que el DOM ya exista
      }
    }
  }, [hash]); // Se dispara cada vez que el hashtag cambie

  return null;
};
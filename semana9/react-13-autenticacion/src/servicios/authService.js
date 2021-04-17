import axios from 'axios';
import { URL_BACKEND } from '../environments/environments';


//ruta logeo
export const postLogin = async (objLogin) => {
    const rpta = await axios.post(`${URL_BACKEND}/login`,
    JSON.stringify(objLogin),{
        headers: {
            "Content-type": "application/json"
        }
    });
    return rpta;
};

//null xq no mando nada al body
export const postVerificar = async (token) => {
    const rpta = await axios.post(`${URL_BACKEND}/verificar`,
    null,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    } );
    return rpta;
}

/**
 * Peticion con fetch
 * const peticion = await fetch(`${URL_BACKEND}/verificar`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  const rpta = await peticion.json();
  return rpta
 */
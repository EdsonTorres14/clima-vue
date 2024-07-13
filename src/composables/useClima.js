export default function useClima() {

    const obtenerClima = ({ ciudad, pais }) => {
        //Importar el Api key
        const key = import.meta.env.VITE_API_KEY

        //Obtenerla lat, lng
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`

        console.log(url)

        //Obtener el clima

    }


    return {
        obtenerClima
    }
}
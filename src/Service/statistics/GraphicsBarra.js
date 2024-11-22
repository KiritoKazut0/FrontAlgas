import axios from "axios";
import { endPoint, token, idPlant } from "../../Utils/credentials";

export const generateStatistics = async () => {
    try {
        const currentDate = new Date();

        const startDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 1, 0, 0, 0, 0));  // Lunes de esta semana en UTC

        const endDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), startDate.getDate() + 6, 23, 59, 59, 999));  
   
        const startDateISO = startDate.toISOString(); 
        const endDateISO = endDate.toISOString();     

        console.log({
            startDate: startDateISO,
            endDate: endDateISO
        });

        const response = await axios.post(`${endPoint}/statistics/report`, {
            plantId: idPlant,
            startDate: startDateISO, 
            endDate: endDateISO,     
            reportType: "days",
            typeSensor: "hydrogen"
        }, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        });

    
        console.log(response.data);
        
        return response.data;

    } catch (error) {
        console.log(error);
        throw new Error('Hubo un error al intentar obtener los reportes');
    }
}


export const generatePredictions = async ({ typeSensor }) => {
    try {
        const currentDate = new Date();

        // StartDate: Dos horas antes de la hora actual (en UTC)
        const startDate = new Date(currentDate);
        startDate.setUTCHours(currentDate.getUTCHours() - 2, currentDate.getUTCMinutes(), currentDate.getUTCSeconds(), 0);

        // EndDate: Final del día (23:59:59.999 UTC)
        const endDate = new Date(Date.UTC(
            currentDate.getUTCFullYear(),
            currentDate.getUTCMonth(),
            currentDate.getUTCDate(),
            23, 59, 59, 999
        ));

        // Convertir fechas a formato ISO (en UTC)
        const startDateISO = startDate.toISOString();
        const endDateISO = endDate.toISOString();

        console.log({
            startDate: startDateISO,
            endDate: endDateISO
        });

        // Hacer la solicitud a la API
        const response = await axios.post(`${endPoint}/statistics`, {
            idPlant: idPlant,
            startDate: startDateISO,
            endDate: endDateISO,
            typePredictions: "hours",
            typeSensor
        }, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        });

        console.log(response.data);

        return response.data;

    } catch (error) {
        console.error('Hubo un error al intentar obtener las predicciones:', error.response?.data || error.message);
    }
};


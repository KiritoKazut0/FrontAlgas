import axios from "axios";
import { endPoint, token, idPlant } from "../../Utils/credentials";

export const generateStatistics = async () => {
    try {
        const currentDate = new Date();

        const startDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 1, 0, 0, 0, 0));  // Lunes de esta semana en UTC

        const endDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), startDate.getDate() + 6, 23, 59, 59, 999));  // Domingo de esta semana en UTC

   
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

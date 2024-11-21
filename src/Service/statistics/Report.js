import axios from "axios";
import { endPoint, token, idPlant } from "../../Utils/credentials";

export const generatePredictions = async () => {
    try {
        const currentDate = new Date();

        const startDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0, 0));
        const endDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59, 999));

        const startDateISO = startDate.toISOString(); 
        const endDateISO = endDate.toISOString();     

        console.log({
            startDate: startDateISO,
            endDate: endDateISO
        });

        const response = await axios.post(`${endPoint}/statistics`, {
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

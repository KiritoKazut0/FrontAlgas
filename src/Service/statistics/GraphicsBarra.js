import axios from "axios";
import { endPoint, token, idPlant } from "../../Utils/credentials";

export const generateStatistics = async () => {
    try {
            
        const currentDate = new Date();
        const startDate = new Date(currentDate);
        startDate.setDate(currentDate.getDate() - currentDate.getDay() + 1);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6); 

        const response = await axios.post(`${endPoint}/statistics/report`, {
            plantId: idPlant,
            startDate,
            endDate,
            reportType: 'days',
            typeSensor: 'hydrogen'
        },{
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

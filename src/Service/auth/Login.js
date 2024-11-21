import axios from "axios";
import { endPoint, name } from "../../Utils/credentials";

const Authentication = async ({email, password}) => {
    try {
        console.log(email, password)
   const result = await axios.post(`${endPoint}/auth/access`, {
            name,
            email,
            password
        });

        console.log(result.data);
        
        return result.data;
        
    } catch (error) {
        console.log(error)
    }
}

export default Authentication;
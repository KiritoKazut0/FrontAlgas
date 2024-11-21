import axios from "axios";

const Authentication = async ({email, password}) => {
    try {
        console.log(email, password)
   const result = await axios.post('http://localhost:3000/auth/access', {
            email,
            password
        });

        return result.data;
        
    } catch (error) {
        console.log(error)
    }
}

export default Authentication;
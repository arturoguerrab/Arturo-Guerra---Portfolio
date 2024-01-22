import axios from "axios";

export const useAxios = async (url)=>{
    try {
        const response = await axios.get(url);
        return({response:response, error:null})
    } catch (error) {
        return({response:null, error:error})
    }
}
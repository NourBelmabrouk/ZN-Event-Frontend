import axios from "axios";
import authHeader from "./auth-header";

const  API_URL="http://localhost:9000/api/test/";

class UserService{
    getPublicContent(){
        return axios.get(API_URL+"all");
    }

    getUserBoard(){
        return axios.get(API_URL+"user",{headers: authHeader()});
    }

    getClientBoard(){
        return axios.get(API_URL+"client",{headers: authHeader()});
    }

    getPrestataireBoard(){
        return axios.get(API_URL+"prestataire",{headers: authHeader()});
    }

    getAdminBoard(){
        return axios.get(API_URL+"admin",{headers: authHeader()});
    }
}

export default new UserService();
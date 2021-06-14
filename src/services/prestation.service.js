import  axios from "axios";
import {forEach} from "react-bootstrap/ElementChildren";

const API_URL="http://localhost:9000/api/service/";

class Prestation {
    addService(type, nom, adresse, code_postal, ville, description,intervention, surface, capacity, foodType, morning,evening,full_day,night,userId){
        return axios.post(API_URL+"add",{
            type,
            nom, adresse,
            code_postal,
            ville,
            description,
            intervention,
            surface,
            capacity,
            foodType,
            morning,
            evening,
            full_day,
            night,
            userId
        })
            .then(response =>{
                return response.data;
            });
    }

    getServicesOfUser(userId){
        return axios.post(API_URL+"findServiceById",{
            userId
        }).then(response =>{
            
            return response.data;
        })
    }

    getServicesBuId(id_service){
        return axios.post(API_URL+"findServicesByServiceId",{
            id_service
        }).then(response =>{

            return response.data;
        })
    }

    deleteServiceById(id_service){
        return axios.post(API_URL+"deleteServiceById",{
            id_service
        }).then(response =>{
            return response.data;
        })
    }

}

export  default new Prestation();
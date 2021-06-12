import  axios from "axios";

const API_URL="http://localhost:9000/api/service/";

class Prestation {
    addService(type, nom, adresse, code_postal, ville, description,intervention, surface, capacity, foodType, morning,evening,full_day,night){
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
            night
        })
            .then(response =>{
                return response.data;
            });
    }

}

export  default new Prestation();
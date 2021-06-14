import  axios from "axios";
import {forEach} from "react-bootstrap/ElementChildren";

const API_URL="http://localhost:9000/api/commande/";

class Commande {
    addCommande(price,numberOfGuests,description,date,service,client){
        return axios.post(API_URL+"add",{
            price,
            numberOfGuests,
            description,
            date,
            service,
            client
        })
            .then(response =>{
                return response.data;
            });
    }

    findCommandeByClientId(client){
        return axios.post(API_URL+"findCommandeByClientId",{
            client
        }).then(response =>{

            return response.data;
        })
    }

    findCommandeByServiceId(id_service){
        return axios.post(API_URL+"findCommandeByServiceId",{
            id_service
        }).then(response =>{
            return response.data;
        })
    }

    findAcceptedCommandes(){
        return axios.get(API_URL+"findAcceptedCommandes").then(response =>{
            return response.data;
        })
    }
    findNonAcceptedCommandes(){
        return axios.get(API_URL+"findNonAcceptedCommandes").then(response =>{
            return response.data;
        })
    }
    findConfirmedCommande(){
        return axios.get(API_URL+"findConfirmedCommande").then(response =>{
            return response.data;
        })
    }
    findNonConfirmedCommande(){
        return axios.get(API_URL+"findNonConfirmedCommande").then(response =>{
            return response.data;
        })
    }

    confirmCommande(id_commande){
        return axios.post(API_URL+"confirmCommande",{
            id_commande
        }).then(response =>{
            return response.data;
        })
    }

    acceptCommande(id_commande){
        return axios.post(API_URL+"acceptCommande",{
            id_commande
        }).then(response =>{
            return response.data;
        })
    }

    deleteCommande(id_commande){
        return axios.post(API_URL+"deleteCommande",{
            id_commande
        }).then(response =>{
            return response.data;
        })
    }

}

export  default new Commande();
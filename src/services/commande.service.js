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

    findAcceptedCommandes(fournisseur){
        return axios.post(API_URL+"findAcceptedCommandes",{
            fournisseur
        }).then(response =>{
            return response.data;
        })
    }
    findNonAcceptedCommandes(fournisseur){
        return axios.post(API_URL+"findNonAcceptedCommandes",{
            fournisseur
        }).then(response =>{
            return response.data;
        })
    }
    findConfirmedCommande(client){
        return axios.post(API_URL+"findConfirmedCommande",{
            client
        }).then(response =>{
            return response.data;
        })
    }
    findNonConfirmedCommande(client){
        return axios.post(API_URL+"findNonConfirmedCommande",{
            client
        }).then(response =>{
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
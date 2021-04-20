import  axios from "axios";

const API_URL="http://localhost:9000/api/auth/";

class AuthService {
    login(email,password){
        return axios.post(API_URL+"signin",{
                email,
                password
            })
            .then(response =>{
                if(response.data.accessToken){
                    localStorage.setItem("user",JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout(){
        localStorage.removeItem("user");
    }

    register(firstName,lastName,phoneNumber,email,password,roles){
        return axios.post(API_URL+"signup",{
            firstName,lastName,phoneNumber,email,password,roles
        });
    }

    getCurrentuser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}

export  default new AuthService();
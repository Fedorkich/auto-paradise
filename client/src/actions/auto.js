import axios from "axios";

export const addAdvert = async (email, marka,model,modification,carBody,engine,engineCopacity,driveUnit,transmission,description,price,name,city,phoneNumber) => {
    try {
        return await axios.post(`http://localhost:5500/api/auth/registration`, {
            email,
            marka,
            model,
            modification,
            carBody,
            engine,
            engineCopacity,
            driveUnit,
            transmission,
            description,
            price,
            name,
            city, 
            phoneNumber
        })
            .catch(function (error) {
                if (error.response) {

                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    throw new Error('Такой пользователь уже существует');
                    // return error.response.data;
                    // return error.response.data.message;

                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    return error.request;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    return ('Error', error.message);
                }
                return error.config;
            });

    }
    catch (error) {
        return error.message
    }
}
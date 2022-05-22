import axios from 'axios';

export const registration = async (email, password) => {
    try {
        return await axios.post(`http://localhost:5500//api/auto/announcement`, {
            email,
            password
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

export const authorization = async (email,password) => {
    try {
        return await axios.post(`http://localhost:5500/api/auth/authorization`, {
            email,
            password
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                throw new Error('Неправильный пароль или логин, введите корректные данные');
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

        
    } catch (error) {
        return error.message;
    }
}
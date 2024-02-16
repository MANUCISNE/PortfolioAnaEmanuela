import axios from 'axios';

function sendEmail(data) {
    return axios({
        url: 'http://127.0.0.1:3030/',
        method: 'post',
        data: data,
        timeout: 1000,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/',
        }
    })
}

export default sendEmail;

require('es6-promise').polyfill();
import axios from 'axios';
import {getItem} from "./helper";

export class APIHelper {

    static getMethod(endpoint, headers) {
        let defaultHeaders = {
                "Authorization": 'Bearer ' + getItem('token', 'access_token'),
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };
        if(Object.keys(headers).length) {
            defaultHeaders = {...defaultHeaders, ...headers};
        }
        return axios.get(endpoint, {
            headers: defaultHeaders
        }).then(function (response) {
            return response['data'];
        }).catch(function (error) {
            return error.response['data'];
        });
    }

    static postMethod(endpoint, payload, headers) {
        return axios.post(endpoint, payload, {
            headers: {
                "Authorization": 'Bearer ' + getItem('token', 'access_token'),
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            type: "POST"
        }).then(response => {
            return response['data'];
        }).catch(function (error) {
            return error.response['data'];
        })
    }

    static putMethod(endpoint, payload, headers) {
        return axios.put(endpoint, payload, {
            headers: {
                "Authorization": 'Bearer ' + getItem('token', 'access_token'),
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            type: "PUT"
        }).then(response => {
            return response['data'];
        }).catch(function (error) {
            return error.response['data'];
        })
    }

    static deleteMethod(endpoint, headers) {
        return axios.delete(endpoint, {
            headers: {
                "Authorization": 'Bearer ' + getItem('token', 'access_token'),
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (response) {
            return response['data'];
        }).catch(function (error) {
            return error.response['data'];
        });
    }
}
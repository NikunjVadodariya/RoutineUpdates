import store from 'store';
import { Cookies } from 'react-cookie';

export function validateEmail(email) {
    return email.match(/^([^\s@]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,})$/igm) != null;

}
/**
 * CORS POLICY CONFLICT RESOLUTION
 * //https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
 * you can use either cors anywhere proxy online (could be good to simlulate slow loading times)
 * OR local cors anywhere(preferred for speed)
 */
// https://cors-anywhere.herokuapp.com/
//use this address when implementing
//https://github.com/Rob--W/cors-anywhere#readme

import axios from 'axios';

//Resolve Type problem with username and API key
const API_KEY:any = process.env.REACT_APP_API_KEY;
//const BASEURL: string = 'https://cors-anywhere.herokuapp.com/https://www.reed.co.uk/api/1.0';
const BASEURL: string = 'http://localhost:8080/https://www.reed.co.uk/api/1.0';

export const reedAPI = axios.create({
  auth: {
    username: API_KEY,
    password: ''
  },
  baseURL: BASEURL,
  responseType: "json",
})



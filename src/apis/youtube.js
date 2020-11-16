import axios from 'axios';
// Omit this file making a change
// const APIKEY = 'AIzaSyA41OopxiMLIkA_ZbbnYQHCYXmZ_Oj2pI4';

const APIKEY= process.env.APIKEY

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${proccess.env.APIKEY}`
    }
});
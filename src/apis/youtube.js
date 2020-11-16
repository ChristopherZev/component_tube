import axios from 'axios';

const APIKEY = process.env.APIKEY
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${APIKEY}`
    }
});
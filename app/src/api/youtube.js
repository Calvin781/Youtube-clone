import axios from 'axios';
const KEY = 'AIzaSyC51-MX97YHpDZ5wJiZ_BPEDhszhQ1t5QA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
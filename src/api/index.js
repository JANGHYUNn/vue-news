import axios from 'axios';

// 1. HTTP Request, Response 와 관련된 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/',
    
}

function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(itemId) {
    return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo
}


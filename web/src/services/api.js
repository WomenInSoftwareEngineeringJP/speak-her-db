import axios from 'axios';

const $axios = axios.create({
  baseURL: '/.netlify/api',
  timeout: 10000, // 10 seconds
});

function fetch(entity, successCallback, errorCallback) {
  $axios.get(entity)
    .then((response) => successCallback(response.data.records))
    .catch((error) => errorCallback(error));
}

function create(entity, payload, successCallback, errorCallback) {
  $axios.post(entity, payload)
    .then((response) => successCallback(response.data))
    .catch((error) => errorCallback(error));
}

export default { fetch, create };

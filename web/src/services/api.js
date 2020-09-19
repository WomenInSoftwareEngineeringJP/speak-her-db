import axios from 'axios';

const $axios = axios.create({
  baseURL: '/.netlify/functions',
  timeout: 10000, // 10 seconds
});

function getLocations(successCallback, errorCallback) {
  // TODO: Add some caching logic here
  $axios.get('locations')
    .then((response) => successCallback(response.data.records))
    .catch((error) => errorCallback(error));
}

function getTopics(successCallback, errorCallback) {
  // TODO: Add some caching logic here
  $axios.get('topics')
    .then((response) => successCallback(response.data.records))
    .catch((error) => errorCallback(error));
}

export default { getLocations, getTopics };

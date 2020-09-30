import axios from 'axios';

const $axios = axios.create({
  baseURL: '/.netlify/functions',
  timeout: 10000, // 10 seconds
});

// TODO: Add some caching logic/state management here
// https://github.com/WWCodeTokyo/speak-her-db/issues/146

function getLocations(successCallback, errorCallback) {
  $axios.get('locations')
    .then((response) => successCallback(response.data.records))
    .catch((error) => errorCallback(error));
}

function getTopics(successCallback, errorCallback) {
  $axios.get('topics')
    .then((response) => successCallback(response.data.records))
    .catch((error) => errorCallback(error));
}

export default { getLocations, getTopics };

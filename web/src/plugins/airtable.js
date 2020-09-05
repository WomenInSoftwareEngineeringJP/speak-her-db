import Airtable from 'airtable';
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
Airtable.install = function (Vue) {
  this.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
  });

  Vue.prototype.$db = this.base(process.env.VUE_APP_AIRTABLE_DB_ID);

  Vue.prototype.$locations = [];

  Vue.prototype.$getLocations = function (successCallback, errorCallback) {
    if (this.$locations.length) {
      // return cached response
      successCallback(this.$locations);
    } else {
      this.$db('Location').select({
        view: 'All',
        sort: [
          { field: 'code', direction: 'asc' },
        ],
      }).firstPage((error, records) => {
        if (error) {
          console.error(`Error fetching locations: ${error}`);
          errorCallback(error);
        } else {
          this.$locations = records; // cache response
          successCallback(records);
        }
      });
    }
  };

  Vue.prototype.$topics = [];

  Vue.prototype.$getTopics = function (successCallback, errorCallback) {
    if (this.$topics.length) {
      // return cached response
      successCallback(this.$topics);
    } else {
      this.$db('Topics').select({ view: 'All' }).firstPage((error, records) => {
        if (error) {
          console.error(`Error fetching topics: ${error}`);
          errorCallback(error);
        } else {
          this.$topics = records; // cache response
          successCallback(records);
        }
      });
    }
  };

  Vue.prototype.$languages = [];

  Vue.prototype.$getLanguages = function (successCallback, errorCallback) {
    if (this.$languages.length) {
      // return cached response
      successCallback(this.$languages);
    } else {
      this.$db('Languages').select({ view: 'All' }).firstPage((error, records) => {
        if (error) {
          console.error(`Error fetching languages: ${error}`);
          errorCallback(error);
        } else {
          this.$languages = records; // cache response
          successCallback(records);
        }
      });
    }
  };
};

export default Airtable;

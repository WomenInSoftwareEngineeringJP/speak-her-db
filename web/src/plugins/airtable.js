import Airtable from 'airtable';

export default {
  install: (app) => {

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
  });

  app.config.globalProperties.$db = Airtable.base(process.env.VUE_APP_AIRTABLE_DB_ID);

  app.config.globalProperties.$locations = [];

  app.config.globalProperties.$getLocations = function (successCallback, errorCallback) {
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

  app.config.globalProperties.$topics = [];

  app.config.globalProperties.$getTopics = function (successCallback, errorCallback) {
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

  app.config.globalProperties.$languages = [];

  app.config.globalProperties.$getLanguages = function (successCallback, errorCallback) {
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
  }
}


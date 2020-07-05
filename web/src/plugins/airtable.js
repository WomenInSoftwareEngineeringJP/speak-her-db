import Airtable from 'airtable';

Airtable.install = function (Vue) {
  /* eslint-disable no-param-reassign */

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
      this.$db('Location').select({ view: 'All' }).firstPage((error, records) => {
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
};

export default Airtable;

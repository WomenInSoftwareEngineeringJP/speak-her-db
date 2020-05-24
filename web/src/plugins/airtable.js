const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
});

const db = Airtable.base(process.env.VUE_APP_AIRTABLE_DB_ID);

export default db;

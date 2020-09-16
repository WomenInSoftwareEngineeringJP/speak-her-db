const Airtable = require('airtable');

/* eslint-disable func-names */
exports.handler = function (event, context, callback) {
  const response = {
    statusCode: 200,
    body: '',
    headers: {
      'content-type': 'application/json',
      'cache-control': 'Cache-Control: max-age=60, public',
    },
  };

  if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_DB_ID) {
    const error = 'Missing one or more Airtable ENV variables.';
    response.statusCode = 500;
    response.body = JSON.stringify({ error });

    console.error(error);
    return callback(error, response);
  }

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY,
  });

  const base = Airtable.base(process.env.AIRTABLE_DB_ID);

  if (event.httpMethod === 'GET') {
    const query = { view: 'All', sort: [{ field: 'code', direction: 'asc' }] };
    base('Location')
      .select(query)
      .firstPage((error, records) => {
        if (error) {
          response.statusCode = 500;
          response.body = JSON.stringify({ error });
          console.error(`Error fetching Locations: ${error}`);
          return callback(error, response);
        }
        response.body = JSON.stringify({ records });
        return callback(null, response);
      });
  }
  if (event.httpMethod === 'POST') {
    base('Location')
      .create(event.body, { typecast: true }, (error, records) => {
        if (error) {
          response.statusCode = 500;
          response.body = JSON.stringify({ error });
          console.error(`Error fetching Locations: ${error}`);
          return callback(error, response);
        }
        response.body = JSON.stringify({ records });
        return callback(null, response);
      });
  }
  return null;
};

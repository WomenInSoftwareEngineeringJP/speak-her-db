![GitHub](https://img.shields.io/github/license/tuttiq/speak-her-br)
[![Netlify Status](https://api.netlify.com/api/v1/badges/24555378-b065-47de-a170-46c23cb537de/deploy-status)](https://app.netlify.com/sites/speak-her-br/deploys)
![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fspeak-her-br.netlify.app)

# SpeakHer

https://speak-her-br.netlidy.app/

SpeakHer is a database of women public speakers. A common excuse we hear from conference and event organizers is how they can't find any women. Let's banish that excuse. Please join our list and make sure that women get fair representation for public speaking engagements.

The purpose of gathering this information is so that event organizers can easily search for female speakers and that fellow speakers can connect with and support each other

## How to Contribute

Please check out our [contributor guidelines](./CONTRIBUTING.md).

## Code of Conduct

All contributors to this repository must follow the [Code of Conduct](./CODE_OF_CONDUCT.md). Thank you for helping us build an inclusive open-source project.

## Running the code

Requirements:
- [Yarn](https://yarnpkg.com/)
- A free [Airtable account](https://airtable.com)

### Database connection

This project uses Airtable as a data source. Follow these steps to configure a database on your local environment:

1. Make a copy of `.env.sample` and rename it to `.env.development`
2. Create a table on your Airtable account
3. Get your Airtable API Key on your [Airtable account](https://airtable.com/account)
4. Get the development database ID on the [DB API Docs](https://airtable.com/api/)
5. Edit `.env.development` to add your `AIRTABLE_API_KEY` and the development `AIRTABLE_DB_ID`

`.env.development`
```
NODE_ENV=development
VUE_APP_AIRTABLE_DB_ID=[dev database ID here]
VUE_APP_AIRTABLE_API_KEY=[your api key here]
```

You can change other DB configs on `/plugins/airtable.js`.

Further information on the database schema and query documentation [here](https://airtable.com/api) (login with the account you registered on step 2).


### Running the app

```
cd web
yarn serve
```

Access it on `localhost:8080` on your browser.

### Testing production on local environment

If you have access to the production database, you can setup your production config on `.env.production` and run the app in production mode using the command `yarn serve --mode production`

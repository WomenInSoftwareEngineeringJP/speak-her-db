![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Fspeakher.jp)
![GitHub](https://img.shields.io/github/license/WWCodeTokyo/speak-her-db)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4db391fa-4beb-4632-afe5-0931358657f2/deploy-status)](https://app.netlify.com/sites/speak-her-db/deploys)
![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fspeakher.jp)
![GitHub contributors](https://img.shields.io/github/contributors/WWCodeTokyo/speak-her-db)
![Twitter Follow](https://img.shields.io/twitter/follow/speakherjapan?style=social)


# SpeakHer

https://speakher.jp/

SpeakHer is a database of women public speakers in Japan. A common excuse we hear from conference and event organizers is how they can't find any women. Let's banish that excuse. Please join our list and make sure that women get fair representation for public speaking engagements.

The purpose of gathering this information is so that event organizers can easily search for women speakers and that fellow speakers can connect with and support each other

### This project is maintained by Women Who Code Tokyo
![GitHub Org's stars](https://img.shields.io/github/stars/WWCodeTokyo?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/wwcode_tokyo?style=social)
![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/wwcodetokyo)

## How to Contribute

Please check out our [contributor guidelines](https://github.com/WWCodeTokyo/speak-her-db/blob/master/CONTRIBUTING.md).

## Code of Conduct

All contributors to this repository must follow the [Code of Conduct](https://www.womenwhocode.com/codeofconduct). Thank you for helping us build an inclusive open-source project.

## Running the code

Requirements:
- [Yarn](https://yarnpkg.com/)
- A free [Airtable account](https://airtable.com)

### Database connection

This project uses Airtable as a data source. Follow these steps to configure a database on your local environment:

1. Go into the web directory: `cd web`
2. Make a copy of `.env.sample` and rename it to `.env.development`
3. Register as a contributor of the Airtable development database [clicking here](https://airtable.com/invite/l?inviteId=invLCTAgGOsrWkXGM&inviteToken=3280cfd046a759fbcf5cb70371fbfab6dd306c9ce9851c2bd50da6de57b04121)
4. Get your Airtable API Key on your [Airtable account](https://airtable.com/account)
5. Get the development database ID on the [Dev DB Docs](https://airtable.com/appHpbskGp4dMpqEO/api/docs#javascript/introduction)
6. Edit `.env.development` to add your `AIRTABLE_API_KEY` and the development `AIRTABLE_DB_ID`

`.env.development`
```
NODE_ENV=development
VUE_APP_AIRTABLE_DB_ID=[dev database ID here]
VUE_APP_AIRTABLE_API_KEY=[your api key here]
AIRTABLE_DB_ID=[dev database ID here]
AIRTABLE_API_KEY=[your api key here]
```

You can change other DB configs on `/plugins/airtable.js`.

Further information on the database schema and query documentation [here](https://airtable.com/appHpbskGp4dMpqEO/api/docs#javascript/introduction) (login with the account you registered on step 2).


### Running the app

```
cd web
yarn install
yarn serve
```

Access it on `localhost:8080` on your browser.

#### Useful commands

Install dependencies
```
yarn install
```

Compiles and hot-reloads for development
```
yarn run serve
```

Compiles and minifies for production
```
yarn run build
```

Lints and fixes files
```
yarn run lint
```

### Running tests

```
yarn run test
```

Run unit tests
```
yarn run test:unit
```

### Testing production on local environment

If you have access to the production database, you can setup your production config on `.env.production` and run the app in production mode using the command `yarn serve --mode production`

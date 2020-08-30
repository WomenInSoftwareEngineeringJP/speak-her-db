# SpeakHer

SpeakHer is a database of women public speakers in Japan. A common excuse we hear from conference and event organizers is how they can't find any women. Let's banish that excuse. Please join our list and make sure that women get fair representation for public speaking engagements.

The purpose of gathering this information is so that event organizers can easily search for female speakers and that fellow speakers can connect with and support each other

## Code of Conduct

All contributors to this repository must follow the [Code of Conduct](https://www.womenwhocode.com/codeofconduct). Thank you for helping us build an inclusive open-source project.

## Running the code

Requirements:
- [Yarn](https://yarnpkg.com/)


### Database connection

This project uses Airtable as a data source. Follow these steps to configure a database on your local environment:

1. Make a copy of `.env.sample` and rename to just `.env`
2. Get your Airtable API Key on your [Airtable account](https://airtable.com/account)
3. Edit `.env` to add your `AIRTABLE_API_KEY` and `AIRTABLE_DB_ID`

`.env`
```
VUE_APP_AIRTABLE_API_KEY=[your api key here]
VUE_APP_AIRTABLE_DB_ID=[your database ID here]
```

You can change the DB configs on `/plugins/airtable.js`.

Further information on the database schema and query documentation [here](https://airtable.com/apprMeMSVqvZhoE6a/api/docs#javascript/introduction).



How to run this:

```
cd web
yarn serve
```

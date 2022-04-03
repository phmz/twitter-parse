## Installation

```bash
$ npm install
$ yarn install
```
### Environment variables
```
TWITTER_BEARER_TOKEN    => Twitter API bearer token   
TWITTER_MAX_RESULTS     => Max number of tweets to fetch (number between 10 and 100)

POSTGRES_HOST           => Postgres host
POSTGRES_PORT           => Postgres port (default: 5432)
POSTGRES_USER           => Postgres user
POSTGRES_PASSWORD       => Postgres password
POSTGRES_DB             => Postgres database
```
## Running the app

```bash
# development
$ ts-node src/main.ts
$ ts-node src/main.ts "#<keyword>"

$ npm start
$ yarn start
```
## Installation

```bash
$ npm install
$ yarn install
```
### Environment variables
```
TWITTER_BEARER_TOKEN    => Twitter API bearer token   
TWITTER_MAX_RESULTS     => Max number of tweets to fetch (number between 10 and 100)
```
## Running the app

```bash
# development
$ ts-node src/main.ts
$ ts-node src/main.ts "#<keyword>"
```
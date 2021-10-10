# How to use
## Requirements
- Node.js (used 14.18.0 LTS)
## Starting up
### Prerequesites
This is only required if you intend to use the commented out api urls see `Closing words` at the end of this readme.
Add file `.env` in root directory with following contents
```sh
GEOCODING_API_KEY=
DARK_SKY_API_KEY=
```
Geocoding api can be requested at https://opencagedata.com/api#quickstart  
Darksky currently doesn't accept new signups although it can be requested at https://darksky.net/dev

### Installation
```sh
npm i
```
### Running the project
```sh
npm run start
```
## Available API url
```sh
/api/v1/getWeather?city={cityName}
```
Where `cityName` is name of the city you want to find weather forecast for.

### Closing words
```sh
/src/api/getWeather.js
```
This file includes some commented code to live 3rd party API that has been substituted by wiremock mock responses. Don't comment out unless you know what you doing, and have obtained relevant API keys.

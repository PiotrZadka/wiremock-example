# How to use
## Requirements
- Docker (https://www.docker.com/products/docker-desktop)

## Starting up
### Running the project
In root folder run following command
```sh
docker-compose up
```
## Available mock APIs
```sh
http://localhost:8080/api/v1/getWeather?city=Halifax
```
```sh
http://localhost:8080/geocode/v1/json?q=Halifax
```
```sh
http://localhost:8080/forecast/<regexPattern>/44.648618,-63.5859487?units=uk2
```
Where `regexPattern` is any string containing lowercase letters and numbers `[a-z0-9]`

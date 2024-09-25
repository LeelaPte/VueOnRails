# VueOnRails

## Docker Installation
### Building
```
docker compose build
```
### Run the app
```
docker compose up
```
### Stop the app
```
docker compose down
```
### Common Scripts
#### Rails Console
```
docker compose run vue_on_rails_app rails c
```
#### Remove the Volumes
```
docker compose down -v
```

## Localhost Installation
### Ruby Version
This project is using ruby `3.3.5`
### Install Rails
- Install Yarn dependencies: `yarn install`
- Install Ruby Bundler: `gem install bundler`
- Install project gems: `bundle install`

## Run Servers
- In parallel is required to run `rails server` in one terminal and in other terminal run `webpack`.
- You have to add the `.env` file to set database `username` and `password`.

### Run Rails Server
```
rails s
```
### Run Webpack
```
bin/webpack-dev-server
```

### Common Scripts
#### Clear Webpack Cache
```
bin/webpack --clear-cache
```

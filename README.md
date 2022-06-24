# Setup project 

## Local development

**Prepare environment**
1. Install node 16.x using nvm
2. Install ruby 2.6.5 using rvm
3. Install postgres
4. Install & setup ngrok
4. Create .env file based on .env.example. Replace all placeholders with you app info
5. Install frontend dependencies `npm i`
6. Install backend dependencies `bundle install`
7. Prepare database
```shell
export (cat .env | xargs) # load envs
rails db:create
rails db:migrate
```
8. Up project (see follow section)
9. Make ssl certificate trusted for that open app in shopify, open link to js or css in new tab and allow this certificate

**Up project**

1. start ngrok
2. load envs `export (cat .env | xargs)`
2. start backend `rails s`
3. start frontend `npm run start`


## Docker development

**Prepare environment**
1. Install docker & docker compose
2. Install & setup ngrok
3. Create .env file based on .env.example. Replace all placeholders with you app info
4. Prepare containers
```shell
docker compose build
docker compose run --rm api bundle exec rails db:create
docker compose run --rm api bundle exec rails db:migrate
```
5. Up project (see follow section)
6. Make ssl certificate trusted for that open app in shopify, open link to js or css in new tab and allow this certificate

**Up project**

1. start ngrok
2. up containers `docker compose up`

## API Documentation
Swagger is available at http://localhost:7777/apidoc

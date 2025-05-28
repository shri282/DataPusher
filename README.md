
Before using API sync the db with the models

await sequelize.sync({ force: false })

account module

1. create account

curl --location 'http://localhost:5000/api/accounts' \
--header 'Content-Type: application/json' \
--data-raw '{
    "accountName": "demo",
    "email": "demo@gamil.com"
}'

2. get account

curl --location 'http://localhost:5000/api/accounts/1'

3. get accounts

curl --location 'http://localhost:5000/api/accounts'

4. update accounts

curl --location --request PUT 'http://localhost:5000/api/accounts' \
--header 'Content-Type: application/json' \
--data-raw '{
    "accountId": 1,
    "accountName": "demo",
    "email": "demo@gmail.com"
}'

5. delete account

curl --location --request DELETE 'http://localhost:5000/api/accounts/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "accountId": 2,
    "accountName": "sh",
    "email": "shrikadhir10@gmail.com"
}'


destination module

1. get destination
  curl --location 'http://localhost:5000/api/destinations/1'
3. get destinations
  curl --location 'http://localhost:5000/api/destinations'
5. create destination
   curl --location 'http://localhost:5000/api/destinations' \
--header 'Content-Type: application/json' \
--data '{
  "accountId": 1,
  "url": "https://fake-json-api.mock.beeceptor.com/users",
  "httpMethod": "GET",
  "headers": {
    "APP_ID": "1234APPID1234",
    "APP_SECRET": "enwdj3bshwer43bjhjs9ereuinkjcnsiurew8s",
    "ACTION": "users.get",
    "Content-Type": "application/json", 
    "Accept": "*/*"
  }
}
'
7. update destination
   curl --location --request PUT 'http://localhost:5000/api/destinations' \
--header 'Content-Type: application/json' \
--data '{
  "destinationId": 1,
  "url": "https://fake-json-api.mock.beeceptor.com/users",
  "httpMethod": "GET",
  "headers": {
    "APP_ID": "1234APPID1233",
    "APP_SECRET": "enwdj3bshwer43bjhjs9ereuinkjcnsiurew8s",
    "ACTION": "users.get",
    "Content-Type": "application/json", 
    "Accept": "*/*"
  }
}
'
9. delete destination
   curl --location --request DELETE 'http://localhost:5000/api/destinations/1'
   
data pusher module

1. push data

   curl --location 'http://localhost:5000/api/server/incoming_data' \
--header 'token: 372e8960-b74f-4e81-9033-c59da012a788' \
--header 'Content-Type: application/json' \
--data '{
    "username": "ravi"
}'

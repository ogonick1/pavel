BASE_URL=https://radiant-escarpment-28889.herokuapp.com/

# POST /registration

request body

```json
{
    "email": "some.mail@gmail.com",
    "firstName": "First Name",
    "lastName": "Last Name",
    "password": "password"
}
```

response body
```json
{
  "user": {
    "email": "som2e-maid21@gmail.com",
    "firstName": "Pavel",
    "lastName": "Rozhok",
    "password": "$2b$10$0IXuGaea7n3V/iRO3rRjTOkHP9oxOxLgbXGEMZes8elh3Q1JK2di6",
    "createdAt": 1636287756204,
    "updatedAt": 1636287756204,
    "id": "6a641e43-5d1b-4df6-b0e2-80f4a460d98b"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTY0MWU0My01ZDFiLTRkZjYtYjBlMi04MGY0YTQ2MGQ5OGIiLCJpYXQiOjE2MzYyODc3NTZ9.MsQNCOashaAebCzgBA6BVLULmxaaqGfdYR6JLEKR0CY"
}
```

# POST /login

request body

```json
{
  "email": "some.mail@gmail.com",
  "password": "password"
}
```

response body
```json
{
  "user": {
    "email": "som2e-maid21@gmail.com",
    "firstName": "Pavel",
    "lastName": "Rozhok",
    "password": "$2b$10$0IXuGaea7n3V/iRO3rRjTOkHP9oxOxLgbXGEMZes8elh3Q1JK2di6",
    "createdAt": 1636287756204,
    "updatedAt": 1636287756204,
    "id": "6a641e43-5d1b-4df6-b0e2-80f4a460d98b"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTY0MWU0My01ZDFiLTRkZjYtYjBlMi04MGY0YTQ2MGQ5OGIiLCJpYXQiOjE2MzYyODc3NTZ9.MsQNCOashaAebCzgBA6BVLULmxaaqGfdYR6JLEKR0CY"
}
```

# GET /get-profile

request header
```json
{
  "authorization": "Bearer {token}"
}
```

response body
```json
{
  "email": "som2e-mai21@gmail.com",
  "firstName": "Pavel",
  "lastName": "Rozhok",
  "password": "$2b$10$Wc57alLfYXaA5jYaFcttaeoP6DfLUR5A/7VFFAildxX5dGZKt.pE6",
  "createdAt": 1636205899138,
  "updatedAt": 1636205899138,
  "id": "5d20e240-a7bd-4f2a-953d-cc412755568f"
}
```

# ERROR CODES

* DEFAULT
* INTERNAL_SERVER_ERROR
* USER_BY_PROVIDED_TOKEN_NOT_FOUND
* USER_WITH_EMAIL_NOT_EXIST
* USER_WITH_EMAIL_ALREADY_EXIST
* BAD_REQUEST_EMAIL_OR_PASSWORD_NOT_PROVIDED
* BAD_REQUEST_WRONG_PASSWORD

# Flight And Search Service
- Clone the project

- npm install to install the packages

- setup the .env file with below variable
    - `PORT=3000`


- Inside the src/config folder,create the new file with name config.json and paste this:
```
{
  "development": {
    "username": <YOUR_DB_USER>
    "password": <YOUR_DB_PASSWORD>
    "database": "FlightSearch_New",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
 
}
```

- after this go the src folder and execute npx sequelize db:create

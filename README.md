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

## DB Design
   - Airplane Table `id,model_number,capacity,capacity `
   - Flight Table `id,flight number,airplane_id, src_airport_id,dest_airport_id,departure_date,arrival_date`
   - Airport `id,name,city_id,address`
   - City `id,name`

   

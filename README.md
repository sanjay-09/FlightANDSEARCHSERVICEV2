1...Clone the project

2.... npm install to install the packages

3.....setup the .env file with below variable
    PORT


4....Inside the src/config folder,create the new file with name config.json and paste this:
{
  "development": {
    "username": <YOUR_DB_USER>
    "password": <YOUR_DB_PASSWORD>
    "database": "FlightSearch_New",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
 
}

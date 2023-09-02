# The Roster App

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

* Two modules are included in this repositiory
  * **pipedreams-react** : the front-end Reat web application
  * **pipedreams-backend** : the back-end fastify API

## Front End

Please switch to `./pipedreams-react` folder

### Running

Start in the development mode with
```
npm start
```

Build the destribution with
```
npm build
```

Run unit tests with
```
npm test
```

### Configuration

* `.env` file
  * `REACT_APP_API_BASE_URL` base url for api requests
* React app will be running at port `3000`
  * Backend requests will be proxied to `localhost:3001`. Configurable in `package.json`
* Please run the backend on expected port

## Back End

Please switch to `./pipedreams-backend` folder

Start in the development mode with
```
npm dev
```

Run unit tests with
```
npm test
```
### Configuration

* `.env` file
  * `SERVER_PORT` port to use
  * `DB_URL` uri to mongodb database
  * `DB_COLLECTION` database collection to use
* Please install/run mongo db
* Note: tests might fail if ports are in-use

## Data

* If the table is empty, data is loaded from `cooks.json` and `waiters.json` files located at `backend/data`
* Data structure not changed in database. The content of the file is stored as it is
  * **data** property: content of the file
  * **key** property: name of the staff type
* Datafile format
  ```json
    {
        "<day>": [
           "<staff 1>",
           "<staff 2>" 
        ]
    }
  ```

## API endpoints

* `GET /GetCooks`
  * Query Params
    * `day`: optional week of day
  * Sample Response
    ```json
    {"monday":["John","William","James","Charles"],"tuesday":["George","Frank","Joseph"],"wednesday":["Thomas","Henry","Robert","Edward","Harry","Walter"],"thursday":["Albert","Samuel","David","Louis","Joe","Charlie"],"friday":["Clarence","Richard","Andrew","Daniel","Ernest"]}
    ```
* `GET /GetWaiters`
  * Query Params
    * `day`: optional week of day
  * Sample Response
    ```json
    {"monday":["Howard","Martin","Michael","Bert"],"tuesday":["Roy","Herbert","Jacob","Tom","Elmer","Carl","Lee"],"wednesday":["Peter","Benjamin","Frederick","Willie","Alfred","Sam"],"thursday":["Will","Jesse","Oscar","Lewis"],"friday":["Herman","Jim","Francis","Harvey","Earl","Eugene","Ralph","Ed"]}
    ```

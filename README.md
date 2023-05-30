# Favourites simple BE
This is the Favourites BE for [nasa-asteroids-fe](https://github.com/eaguerralde/nasa-asteroids-fe) web app. It is written as a simple express CRUD server using Typescript and storing the data in-memory for demostration purmposes. Note that data resets on every serveer restart.

## Setup and run

Add a `.env` file at the root of the project and ser the server port like `PORT=3001`, then:

### `yarn install` 

Install all dependencies.

### `yarn build`

Build the project into `/dist` folder.

### `yarn start`

Runs the project from `/dist` folder.

### `yarn start:dev`

Runs the project in development mode from `/src` folder.

## CRUD API
CRUD API is available at `/favourites` endpoint. Create and Delete require passing a JSON body with the shape of `Favourite`:

```
{
  neoId: number;
  userId: number;
}
```
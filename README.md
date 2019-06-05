# Epam React Mentoring Readme file

## Stack / tooling

Following tools are used in this project:

- Reactjs
- Typescript
- Jest + Enzyme
- Storybook

## Project setup

Develepoment setup is rather simple. First install dependencies using `npm i` then run `npm run dev`.
Webpack automatically watches and updates files. No `webpack-dev-server` is currently needed.

### Testing

- Unit Testing is set up under `npm run test` command. (for coverage `npm run test:coverage`) should be used.
- Visual testing / documentation is set up under `npm run storybook` command

## Building Project

`npm run prod`

# Dev notes

to run project two npm scripts have to be called: `npm run dev` and `npm run serve`.
These can be called separately or using `npm start` command.
In future this will also run storybook and possibly testing.

Note: even though `npm run dev` runs `webpack` command, due to webpack config files being written in TypeScript it has to be run in node context, thus through `npm run dev`

## View/ component structure

## Redux setup

Actions and reducers are conteainer (view) wide. Everything is imported in index.ts from view components.

Redux State:

```javascript
{
  SearchResults: {
    query: string;
    movies?: array;
    sorting: string;
    filter: string;
  },
  MovieDetails: {
    id: number;
    similarMovies: array;
  }
  fetching: {
    status: boolean,
    error: "false" | {}
  }
  UI: {
    spinner: true;
  }
}
```

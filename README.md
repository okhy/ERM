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

- Unit Testing is set up under `npm run test` command.
- Visual testing / documentation is set up under `npm run storybook` command

## Building Project

`npm run prod`

# Dev notes

## View/ component structure

## Redux setup

Actions and reducers are conteainer (view) wide. Everything is imported in index.ts from view components.

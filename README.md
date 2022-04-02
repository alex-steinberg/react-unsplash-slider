# Unsplashed

Demo app showing topics and photos from Unsplash.com.

Please leave a star if you've learned something from this project.

## Usage

To run the app locally: `npm run dev`

To build for production: `npm run build`

To run e2e tests: `npm run cypress:run`

Or to view the interactive testing window run: `npm run cypress:open`

## Notes

This app was created using the Vite [starter template](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) `react-ts`.

## Dependencies

Dependencies are:

- [React query](https://github.com/tannerlinsley/react-query) for server state
- [Chakra UI](https://github.com/chakra-ui/chakra-ui) for UI components
- [Styled Components](https://github.com/styled-components) for customised styling
- [Vite](https://github.com/vitejs/vite) for the build
- [TypeScript](https://www.typescriptlang.org/) cos life's better with types
- [Cypress](https://docs.cypress.io/) for integration tests

### Styled Components

There are some Styled Components relics about from when I initially built the app without Chakra UI, but these could be replaced by Chakra UI quite easily.
Where Styled Components really helps is in overriding 3rd party styles -- in this case, those of Swiper JS.

### Unit testing

At some point we'll need unit testing, and when that day arrives I'd look at [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) since it's [recommended](https://reactjs.org/docs/testing.html#tools) by the React team.
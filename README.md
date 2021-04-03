**Fully Accessible Modal Dialog followed by WAI-ARIA Modal Authoring Practices.**

[Learn More WAI-ARIA Modal Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#alertdialog).

# Project in Progesss

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A fully accessible and flexible React modal built according [WAI-ARIA Authoring Practices](http://www.w3.org/TR/wai-aria-practices/#dialog_modal).

This module provides a minimally styled "[container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)" component to wrap your fully-styled "presentational" component. It provides the following features, while giving you complete control of the content:

  - Focus is trapped within the modal: Tab and Shift+Tab will cycle through the modal's focusable nodes
  without returning to the main document beneath.
  - Escape will close the modal.
  - Scrolling is frozen on the main document beneath the modal.
  - When the modal closes, focus returns to the element that was focused just before the modal activated.
  - The dialog element has an ARIA `role` of `dialog` (or `alertdialog`).
  - The dialog element has an ARIA attribute designating its title, either `aria-label` or `aria-labelledby`.
  - By default, clicking on the modal's underlay (outside the dialog element) will close the modal (this can be disabled).
  - The modal is appended to the end of `document.body` instead of its taking up its source-order position within the React component tree.

"Flexible" mostly means that this module provides absolutely minimal inline styles — just enough to get the thing working — but does not provide "complete" modal styling that would get in your way. You get to (have to) style the dialog yourself. (Maybe make a fancy-looking modal module that others could use, which depends on this one behind the scenes?)

## Project Goals

- Full accessibility
- Maximum flexibility
- Absolutely minimal styling
- Modular construction: this module is built on top of a few small JS modules that could be used by other React and non-React frontend components:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

**Thanks**
**Mir Sujat**

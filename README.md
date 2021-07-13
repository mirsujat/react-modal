**Fully Accessible Modal Dialog followed by WAI-ARIA Modal Authoring Practices.**

[Learn More WAI-ARIA Modal Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal).

### Live Demo [react-modal](https://react-modal-component.netlify.app/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##Features
A fully accessible and flexible React modal built according [WAI-ARIA Authoring Practices](http://www.w3.org/TR/wai-aria-practices/#dialog_modal).
-Minimum style

- Focus is trapped within the modal: Tab and Shift+Tab will cycle through the modal's focusable nodes without returning to the main document beneath.
- Escape will close the modal.
- Scrolling is frozen on the main document beneath the modal.
- When the modal closes, focus returns to the element that was focused just before the modal open.
- The dialog element has an ARIA `role` of `dialog` (or `alertdialog`).
- The dialog element has an ARIA attribute designating its title, either `aria-label` or `aria-labelledby`.
- By default, clicking on the modal's Backdrop (outside the dialog element) will close the modal (this can be disabled).
- The modal is appended to the end of `document.body` instead of its taking up its source-order position within the React component tree.

## Project Goals

- Full accessibility
- Maximum flexibility
- Absolutely minimal styling

Here's one more simple example:

```js
import React, { Component } from "react";
import Modal from "./components/Modal/Modal";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };
  getApplicationNode = () => {
    return document.getElementById("application");
  };

  render() {
    const modal = this.state.open ? (
      <Modal
        titleText="demo one"
        initialFocus="#demo-one-deactivate"
        getApplicationNode={this.getApplicationNode}
        backdropStyle={{ paddingTop: "4em" }}
        includeDefaultStyles="true"
      >
        <div id="demo-one-modal" className="modal">
          <div>
            <p>
              This is an accessable modal <a href="/">has</a>{" "}
              <a href="/">some</a> <a href="/">focusable</a>{" "}
              <a href="/">content</a>{" "}
            </p>
            <input type="text"></input>
          </div>
          <footer style={{ marginTop: "20px" }}>
            <button id="demo-one-deactivate" onClick={this.closeModal}>
              close modal
            </button>
          </footer>
        </div>
      </Modal>
    ) : (
      false
    );

    return (
      <div>
        <button onClick={this.openModal}>Open modal</button>
        {modal}
      </div>
    );
  }
}
export default App;
```

## Details

The modal can be activated in a couple of ways:

- mounting the component _without_ an `mounted` prop
- passing `true` as the `mounted` prop

Similarly, the modal can be deactivated in a couple of ways:

- unmounting the component
- passing `false` as the `mounted` prop

Pass your dialog element as the child. And that's it.

When the modal is mounted, you'll notice the following:

- Focus is trapped: only elements within the modal will receive focus as you tab through.
- The modal has the ARIA attributes it needs: a `role` of `dialog` (or `alertdialog`) and an `aria-label` or `aria-labelledby` attribute.
- The main document's scroll is frozen.
- Your content is set atop a fixed-position Backdrop. You can control the appearance and behavior of this backdrop in various ways (see below).
- The modal is appended to `document.body`, not inserted directly into the HTML source order, as you might assume; but it should still update correctly. (This makes positioning easier (no weird nested z-index troubles).)

## static dafaultProps

    backdropProps: {},
    backdropColor: 'rgba(0,0,0,0.5)',
    backdropClickExits: true,
    dialogId: 'modal-dialog',
    escapeExits: true,
    includeDefaultStyles: true,
    focusTrapPaused: false,

## Props

Any `data-*` or `aria-*` props that you provide will be passed directly to the modal's container `<div>`.

### onExit

Type: `Function`

This function handles the state change of _exiting_ (or deactivating) the modal.
It will be invoked when the user clicks outside the modal (if `backdropClickExits={true}`, as is the default) or hits Escape (if `escapeExits={true}`, as is the default), and it receives the event that triggered it as its only argument.

Maybe it's just a wrapper around `setState()`; or maybe you use some more involved Flux-inspired state management — whatever the case, this module leaves the state management up to _you_ instead of making assumptions. That also makes it easier to create your own "close modal" buttons; because you have the function that closes the modal right there, written by you.

You may omit this prop if you don't want clicks outside the modal or Escape to close it, so don't want to provide a function.

### applicationNode

Type: `DOM Node`

Provide your main application node here (which the modal should render outside of), and when the modal is open this application node will receive the attribute `aria-hidden="true"`. This [can help screen readers understand what's going on](https://www.w3.org/WAI/GL/wiki/Using_ARIA_role%3Ddialog_to_implement_a_modal_dialog_box#Description).

This module can't guess your application node, so you have to provide this prop to get the full accessibility benefit.

### getApplicationNode

Type: `Function`

Same as `applicationNode`, but a function that returns the node instead of the node itself. This can be useful or necessary in a variety of situations, one of which is server-side React rendering. The function will not be called until after the component mounts, so it is safe to use browser globals and refer to DOM nodes within it (e.g. `document.getElementById(..)`), without ruining your server-side rendering.

### alert

Type: `Boolean`

If `true`, the modal will receive a `role` of `alertdialog`, instead of its default `dialog`. The `alertdialog` role should only be used when an alert, error, or warning occurs ([more info](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role)).

### includeDefaultStyles

Type: `Boolean`, Default: `true`

By default, styles are applied inline to the dialog and underlay portions of the component. However, you can disable all inline styles by setting `includeDefaultStyles` to `false`. If set, _you must specify all styles externally_, including positioning. This is helpful if your project uses external CSS assets.

_Note:_ `backdropStyle` and `dialogStyle` can still be set inline, but these will be the only styles applied.

### dialogClass

Type: `String`

Apply a class to the dialog in order to custom-style it.

Be aware that, _by default_, this module does apply various inline styles to the dialog element in order position it. To disable _all inline styles_, see `includeDefaultStyles`.

### dialogId

Type: `String`, Default: `modal-dialog`

Choose your own id attribute for the dialog element.

### dialogStyle

Type: `Object`

Customize properties of the `style` prop that is passed to the dialog.

### focusDialog

Type: `Boolean`

By default, when the modal activates its first focusable child will receive focus.
However, if `focusDialog` is `true`, the dialog itself will receive initial focus —
and that focus will be hidden.

### initialFocus

Type: `String`

By default, when the modal activates its first focusable child will receive focus. If, instead, you want to _identify a specific element that should receive initial focus_, pass a _selector string_ to this prop. (That selector is passed to `document.querySelector()` to find the DOM node.)

### mounted

Type: `Boolean`

By default, the modal is active when mounted, deactivated when unmounted.
However, you can also control its active/inactive state by changing its `mounted` property instead.

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

### License

react-modal is open source software licensed as MIT

## Thanks

Mir Sujat

import { Component } from "react";
import ReactDOM from "react-dom";

class Portal extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement("div");
    this.container.setAttribute("role",  "dialog");
    this.container.setAttribute("id", this.props.id);
    this.container.setAttribute("aria-labelledby", this.props.label);
    this.container.setAttribute("aria-modal",  "true");
  }

  componentDidMount() {
    document.body.appendChild(this.container);
  }
  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.container);
  }
}

export default Portal;
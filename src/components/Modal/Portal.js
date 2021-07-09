import React,{ Component } from "react";
import ReactDOM from "react-dom";


const portal = (WrappedComponent, options) =>{
  if(!window.document){
    return class EmptyPortal extends Component{
      render(){
        return false; 
      }
    }
  }
  options = options || {};

  class Portal extends Component{
    static defaultProps = {
      mounted : true
    };

    static WrappedComponent = WrappedComponent;

    componentDidMount = () =>{
      if(this.props.mounted){
          this.container = (() => {
    
        if (!options.renderTo) {
          var result = document.createElement('div');
          document.body.appendChild(result);
          return result;
        } else if (typeof options.renderTo === 'string') {
          return document.querySelector(options.renderTo);
        } else {
          return options.renderTo;
        }
      })();
        }
    }
  
    componentWillUnmount = () =>{
      if (!options.renderTo) {
        this.container.parentNode.removeChild(this.container);
      }
      ReactDOM.unmountComponentAtNode(this.container);
    }
    renderElement = () =>{
      return React.createElement(WrappedComponent, this.props, this.props.children)
    }
  

    render(){
      if(this.props.mounted === false) return null;
      return ReactDOM.createPortal(this.renderElement, this.container);
    }
    
  } 
  return Portal;
}
export default portal;
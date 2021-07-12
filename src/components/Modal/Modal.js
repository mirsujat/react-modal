import React, { Component } from 'react';
import FocusTrap from 'focus-trap-react';
import portal from "./Portal";




class Modal extends Component {
 static defaultProps = {
    backdropProps: {},
    backdropColor: 'rgba(0,0,0,0.5)',
    backdropClickExits: false,
    dialogId: 'modal-dialog',
    escapeExits: true,
    includeDefaultStyles: true,
    focusTrapPaused: false,
  
  };

  componentWillMount() {
    if (!this.props.titleText && !this.props.titleId) {
      throw new Error(
        'Modal instances should have a `titleText` or `titleId`'
      );
    }
  }

  componentDidMount() {
    if (this.props.onEnter) {
      this.props.onEnter();
    }

    // Timeout to ensure this happens *after* focus has moved
    const applicationNode = this.getApplicationNode();
    setTimeout(() => {
      if (applicationNode) {
        applicationNode.setAttribute('aria-hidden', 'true');
      }
    }, 0);

    if (this.props.escapeExits) {
      this.addKeyDownListener();
    }
  }

  componentDidUpdate(prevProps) {

    if (this.props.escapeExits && !prevProps.escapeExits) {
      this.addKeyDownListener();
    } else if (!this.props.escapeExits && prevProps.escapeExits) {
      this.removeKeyDownListener();
    }
  }

  componentWillUnmount() {
 
    const applicationNode = this.getApplicationNode();
    if (applicationNode) {
      applicationNode.setAttribute('aria-hidden', 'false');
    }
    this.removeKeyDownListener();
  }

  addKeyDownListener() {
    setTimeout(() => {
      window.document.addEventListener('keydown', this.checktKeyDown);
    },0);
   
  }

  removeKeyDownListener() {
    setTimeout(() => {
      window.document.removeEventListener('keydown', this.checkKeyDown);
    },0);
  }

  getApplicationNode = () => {
    if (this.props.getApplicationNode) return this.props.getApplicationNode();
    return this.props.applicationNode;
  };

  checkBackdropClick = event => {
    if (
      (this.dialogNode && this.dialogNode.contains(event.target)) ||
      // If the click is on the scrollbar we don't want to close the modal.
      event.pageX > event.target.ownerDocument.documentElement.offsetWidth ||
      event.pageY > event.target.ownerDocument.documentElement.offsetHeight
    )
      return;
    this.exit(event);
  };

  checkKeyDown = event => {
    if (
      this.props.escapeExits &&
      (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27)
    ) {
      this.exit(event);
    }
  };

  exit = event => {
    if (this.props.onExit) {
      this.props.onExit(event);
    }
  };

  render() {
    const props = this.props;

    let style = {};
    if (props.includeDefaultStyles) {
      style = {
        display: "block",
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10000,
        overflowX: 'hidden',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        textAlign: 'center'
      };

      if (props.backdropColor) {
        style.background = props.backdropColor;
      }

      if (props.backdropClickExits) {
        style.cursor = 'pointer';
      }
    }

    if (props.backdropStyle) {
      for (const key in props.backdropStyle) {
        if (!props.backdropStyle.hasOwnProperty(key)) continue;
        style[key] = props.backdropStyle[key];
      }
    }

    const backdropProps = {
      className: props.backdropClass,
      style: style
    };

    if (props.backdropClickExits) {
      backdropProps.onMouseDown = this.checkBackdropClick;
    }

    for (const prop in this.props.backdropProps) {
      backdropProps[prop] = this.props.backdropProps[prop];
    }


    let dialogStyle = {};
    if (props.includeDefaultStyles) {
      dialogStyle = {
        display: 'inline-block',
        textAlign: 'left',
        top: 0,
        maxWidth: '100%',
        cursor: 'default',
        outline: props.focusDialog ? 0 : null
      };
    }

    if (props.dialogStyle) {
      for (const key in props.dialogStyle) {
        if (!props.dialogStyle.hasOwnProperty(key)) continue;
        dialogStyle[key] = props.dialogStyle[key];
      }
    }

    const dialogProps = {
      key: 'b',
      ref: function(el) {
        this.dialogNode = el;
      }.bind(this),
      role: props.alert ? 'alertdialog' : 'dialog',
      id: props.dialogId,
      className: props.dialogClass,
      style: dialogStyle
    };
    if (props.titleId) {
      dialogProps['aria-labelledby'] = props.titleId;
    } else if (props.titleText) {
      dialogProps['aria-label'] = props.titleText;
    }
    if (props.focusDialog) {
      dialogProps.tabIndex = '-1';
    }

    // Apply data- and aria- attributes passed as props
    for (let key in props) {
      if (/^(data-|aria-)/.test(key)) {
        dialogProps[key] = props[key];
      }
    }

    // This will render the modal
    const Dialog = [ 
      React.createElement('div', dialogProps, props.children)
    ]

    const focusTrapOptions = props.focusTrapOptions || {};
    if (props.focusDialog || props.initialFocus) {
      focusTrapOptions.initialFocus = props.focusDialog
        ? `#${this.props.dialogId}`
        : props.initialFocus;
    }
    focusTrapOptions.escapeDeactivates = props.escapeExits;


    const Backdrop = <FocusTrap {...focusTrapOptions} paused={props.focusTrapPaused} >
      <div {...backdropProps}>
      {Dialog}
      </div>
    </FocusTrap>;

    return Backdrop;

  }
}

const RenderModal = portal(Modal);

RenderModal.renderTo = function(AppNode) {
  return portal(Modal, { renderTo: AppNode });
};


export default Modal;
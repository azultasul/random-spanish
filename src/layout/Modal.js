import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// const dimmer = () => {
//   return <div></div>;
// }
// const overlay = () => {
//   return
// }
const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<div>modal{props.children}</div>, portalElement)}
    </Fragment>
  )
}

export default Modal;
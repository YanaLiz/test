import React, { Component } from "react";
import { createPortal } from "react-dom";
import './Modal.css'

const modalRoot =document.querySelector('#modal-root')

export default class Modal extends Component{
    componentDidMount() {
        // console.log('Modal componentDidMount')
        window.addEventListener('keydown', this.handleKeydown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
        // console.log(' Modal componentWillUnmount')
    }
    handleKeydown = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }
    handleBackdropClick = e => {
        
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    }
    render() {
        return createPortal(
          <div className="Modal_backdrop" onClick={this.handleBackdropClick}>
            <div className="Modal_content">{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}
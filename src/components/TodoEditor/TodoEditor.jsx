import React, { Component } from "react";
import  "./TodoEditor.css"

class TodoEditor extends Component{
    state = {
        message:''
    }
    handleChange = e => {
        this.setState({message:e.currentTarget.value})
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.onSubmit(this.state.message)
        this.setState({message:''})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="TodoEditor">
                <textarea className="TodoEditor_texterea" value={this.state.message} onChange={this.handleChange}></textarea>
                <button type="submit" className="TodoEditor_button">
                    Зберегти
                </button>
          </form>  
        )
    }
}
export default TodoEditor;
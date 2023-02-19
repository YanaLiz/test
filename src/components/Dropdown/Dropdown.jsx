import React, { Component } from "react";
import css from './Dropdown.module.css'


class Dropdown extends Component{
    state = {
        visible: false,  
    }

    show = () => {
        this.setState({
            visible: true,
        })
    }
    hide = () => {
        this.setState({
            visible: false,
        })
    }

    togle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }))
    }

    render() {
        return (
          <div className={css.Dropdown}>
            <button
              type="button"
              onClick={this.togle}
              className={css.Dropdown_togle}
            >
             {this.state.visible ? 'Приховати' : ' Показати'}
            </button>

            {this.state.visible && (
              <div className={css.Dropdown_menu}>Випадаюче меню</div>
            )}
          </div>
        );
    }
}
export default Dropdown;
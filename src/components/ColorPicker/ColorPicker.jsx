import React, { Component } from "react";
import './ColorPicker.css'

class ColorPicker extends Component{
    state = {
        activeOptionIdx: 1,
    }

    setActiveIdx = (index) => {
        this.setState({ activeOptionIdx: index })
        
    }

    makeOptionClassName = (index) => {
        const optionClasses = ['ColorPicker_option'];
        if (index === this.state.activeOptionIdx) {
          optionClasses.push('ColorPicker_option-activ');
        }
        return optionClasses.join(' ')
    }

    render() {
        const { label } = this.props.options[this.state.activeOptionIdx]
        
        
        return (
          <div className="ColorPicker">
                <h2 className="ColorPicker_title">ColorPicker</h2>
                <p>Oбраний колір: { label}</p>
            <div className="ColorPicker_option">
                    {this.props.options.map(({ label, color }, index) => { 
                 
                return (
                  <button
                    key={label}
                    className={this.makeOptionClassName(index)}
                        style={{ backgroundColor: color }}
                        onClick={()=>this.setActiveIdx(index)}
                  ></button>
                );
              })}
            </div>
          </div>
        );
    }
    
}
export default ColorPicker;
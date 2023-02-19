import React from "react";
import Controls from "./Controls";
import css from './Counter.module.css'


class Counter extends React.Component{
static defaultProps = {
  initialavalue: 0,
}

  state = {
    value: this.props.initialavalue,
    
  }

  handleIncrement = () => { 
    this.setState(prevState =>( {
      value: prevState.value + 1,
      
    }))
    console.log(this);
  }
  
  handleDicrement = () => {
     this.setState(prevState => ({
       value: prevState.value - 1,
     }));
   }
  
    render() {
        return (
          <div className={css.Counter}>
            <span className={css.Counter_value}>{this.state.value}</span>
            <Controls
              onIncrement={this.handleIncrement}
              onDicrement={this.handleDicrement}
            />
          </div>
        );
    }
}
export default Counter;
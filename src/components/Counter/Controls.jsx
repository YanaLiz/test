import React from "react";
import css from './Counter.module.css'

const Controls = ({ onIncrement, onDicrement }) => (
  <div className={css.Counter_controls}>
    <button type="button" onClick={onIncrement}>
      Збільшити
    </button>
    <button type="button" onClick={onDicrement}>
      Зменьшити
    </button>
  </div>
);
export default Controls;
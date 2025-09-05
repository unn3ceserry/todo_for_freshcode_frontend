import classes from './Input.module.scss'
import type {FC, InputHTMLAttributes, ReactNode} from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
  padding?: number;
}

const Input: FC<IInput> = ({icon, padding, ...props}) => {
  return (
    <div style={{padding: `${padding}rem`}} className={classes.wrapper_input}>
      <input {...props} />
      {icon}
    </div>
  );
};

export default Input;
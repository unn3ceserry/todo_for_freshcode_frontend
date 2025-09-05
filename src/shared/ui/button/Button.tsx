import classes from './Button.module.scss'
import type {ButtonHTMLAttributes, FC, ReactNode} from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  paddingWidth?: number;
}

const Button: FC<ButtonProps>  = ({children,paddingWidth, ...props}) => {
  return (
    <button
      style={{padding: `0.8rem ${paddingWidth}rem`}}
      className={classes.button_primary} {...props}>
      {children}
    </button>
  );
};

export default Button;
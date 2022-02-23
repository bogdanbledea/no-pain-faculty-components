/// <reference types="react" />
declare type ButtonProps = {
    children: any;
    onClick?: () => void;
};
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;

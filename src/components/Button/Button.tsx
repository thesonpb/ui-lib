import * as React from "react";
import "./Button.scss";

declare const ButtonTypes: ["primary", "secondary", "outline"];
export declare type ButtonType = typeof ButtonTypes[number];
declare const ButtonHTMLTypes: ["submit", "button", "reset"];
export declare type ButtonHTMLType = typeof ButtonHTMLTypes[number];

declare type ButtonProps = {
    color?: string;
    type?: ButtonType;
    icon?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
    htmlType?: ButtonHTMLType;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & Omit<React.ButtonHTMLAttributes<any>, "type">;

const Button = ({ type, ...props }: ButtonProps) => {
    const { children, disabled } = props;

    /** Override Defaults */

    return (
        <button
            className={`ui-btn ${type === "primary" ? "ui-btn-primary" : ""} ${
                type === "secondary" ? "ui-btn-secondary" : ""
            } ${type === "outline" ? "ui-btn-outline" : ""} ${
                disabled ? "ui-btn-disabled" : ""
            }`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

import React, { ReactNode } from "react";


type ButtonProps = React.ComponentProps<"button"> & {
  tamanho?: string;
};

const Button = ({tamanho, children, ...props}: ButtonProps) => {
  return <button {...props} style={{fontSize: tamanho}}>{children}</button>
};

export default Button; 
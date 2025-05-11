import React from "react";

function Button({ children, onClick, disabled, className, ...props }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

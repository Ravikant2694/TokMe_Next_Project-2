import React from "react";

const Button = ({ title, onClick, marginT, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`font-[600] bg-gradient-to-r from-pink-500 to-orange-400 text-white w-full h-[50px] rounded-[50px] ${
        marginT ? marginT : "mt-[20px]"
      } `}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;

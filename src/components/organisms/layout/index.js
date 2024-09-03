import Button from "@/components/atoms/button";
import Link from "next/link";
import React from "react";

export const Layout = ({
  title,
  children,
  btn,
  text,
  path,
  marginT,
  word,
  onClick,
}) => {
  return (
    <section className="sign-in-wrapper h-screen flex flex-col justify-center">
      <div className="card-wrapper">
        <div>{title}</div>
        <div>{children}</div>
        <Button title={btn} marginT={marginT} onClick={onClick} />
        <div className=" p-[10] mb-[20px] m-[16px] text-[#7C7C7C]">
          {word}
          <Link className="text-orange mx-2" href={path}>
            {text}
          </Link>
        </div>
      </div>
    </section>
  );
};

import { Layout } from "@/components/organisms/layout";
import React from "react";
import { FiCheck } from "react-icons/fi";

export const PasswordResetTemplate = () => {
  return (
    <Layout btn={"CONTINUE"} path={"/sign-in"} text={"Sign In"} word="Back to">
      <div className="bg-cs-bg mx-auto w-[66px] h-[66px] flex justify-center items-center rounded-full text-white mb-[30px] ">
        <span>
          <FiCheck size={38} />
        </span>
      </div>
      <div className="welcome mb-3 text-3xl font-semibold  font-['inter']  ">
        Password Reset
      </div>
      <div className="paragraph mb-3 text-center text-[#7C7C7C]">
        Your password has been successfully reset. <br /> Click below to sign in
        magically.
      </div>
    </Layout>
  );
};

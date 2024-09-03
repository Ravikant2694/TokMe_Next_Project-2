import { Layout } from "@/components/organisms/layout";
import { useRouter } from "next/navigation";
import React from "react";

export const WelcomeTemplate = () => {
  const router = useRouter();
  return (
    <Layout
      btn={"GET STARTED"}
      path={"/sign-in"}
      text={"Sign In"}
      word="Already signed up?"
    >
      <div className="mb-3 leading-[35.79px] text-[30px]  mt-110 poppins-medium   ">
        Welcome to TokMe
      </div>
      <div className=" font-gilroy font-normal leading-[24px] text-[16px] h-[48px] mt-[20px]   text-[#504e4e]">
        Connect easily with your family <br /> and friends over countries
      </div>
    </Layout>
  );
};

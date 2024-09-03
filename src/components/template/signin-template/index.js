import Button from "@/components/atoms/button";
import { InputField } from "@/components/atoms/Input/InputField";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Layout } from "@/components/organisms/layout";
import Link from "next/link";

export const SignInTemplate = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const [formdata, setFormdata] = useState(initialData);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!formdata.email.trim()) {
      formIsValid = false;
      newErrors.email = "Email is required";
    }
    if (!formdata.password.trim()) {
      formIsValid = false;
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const onSubmit = () => {
    if (validate()) {
      setFormdata(initialData);
      alert("You signed in successfully");
      router.push("/");
    }
  };

  return (
    <Layout
      btn={"SIGN IN"}
      path={"/sign-up"}
      text={"Register"}
      word="Don't have an account?"
      onClick={onSubmit}
    >
      <div className="font-['inter'] leading-[31.47px] text-[26px] font-semibold flex text-start mb-[50px]">
        Sign In
      </div>
      <div className="text-start block relative">
        <label className="block mt-[24px] mb-[8px]">Email</label>
        <input
          placeholder="Enter email"
          type="text"
          name="email"
          className="h-[50px] w-full border p-4 rounded-[50px]"
          value={formdata.email}
          onChange={handleChange}
        />
        {errors.email && <small className="text-red-700 absolute -bottom-5 left-0">{errors.email}</small>}
      </div>
      <div className="block text-start relative">
        <label className="block mt-[24px] mb-[8px]">Password</label>
        <input
          className="h-[50px] w-full border p-4 rounded-[50px]"
          placeholder="Enter password"
          type="password"
          name="password"
          value={formdata.password}
          onChange={handleChange}
        />
        {errors.password && (
          <small className="text-red-700  absolute -bottom-5 left-0">{errors.password}</small>
        )}
      </div>
      <div className=" my-6 flex justify-between">
        <div className="flex items-center ">
          <input className="float-left" type="checkbox" />
          <span className="float-left pl-2 text-[#91969F]">Remember me</span>
        </div>
        <Link className="text-orange " href="/forgot-password">
        Forget password?
      </Link>
      </div>
     
    </Layout>
  );
};

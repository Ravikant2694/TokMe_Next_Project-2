import React, { useState } from "react";
import { Layout } from "@/components/organisms/layout";
import { InputField } from "@/components/atoms/Input/InputField";
import { useRouter } from "next/router";

const ForgotPasswordTemplate = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail(value);
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    let formIsValid = true;
    const newErrors = {};
    if (!email.trim()) {
      formIsValid = false;
      newErrors.email = "Email is required";
    }
    setErrors(newErrors);
    return formIsValid;
  };

  const onsubmit = () => {
    if (validate()) {
      // Logic for password reset goes here
      alert("Password reset link has been sent to your email.");
      router.push("/new-password");
    }
  };

  return (
    <Layout
      btn="RESET PASSWORD"
      path="/sign-in"
      text="Sign in"
      word="Back to"
      onClick={onsubmit}
    >
      <div className="leading-[31.47px] text-[26px] font-['inter'] font-semibold flex text-start mb-[8px]">
        Forgot Password
      </div>
      <div className="text-[#7C7C7C] bg-custom-gray mb-3 text-start ml-0 font-normal text-base leading-6">
        Please enter your registered Email or mobile
        <br /> to reset your password
      </div>
      <div className="text-start mt-[50px] relative">
        <InputField
          placeholder="Enter email"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {errors.email && <small className="text-red-700 absolute left-0 -bottom-5">{errors.email}</small>}
      </div>
    </Layout>
  );
};

export default ForgotPasswordTemplate;

import { Layout } from "@/components/organisms/layout";
import { InputField } from "@/components/atoms/Input/InputField";
import React, { useState } from "react";
import { useRouter } from "next/router";

const NewPasswordTemplate = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
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

    if (!formData.oldPassword.trim()) {
      formIsValid = false;
      newErrors.oldPassword = "Old password is required";
    }
    if (!formData.newPassword.trim()) {
      formIsValid = false;
      newErrors.newPassword = "New password is required";
    }
    if (!formData.confirmPassword.trim()) {
      formIsValid = false;
      newErrors.confirmPassword = "Confirm password is required";
    }
    if (
      formData.newPassword &&
      formData.oldPassword &&
      formData.newPassword === formData.oldPassword
    ) {
      formIsValid = false;
      newErrors.newPassword =
        "New password must be different from old password";
    }
    if (
      formData.newPassword &&
      formData.confirmPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      formIsValid = false;
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const onSubmit = () => {
    if (validate()) {
      alert("Password has been reset successfully.");
      router.push("/reset-password");
    }
  };

  return (
    <Layout
      btn="RESET PASSWORD"
      path="/sign-in"
      text="Sign In"
      word="Back to"
      onClick={onSubmit}
    >
      <div className="leading-[31.47px] text-[26px] font-['inter'] font-semibold flex text-start mb-[8px]">
        Set New Password
      </div>
      <div className="text-[#7C7C7C] bg-custom-gray mb-[50px] text-start ml-0">
        Your new password must be different from previously used passwords
      </div>
      <div className="text-start block relative">
        <InputField
          placeholder="Enter password"
          label="Old Password"
          type="password"
          name="oldPassword"
          value={formData.oldPassword}
          onChange={handleChange}
        />
        {errors.oldPassword && (
          <small className="text-red-700 absolute left-0 -mt-6">{errors.oldPassword}</small>
        )}
        <InputField
          placeholder="Enter new password"
          label="New Password"
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
        />
        {errors.newPassword && (
          <small className="text-red-700 absolute left-0 -mt-6">{errors.newPassword}</small>
        )}
        <InputField
          placeholder="Confirm new password"
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <small className="text-red-700 absolute left-0 -mt-6">{errors.confirmPassword}</small>
        )}
      </div>
    </Layout>
  );
};

export default NewPasswordTemplate;

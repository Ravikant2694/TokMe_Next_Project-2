import { InputField } from "@/components/atoms/Input/InputField";
import { Layout } from "@/components/organisms/layout";
import { useState } from "react";
import { useRouter } from "next/router";

export const SignupTemplate = () => {
  const initialData = {
    username: "",
    email: "",
    phonenumber: "",
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

    if (!formdata.username.trim()) {
      formIsValid = false;
      newErrors.username = "Username is required";
    }
    if (!formdata.email.trim()) {
      formIsValid = false;
      newErrors.email = "Email is required";
    }
    if (!formdata.phonenumber.trim()) {
      formIsValid = false;
      newErrors.phonenumber = "Phone number is required";
    }
    if (!formdata.password.trim()) {
      formIsValid = false;
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const onsubmit = () => {
    if (validate()) {
      setFormdata(initialData);
      alert("You signed up successfully");
      router.push("/sign-in");
    }
  };

  return (
    <Layout
      btn={"SIGN UP"}
      path={"/sign-in"}
      text={"Sign in"}
      marginT={"mt-6"}
      word="Already have an account?"
      onClick={onsubmit}
    >
      <div className="leading-[31.47px] text-[26px] font-['inter'] font-semibold flex mx-[0px] mb-[50px] ">
        Registration
      </div>
      <div className="text-start block relative">
        <label className="block mt-[24px] mb-[8px]">User Name</label>
        <input
          placeholder="Enter name"
          type="text"
          name="username"
          className="h-[50px] w-full border p-4 rounded-[50px] relative"
          value={formdata.username}
          onChange={handleChange}
        />
        {errors.username && <small className="text-red-700 absolute left-0 mt-[50px]">{errors.username}</small>}
      </div>
      <div className="text-start block relative">
        <label className="block mt-[24px] mb-[8px]">Email</label>
        <input
          placeholder="Enter email"
          type="text"
          name="email"
          className="h-[50px] w-full border p-4 rounded-[50px] relative"
          value={formdata.email}
          onChange={handleChange}
        />
        {errors.email && <small className="text-red-700 absolute left-0 mt-[50px]">{errors.email}</small>}
      </div>
      <div className="text-start block mb-[24px] relative">
        <label className="block mt-[24px] mb-[8px]">Phone Number</label>
        <div className="flex items-center">
          <div className="rounded-full flex w-full">
            <div className="pr-3 border p-3 border-l rounded-l-full text-[#a4afbc]">
              +91
            </div>
            <input
              type="number"
              placeholder="Enter number"
              name="phonenumber"
              className="input-field__input w-full rounded-r-full border pl-3"
              value={formdata.phonenumber}
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.phonenumber && <small className="text-red-700 absolute left-0">{errors.phonenumber}</small>}
      </div>
      <div className="text-start block relative">
        <label className="block mb-[8px] relative">Password</label>
        <input
          placeholder="Enter password"
          type="password"
          name="password"
          className="h-[50px] w-full border p-4 rounded-[50px] relative"
          value={formdata.password}
          onChange={handleChange}
        />
        {errors.password && <small className="text-red-700 absolute left-0 mt-[50px]">{errors.password}</small>}
      </div>
    </Layout>
  );
};

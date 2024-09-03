export const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  name
}) => {
  return (
    <div className="text-start mb-[24px]">
      <label className={`block mb-[8px]`}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className="h-[50px] w-full border p-4 rounded-[50px]"
      />
    </div>
  );
};

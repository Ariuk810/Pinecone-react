export const FormInput = (props) => {
  const { inputTag, handlechange, name, value, error, errorMassage } = props;
  return (
    <div>
      <p className="first">{inputTag}*</p>
      <input
        className={error ? "input-error" : "task"}
        placeholder="Placeholder"
        onChange={handlechange}
        name={name}
        value={value}
      ></input>

      {error && (
        <p style={{ color: "red" }} className="errormassage">
          {" "}
          {errorMassage}{" "}
        </p>
      )}
    </div>
  );
};

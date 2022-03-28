import { Input, Label, FormFeedback } from "reactstrap";

export const CustomValidInput = ({
  item,
  handleInputchange,
  isError,
  isCustomSelectOption,
  
}) => {

  const getInputWithSelectOptions = () => {
    return (
      <Input
        id={item.name}
        type={item.type}
        name={item.name}
        onChange={(e) => {
          handleInputchange(e);
        
        }}>
        {item.options.map((option) => {
          return (
            <option defaultValue={option.value} key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Input>
    );
  };

  const getNormalInput = () => {

    return (
      <Input
        className={`${item?.type === "checkbox" && "order-1"}`}
        onChange={(e) => {
          handleInputchange(e.target);
        }}
        pattern={item?.regex}
        name={item?.name}
        type={item?.type}
        required={item?.required}
        minLength={3}
      />
    );
  };

  return (
    <div
      className={`d-flex 
      ${
        item?.name === "custom_country"
          ? isCustomSelectOption
            ? "d-block"
            : "d-none"
          : ""
      } 
      ${item?.type === "checkbox" ? "flex-row" : "flex-column"}
       gap-1 w-100`}
    >
      <Label className={` ${item?.type === "checkbox" && "order-2"}`}>
        {item?.label}
      </Label>

      {item?.type === "select" ? getInputWithSelectOptions() : getNormalInput()}

      {isError && (
        <FormFeedback>
          {item?.errorRegex || "There are some error "}
        </FormFeedback>
      )}
    </div>
  );
};

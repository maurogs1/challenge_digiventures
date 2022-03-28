import { Button, Label, Input} from "reactstrap";
import { CustomValidInput } from "./CustomValidInput";

export const WichComponent = ({
  item,
  handleInputChange,
  isError,
  isCustomSelectOption,
  children,

}) => {
  let response_error = children?.props?.children || "";
  if (
    item?.type === "text" ||
    item?.type === "password" ||
    item?.type === "email" ||
    item?.type === "checkbox" ||
    item?.type === "select"

  )
    return (
      <CustomValidInput
        handleInputchange={handleInputChange}
        item={item}
        isError={isError}
        isCustomSelectOption={isCustomSelectOption}
      />
    );
  if (item?.type === "button")
    return (
      <>
        {response_error != "" ? children : ""}
        <Button className="ms-auto h-100" color="danger" method={item.method}>
          {item?.label}
        </Button>
      </>
    );
  if (item?.type === "link")
    return (
      <a target={item?.target} href={item?.to}>
        {item.label}
      </a>
    );


  return "";
};

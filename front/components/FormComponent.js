import { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Alert, CardImg, Button } from "reactstrap";
import { WichComponent } from "./WichComponent";
import { getButtonMethods } from "../utils/getButtonMethods";
import { useForm } from "../hooks/useForm";
import { UserContext } from "../context/user/UserContext";
import { getSelectOption } from "../utils/getInitialState";

export default function FormComponent({ props }) {
  const [isCustomSelectOption, setIsCustomSelectOption] = useState(false);

  const [formComponent, handleInputChange, isError] = useForm(props,setIsCustomSelectOption
  );

  const [inputs, setInputs] = useState(props.inputs);
  const [dataError, setDataError] = useState("");
  const [registroExitoso, setRegistroExitoso] = useState("");
  const { setUsername } = useContext(UserContext);
  const selectOptionsList = getSelectOption(props.inputs);

  useEffect(() => {
    setInputs(props.inputs);
  }, [props.inputs]);

  const onSubmit = (e) => {
    e.preventDefault();
    let set_function_state = null;
    if (formComponent.method === "register") {
      set_function_state = setRegistroExitoso;
    }
    if (formComponent.method === "login") {
      set_function_state = setUsername;
    }
    getButtonMethods(
      formComponent,
      setDataError,
      set_function_state,
      selectOptionsList
    );
  };

  return (
    <Form
      onSubmit={(e) => onSubmit(e)}
      className=" d-flex flex-column gap-3 position-relative form-component "
    >
      <CardImg
        alt="Digiventures logo"
        src="logo.webp"
        top
        width="100%"
        className="mb-5"
      />
     {inputs?.map((item, index) => {
      return (
        <FormGroup className=" d-flex w-100  align-items-center" key={index}>
          <WichComponent
            handleInputChange={handleInputChange}
            isError={isError}
            item={item}
            isCustomSelectOption={isCustomSelectOption}
          >
            {dataError && (
              <Alert className="h-25 w-50 m-0" color="danger">
                {dataError}
              </Alert>
            )}
          </WichComponent>
        </FormGroup>
      )
    })}

      {registroExitoso && (
        <>
          <Alert className="position-absolute alert-success" color="success">
            {registroExitoso}
          </Alert>
        </>
      )}
    </Form>
  );
}

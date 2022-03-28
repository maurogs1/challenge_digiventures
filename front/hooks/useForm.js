import { useState, useEffect } from "react";
import { getInitialState } from "../utils/getInitialState";

export const useForm = (props, setSelectedOptions = null) => {
    const  initialState = getInitialState(props.inputs);
    const [isError, setError] = useState(false);
    const [values, setValues] = useState(initialState);
  
    const handleInputChange = (input) => {
      if (input.type === "change"  || input.type === 'select-one') {
        let indexOptionSelected = input.target?.options.selectedIndex;
        let valueOptionSelected = input.target?.options[indexOptionSelected].value;

        setSelectedOptions(
          valueOptionSelected === "other" ||
            indexOptionSelected === input.target?.options.length - 1
        );
        setValues({ ...values, [input.target.name]: valueOptionSelected });
        return [values, handleInputChange, isError];
      }

      if (
        input.type === "text" ||
        input.type === "password" ||
        input.type === "email"
      ) {
        if (input.checkValidity()) {
          input.classList.add("is-valid");
          input.classList.remove("is-invalid");
          setError(false);
        } else {
          input.classList.add("is-invalid");
          input.classList.remove("is-valid");
          setError(true);
        }
      }
      setValues({...values, [input.name]: input.value });
    };
    return [values, handleInputChange, isError];
};

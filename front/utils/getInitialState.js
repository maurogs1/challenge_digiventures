import { useEffect } from "react";

export const getInitialState = (data) => {
  
  const initialState = {};
  const validations = [];
  useEffect( () => {
    data?.forEach((item) => {   
      if (item.name) {
        initialState[item.name] = "";
        if(item.type === 'select')
          initialState[item.name] = item.options[0].value;
        if (item["conditions"]) {
          validations.push({
            name: item.name,
            conditions: item["conditions"],
          });
        }
      }
      initialState["validations"] = validations;
      if (item.type == "button") initialState["method"] = item.method;
    });
  },[data])

  return initialState;
};

export const getSelectOption = (data) => {
  let options = [];
  data?.forEach((item) => {
    if (item.type === "select") {
      options = item.options.map((o) => o.value);
    }
  });
  return options;
};

export const getValidations = () => {
  let validations = [];
  data?.forEach((item) => {
    if (item?.conditions) {
      validations = item.options.map((o) => o.value);
    }
  });
};

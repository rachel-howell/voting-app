import Register from "../Register";
import ContenderForm from "../ContenderForm";
import React from 'react';
import ContenderList from "./ContenderList";

const FormList = () => {
  return (
    <div>
        <Register/>
        <ContenderForm />
        <ContenderList/>
    </div>
  )
}

export default FormList;
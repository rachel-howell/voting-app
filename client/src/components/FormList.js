import ContenderForm from "../ContenderForm";
import React from 'react';
import ContenderList from "./CandidateList";

const FormList = () => {
  return (
    <div>
        <ContenderForm />
        <ContenderList/>
    </div>
  )
}

export default FormList;
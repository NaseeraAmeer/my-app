import React, { useState } from 'react';
import axios from "axios";
import {  useFormik } from 'formik';


const validate = values => {
  const errors = {};
  if (!values.userName) {
    errors.userName = 'Required';
  } else if (values.userName.length > 10) {
    errors.userName = 'Must be 10 characters or less';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 8) {
    errors.password = 'Must be 8 characters or less';
  }

    return errors;
};





function App  () {


  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
     
    },
   

  const submitLogin = ()=> {
   axios
   .post("http://localhost:5000/login",{userName,password})
    
    .then((result)=> {
    console.log(result.data);
    
      });
  
  },

  validate,
  onClick: () => {
    // alert(JSON.stringify(values, null, 2));
  },
});

return (
  
    <form onClick={formik.handleSubmit}>
    <div class="mb-3" className="text-center"> Signin
    
    <div class="mb-3">
    <label for="name" class="form-label">User Name</label>
    <input
      type="text"
      class="form-control"
      name="userName"
      id=""
      placeholder="User Name"
      
       onChange={formik.handleChange}
       value={formik.values.userName}
    />
    {formik.errors.userName ? <div>{formik.errors.userName}</div> : null}
  </div>
    <label for="" class="form-label">Password</label>
    <input
      type="password"
      class="form-control"
      name="password"
      id=""
      placeholder="Password"
      onChange={formik.handleChange}
      value={formik.values.password}
    />
    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
  </div>
  <button
    class="btn btn-primary"
  >
    cancel
    <span
      class="badge bg-primary"
      ></span
    >
  </button>
  
  <button
   onClick = {submitLogin} class="btn btn-secondary"  className='text centre'
  >
    Ok
    <span
      class="badge bg-primary"
      ></span
    >
  </button>
  
  </form>
)
}



export default App

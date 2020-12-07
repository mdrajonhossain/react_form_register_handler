import React from 'react';
import { useForm } from 'react-hook-form';


function Forms(props) {
  return (
    <div className="">
      <form onSubmit={props.onSubmit}>
      <input 
        name="firstname" 
        placeholder="firstname"
        ref={props.register}
        class="form-control"
      />
      <input
        name="lastname" 
        placeholder="lastname"
        ref={props.register}
        class="form-control"
      />
      <input 
        type="submit"
        class="btn btn-primary"
      />
    </form>
    </div>
  );
}

export default Forms;

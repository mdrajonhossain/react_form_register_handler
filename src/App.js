import React from 'react';
import { useForm } from 'react-hook-form';
import Forms from './Forms' 

function App(props) {
  const { register, handleSubmit} = useForm(); 

  const onSubmit = (data) => {
    const name =  
              [{
                firstname : data.firstname,
                lastname : data.lastname
              }]    
    console.log(name)
  };


  return (
    <div className="">
      <Forms 
        onSubmit={handleSubmit(onSubmit)} 
        register={register} 
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";

export const AddCategorie = ( {onAddCategory} ) => {

  const [ inputValue, setInputValue ] = useState()

  const onInputChange = (e) => {
    setInputValue( e.target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    onAddCategory( inputValue );

    setInputValue('');
  }

  return (
    <form onSubmit={(e)=> onSubmit(e) } >
      <input 
        type="text"
        placeholder="Buscar gifs" 
        value={ inputValue }
        onChange={ (e) => onInputChange(e) } 
      />
    </form>
  )
    
};

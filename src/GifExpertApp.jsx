import React, { useState } from "react";
import { AddCategorie, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch']);

  const onAddCategory = ( input ) => {
    if (categories.includes( input )) return;
    setCategories( [ ...categories, input ] )
  }

  return (
    <> 
      <h1>GifExpertApp</h1>

      <AddCategorie 
        onAddCategory={ onAddCategory }
      />
      
      { 
        categories.map( (category) => (
          <GifGrid 
            key={category}
            category={ category } 
          />
        ))
      }
    </>


  );
};

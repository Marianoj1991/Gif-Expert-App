import { screen, render } from '@testing-library/react';

import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en GifExpertApp', () => {

  test('Debe hacer match con el snapshot', () => {

    const {container} = render( <GifExpertApp/> );
    expect( container ).toMatchSnapshot();

  });
  
  test( 'Debe de renderizar un h1', () => {

    const { container } = render( <GifExpertApp/> );
    expect( screen.getByRole( 'heading', { level: 1 } ) )


  } )


})



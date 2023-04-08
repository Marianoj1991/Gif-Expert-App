import React from 'react'

export const GifItem = ( {title, url} ) => {
  return (
    <div className='card'>
        <img src={ url } alt={ `Gif de ${title}` } />
        <p>{ title }</p>
    </div>
  )
}

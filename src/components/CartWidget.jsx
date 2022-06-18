import React from 'react'


export default function CartWidget({img,carro}) {
  return (
    <div>
       <img
           alt=""
           src="/carrito.png"
           width="40"
           height="40"
           className="d-inline-block align-top"
       />{' '}
       {carro}
    </div>
  )
}

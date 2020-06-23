import React from 'react';
import ReactDOM from 'react-dom';

function ItemCheckout(props) {
  return (
    <div>
      <select>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
      </select>
      <button>Add To Basket</button>
      <button>Add To Loves</button>     
    </div>
  )
}

export default ItemCheckout
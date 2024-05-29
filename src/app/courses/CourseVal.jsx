"use client"
import React, { useContext, useState } from 'react'
import { SidebarContext } from '../providers'

export default function CourseVal({title}) {
    const {setAmount, cartItems, setCartItems} = useContext(SidebarContext)
    const [inputValue, setInputValue] = useState(1)
    const [itemName, setItemName] = useState(title);

    const handleInputChange = (e) => {
        setInputValue(Number(e.target.value));
    }

  //   const handleItemNameChange = (e) => {
  //     setItemName(e.target.value);
  // };

    const handleButtonClick = () => {
        setAmount((prevAmount) => prevAmount + inputValue);

        const itemIndex = cartItems.findIndex(item => item.name === itemName);
        let newCartItems;

        if (itemIndex !== -1) {
          // If item exists, update its count
          newCartItems = cartItems.map((item, index) => 
              index === itemIndex ? { ...item, count: item.count + inputValue } : item
          );
      } else {
          // If item does not exist, add it to the cart
          newCartItems = [...cartItems, { name: itemName, count: inputValue }];
      }

      setCartItems(newCartItems);
  };

        // setCartItems([...cartItems, { name: title, count: inputValue }]);
    

  return (
    <div className='flex items-center gap-x-4 justify-center py-4'>
        
         <input type="number" name="num" id="num" min={1} max={10} defaultValue={inputValue} className='w-1/4 text-slate-900 rounded-md'
         onChange={handleInputChange}/>

          <button className='bg-slate-900 py-2 px-3 rounded-md text-white'
          onClick={handleButtonClick}>Add Card</button>
    </div>
  )
}

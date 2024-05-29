import React from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../providers'
import styles from './cart.module.css'
import { MdAutoDelete } from "react-icons/md";


export default function Cart() {
    const { cart ,cartItems,setCartItems, setAmount } = useContext(SidebarContext)

    const handleDelete = (index) => {
      const newCartItems = [...cartItems];
      const deletedItem = newCartItems.splice(index, 1)[0];
      setCartItems(newCartItems);
      setAmount((prevAmount) => prevAmount - deletedItem.count);
  };
  return (
    <div>

{cart &&
                <div className='absolute inset-x-1/3 w-3/5 overflow-auto h-[400px] bg-slate-800 text-yellow-50 rounded-lg shadow-2xl flex flex-col items-center justify-center py-6'>
                    <h2 className='py-10'>Cart</h2>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th>item name</th>
                          <th>value</th>
                          <th>delete</th>
                        </tr>
                      </thead>
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td> 
                                <td>{item.count}</td>
                                <td className='cursor-pointer'>
                                  <MdAutoDelete  onClick={() => handleDelete(index)}/>
                                </td>
                            </tr>
                        ))}

                        <tfoot>
                          <td>Total items</td>
                          <td>{[...new Set(cartItems.map(item => item.count))].reduce((a,b)=>a+b,0)}</td>
                        </tfoot>
                    </table>
                </div>
            }
    </div>
  )
}

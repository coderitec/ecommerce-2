import React from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../providers'
import styles from './cart.module.css'

export default function Cart() {
    const { cart ,cartItems } = useContext(SidebarContext)
  return (
    <div>

{cart &&
                <div className='absolute inset-x-1/3 w-3/5 overflow-auto h-[400px] bg-slate-300 rounded-lg shadow-2xl flex flex-col items-center justify-center py-6'>
                    <h2 className='py-10'>Cart</h2>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th>item name</th>
                          <th>value</th>
                        </tr>
                      </thead>
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td> 
                                <td>{item.count}</td>
                            </tr>
                        ))}

                        <tfoot>
                          <td>Total items</td>
                          <td>{[...new Set(cartItems.map(item => item.count))].reduce((a,b)=>a+b)}</td>
                        </tfoot>
                    </table>
                </div>
            }
    </div>
  )
}

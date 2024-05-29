'use client';

import React, { createContext, useEffect, useState } from 'react';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [cart, setCart] = useState(false)
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems !== null ? JSON.parse(savedCartItems) : [];
    });
    const [amount, setAmount] = useState(() => {
        // Get the initial value from localStorage if available
        const savedAmount = localStorage.getItem('amount');
        return savedAmount !== null ? parseInt(savedAmount, 10) : 0;
    });
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        // Save amount to localStorage whenever it changes
        localStorage.setItem('amount', amount);
    }, [amount]);

    return (
        <SidebarContext.Provider value={{ amount, setAmount,cart,setCart, cartItems, setCartItems }}>
            {children}
        </SidebarContext.Provider>
    );
};

export { SidebarContext, SidebarProvider };

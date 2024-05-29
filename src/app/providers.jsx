'use client';

import React, { createContext, useEffect, useState } from 'react';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [cart, setCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        const savedAmount = localStorage.getItem('amount');

        if (savedCartItems !== null) {
            setCartItems(JSON.parse(savedCartItems));
        }
        if (savedAmount !== null) {
            setAmount(parseInt(savedAmount, 10));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('amount', amount);
    }, [amount]);

    return (
        <SidebarContext.Provider value={{ amount, setAmount, cart, setCart, cartItems, setCartItems }}>
            {children}
        </SidebarContext.Provider>
    );
};

export { SidebarContext, SidebarProvider };

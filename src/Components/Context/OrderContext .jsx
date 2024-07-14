import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orderCount, setOrderCount] = useState(0);

   
    return (
        <OrderContext.Provider value={{ orderCount, setOrderCount }}>
            {children}
        </OrderContext.Provider>
    );
};

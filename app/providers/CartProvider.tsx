'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { CartCtxType, CartItem, Good } from '../types';

const CartCtx = createContext<CartCtxType | undefined>(undefined);

export const useCart = () => {
    const ctx = useContext(CartCtx);
    if (!ctx) {
        throw new Error('Контекст не доступен, оберните компонент провайдером');
    }
    return ctx;
};

export default function CartProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: Good) => {
        const items = [...cartItems];
        const savedItem = items.find((i) => i.id === item.id);
        if (savedItem) {
            savedItem.count++;
            setCartItems(items);
        } else {
            setCartItems([...items, { ...item, count: 1 }]);
        }
    };

    const removeFromCart = (item: Good) => {
        setCartItems((prev) => {
            return prev.filter((i) => i.id !== item.id);
        });
    };

    return (
        <CartCtx.Provider
            value={{
                isOpen,
                setIsOpen,
                cartItems,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </CartCtx.Provider>
    );
}

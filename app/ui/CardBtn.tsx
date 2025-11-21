'use client';

import { useCart } from '../providers/CartProvider';
import { Good } from '../types';

export interface CartBtnProps {
    good: Good;
    isInCart: boolean;
}

export default function CartBtn({ good, isInCart }: CartBtnProps) {
    const { addToCart, removeFromCart } = useCart();

    const handleClick = () => {
        if (isInCart) {
            removeFromCart(good);
        } else {
            addToCart(good);
        }
    };

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            {isInCart ? 'Удалить' : 'В корзину'}
        </button>
    );
}

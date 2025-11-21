'use client';

import { useCart } from '../providers/CartProvider';
import Card from './Card';

export default function Cart() {
    const { isOpen, setIsOpen, cartItems } = useCart();

    const total = cartItems.reduce(
        (acc, item) => acc + item.count * item.price,
        0
    );

    return (
        <div className="cart" style={{ display: isOpen ? 'flex' : 'none' }}>
            <div className="cart-body">
                <div className="cart-title">Корзина</div>
                <div className="cart-total">
                    Общая сумма: <span>{total}</span> руб
                </div>

                <div className="cart-wrapper">
                    {cartItems.map((i) => (
                        <Card key={i.id} good={i} isInCart={true} />
                    ))}
                    {cartItems.length === 0 && (
                        <div id="cart-empty">Ваша корзина пока пуста</div>
                    )}
                </div>
                <button className="btn btn-primary cart-confirm">
                    Оформить заказ
                </button>
                <div
                    className="cart-close"
                    onClick={() => setIsOpen(false)}
                ></div>
            </div>
        </div>
    );
}

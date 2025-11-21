'use client'

import {useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function Cart() {
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const showCart = params.get('show-cart');
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(showCart === 'true');
    }, [searchParams]);

    const router = useRouter();
    const path = usePathname();

    const unsetOpenCartQuery = () => {
        const params = new URLSearchParams(searchParams);
        params.delete('show-cart');
        router.replace(`${path}?${params.toString()}`);
    };

    return (
        <div className="cart" style={{display: isOpen ? 'flex' : 'none'}}>
            <div className="cart-body">
                <div className="cart-title">Корзина</div>
                <div className="cart-total">
                    Общая сумма: <span>0</span> руб
                </div>

                <div className="cart-wrapper">
                    <div id="cart-empty">Ваша корзина пока пуста</div>
                </div>
                <button className="btn btn-primary cart-confirm">
                    Оформить заказ
                </button>
                <div className="cart-close" onClick={unsetOpenCartQuery}></div>
            </div>
        </div>
    );
}

'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function CategoryFilter() {
    const [isOpen, setIsOpen] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const path = usePathname();

    // const docClick = (e: Event) => {
    //     if (isOpen && e.target){}
    //     console.log(e.target);
    //     // setIsOpen(false);
    // };

    // useEffect(() => {
    //     document.addEventListener('click', docClick);

    //     return () => {
    //         document.removeEventListener('click', docClick);
    //     };
    // }, []);

    const applyFilter = (category: string) => {
        setIsOpen(!isOpen);
        const params = new URLSearchParams(searchParams);
        params.set('category', category);
        router.replace(`${path}?${params.toString()}`);
    };

    return (
        <div className="catalog-button">
            <button onClick={() => setIsOpen(!isOpen)}>
                <span className="catalog-button_burger"></span>
                <span className="catalog-button_text">Каталог</span>
            </button>
            <div
                className="catalog"
                style={isOpen ? { display: 'block' } : undefined}
            >
                <ul
                    className="catalog-list"
                    onClick={(e) => {
                        applyFilter((e.target as HTMLLIElement).textContent);
                    }}
                >
                    <li>Игровая приставка</li>
                    <li>Периферия для ПК</li>
                    <li>Игры и софт</li>
                </ul>
            </div>
        </div>
    );
}

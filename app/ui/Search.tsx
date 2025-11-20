'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Search() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const path = usePathname();
    const [search, setSearch] = useState('');

    const setSearchQuery = () => {
        const params = new URLSearchParams(searchParams);
        params.set('search', search);
        router.replace(`${path}?${params.toString()}`);
    };

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const sParam = params.get('search');
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSearch(sParam || '');
    }, [searchParams]);

    return (
        <div className="search">
            <div className="search-wrapper">
                <input
                    id="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.trim())}
                    className="search-wrapper_input"
                    type="text"
                />
            </div>
            <div className="search-btn">
                <button onClick={setSearchQuery}></button>
            </div>
        </div>
    );
}

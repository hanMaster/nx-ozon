'use client'

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

export default function SaleAndPriceFilter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const path = usePathname();
    const [sale, setSale] = useState<boolean>(false);

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const sParam = params.get('sale');
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSale(sParam === 'true');
    }, [searchParams]);

    const handleSaleClick = (checked: boolean) => {
        setSale(checked);

        const params = new URLSearchParams(searchParams);
        if (checked) {
            params.set('sale', 'true');
        } else {
            params.delete('sale');
        }
        router.replace(`${path}?${params.toString()}`);
    }

    return (
        <div className="filter">
            <div className="filter-title">
                <h5>Фильтр</h5>
            </div>
            <div className="filter-price">
                <div className="filter-price_title">Цена</div>
                <form>
                    <div className="filter-price_range">
                        <div className="filter-price_input-wrapper">
                            <label
                                htmlFor="min"
                                className="filter-price_label"
                            >
                                от
                            </label>
                            <input
                                id="min"
                                className="filter-price_input"
                                type="number"
                                step="1"
                                min="1"
                            />
                        </div>
                        <div className="filter-price_input-wrapper">
                            <label
                                htmlFor="max"
                                className="filter-price_label"
                            >
                                до
                            </label>
                            <input
                                id="max"
                                className="filter-price_input"
                                type="number"
                                step="1"
                                min="1"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="filter-check">
                <label className="filter-check_label">
                    <input
                        type="checkbox"
                        className="filter-check_checkbox"
                        id="discount-checkbox"
                        checked={sale}
                        onChange={(e) => {
                            handleSaleClick(e.target.checked)
                        }}/>

                    <span className={sale ? "filter-check_checkmark checked" : "filter-check_checkmark"}></span>
                    <span className="filter-check_label-text">Акция</span>
                </label>
            </div>
        </div>
    )
}
'use client'

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

export default function SaleAndPriceFilter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const path = usePathname();
    const [sale, setSale] = useState<boolean>(false);
    const [min, setMin] = useState<string>('');
    const [max, setMax] = useState<string>('');

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const saleParam = params.get('sale');
        const minParam = params.get('min');
        const maxParam = params.get('max');
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSale(saleParam === 'true');
        setMin(minParam ? minParam : '')
        setMax(maxParam ? maxParam : '')
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

    const applyPriceFilter = () => {
        const params = new URLSearchParams(searchParams);
        if (min.length) {
            params.set('min', min);
        } else {
            params.delete('min');
        }

        if (max.length) {
            params.set('max', max);
        } else {
            params.delete('max');
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
                                className="filter-price_input"
                                type="number"
                                value={min}
                                onInput={(e) => setMin(e.currentTarget.value.trim())}
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
                                className="filter-price_input"
                                type="number"
                                value={max}
                                onInput={(e) => setMax(e.currentTarget.value.trim())}
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary" type='button' onClick={applyPriceFilter}>Применить</button>
                </form>
            </div>
            <br/>
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
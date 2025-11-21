import SaleAndPriceFilter from '@/app/ui/SaleAndPriceFilter';
import { getData } from './data';
import { PageParams } from './types';
import Card from './ui/Card';

export default async function Home({ searchParams }: PageParams) {
    const sParams = await searchParams;
    const goods = await getData(sParams);

    const renderGoods = () => {
        if (goods.length) {
            return goods.map((g) => (
                <div key={g.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <Card good={{ ...g, count: 0 }} isInCart={false} />
                </div>
            ));
        } else {
            return <h3>По заданным параметрам товаров не найдено</h3>;
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-3 col-xl-2 d-none d-lg-block">
                    <SaleAndPriceFilter />
                </div>
                <div className="col-12 col-lg-9 col-xl-10">
                    <div className="container">
                        <div className="row no-gutters goods">
                            {renderGoods()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Good } from '../types';

export type CardProps = {
    good: Good;
    isInCart: boolean;
};

export default function Card({ good, isInCart }: CardProps) {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card" data-goodid="{item.id}">
                {good.sale && <div className="card-sale">🔥Hot Sale🔥</div>}
                <div className="card-img-wrapper">
                    <span
                        className="card-img-top"
                        style={{ backgroundImage: `url("${good.img}")` }}
                    ></span>
                </div>
                <div className="card-body justify-content-between">
                    <div className="card-price">{good.price} ₽</div>
                    <h5 className="card-title">{good.title}</h5>
                    <button className="btn btn-primary">
                        {isInCart ? 'Удалить' : 'В корзину'}
                    </button>
                </div>
            </div>
        </div>
    );
}

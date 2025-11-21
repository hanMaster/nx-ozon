import { CartItem } from '../types';
import CardBtn from './CardBtn';

export type CardProps = {
    good: CartItem;
    isInCart: boolean;
};

export default function Card({ good, isInCart }: CardProps) {
    return (
        <div className="card" data-goodid="{item.id}">
            {good.sale && <div className="card-sale">🔥Hot Sale🔥</div>}
            <div className="card-img-wrapper">
                <span
                    className="card-img-top"
                    style={{ backgroundImage: `url("${good.img}")` }}
                ></span>
            </div>
            <div className="card-body justify-content-between">
                <div className="card-price">
                    {isInCart ? `${good.count} x ${good.price}` : good.price}₽
                </div>
                <h5 className="card-title">{good.title}</h5>
                <CardBtn good={good} isInCart={isInCart} />
            </div>
        </div>
    );
}

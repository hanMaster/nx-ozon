export default function Card() {
    const item = {
        id: 1,
        title: 'Good',
        img: 'https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg',
        price: 5000,
        sale: true,
    };

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card" data-goodid="{item.id}">
                {item.sale && <div className="card-sale">🔥Hot Sale🔥</div>}
                <div className="card-img-wrapper">
                    <span
                        className="card-img-top"
                        style={{ backgroundImage: `url("${item.img}")` }}
                    ></span>
                </div>
                <div className="card-body justify-content-between">
                    <div className="card-price">{item.price} ₽</div>
                    <h5 className="card-title">{item.title}</h5>
                    <button className="btn btn-primary">В корзину</button>
                </div>
            </div>
        </div>
    );
}

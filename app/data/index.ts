import { Good, SearchParams } from "../types";

export const getData = async (searchParams: SearchParams): Promise<Good[]> => {

    const res = await fetch(
        'https://ozon-intensive-default-rtdb.asia-southeast1.firebasedatabase.app/goods.json'
    );
    let goods = (await res.json()) as Good[];

    if (searchParams.category) {
        goods = goods.filter(g => g.category === searchParams.category);
    }

    if (searchParams.search) {
        goods = goods.filter(g => g.title.toLocaleLowerCase().includes(searchParams.search!.toLocaleLowerCase()));
    }

    return goods;

};

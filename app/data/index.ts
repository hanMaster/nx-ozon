import {Good, SearchParams} from "../types";

export const getData = async (sParams: SearchParams): Promise<Good[]> => {

    const res = await fetch(
        'https://ozon-intensive-default-rtdb.asia-southeast1.firebasedatabase.app/goods.json'
    );
    const goods = (await res.json()) as Good[];

    return goods.filter(g => {
        if (sParams.category && g.category !== sParams.category) {
            return false;
        }

        if (sParams.search && !g.title.toLocaleLowerCase().includes(sParams.search.toLocaleLowerCase())) {
            return false;
        }

        if (sParams.sale && !g.sale) {
            return false;
        }

        if (sParams.min && g.price < Number(sParams.min)) {
            return false;
        }

        if (sParams.max && g.price > Number(sParams.max)) {
            return false;
        }

        return true;
    });

};

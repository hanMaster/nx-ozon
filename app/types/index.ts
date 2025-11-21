export interface Good {
    id: string;
    title: string;
    category: string;
    img: string;
    price: number;
    sale: boolean;
};

export type PageParams = {
    params: { slug: string; };
    searchParams: Promise<SearchParams>;
};

export type SearchParams = {
    category?: string;
    search?: string;
    sale?: string;
    min?: string;
    max?: string;
};

export type CartCtxType = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    cartItems: CartItem[];
    addToCart: (item: Good) => void;
    removeFromCart: (item: Good) => void;
};

export interface CartItem extends Good {
    count: number;
}
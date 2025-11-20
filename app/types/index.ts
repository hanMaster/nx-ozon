export type Good = {
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
};
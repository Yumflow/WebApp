export interface IProduct {
  title: string;
  image: string;
  price: string | number;
  category: string;
  id: number | string;
}

export interface IBagProduct {
  product: IProduct;
  count: number;
}

export interface IBagState {
  products: IBagProduct[];
}
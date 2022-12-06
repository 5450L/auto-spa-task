export class ProductOffer {
  id: string;
  productName: string;
  price: number;

  constructor(
    id: string,
    productName: string,
    price: number,
  ) {
    this.id = id;
    this.productName = productName;
    this.price = price;
  }
}

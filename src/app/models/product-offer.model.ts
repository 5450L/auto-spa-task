export class ProductOffer {
  id: number;
  productName: string;
  price: number;
  amount: number;
  discount: number;
  total: number;

  constructor(
    id: number,
    productName: string,
    price: number,
    amount: number,
    discount: number,
    total: number
  ) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.amount = amount;
    this.discount = discount;
    this.total = total;
  }
}

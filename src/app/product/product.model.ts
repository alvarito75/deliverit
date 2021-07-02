export class Product{
  idProduct: string;
  name: string;
  imageUrl: string;
  quantity: number;

  constructor(idPeople: string, name: string, imageUrl: string, quantity: number) {
    this.idProduct = idPeople;
    this.name = name;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
  }

}
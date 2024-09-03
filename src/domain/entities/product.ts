import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";

interface ProductProps {
  name: string;
  price: number;
  stock: number;
  discount: number;
  description: string;
  keyInfo: string;
  aboutItem: string;

  createdAt: Date;
  updatedAt?: Date;
}

export class Product extends Entity<ProductProps> {
  get name() {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
    this.touch();
  }

  get price() {
    return this.props.price;
  }

  set price(price: number) {
    this.props.price = price;
    this.touch();
  }

  get stock() {
    return this.props.stock;
  }

  set stock(stock: number) {
    this.props.stock = stock;
    this.touch();
  }

  get discount() {
    return this.props.discount;
  }

  set discount(discount: number) {
    this.props.discount = discount;
    this.touch();
  }

  get description() {
    return this.props.description;
  }

  set description(description: string) {
    this.props.description = description;
    this.touch();
  }

  get keyInfo() {
    return this.props.keyInfo;
  }

  set keyInfo(keyInfo: string) {
    this.props.keyInfo = keyInfo;
    this.touch();
  }

  get aboutItem() {
    return this.props.aboutItem;
  }

  set aboutItem(aboutItem: string) {
    this.props.aboutItem = aboutItem;
    this.touch();
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  static create(
    props: Optional<ProductProps, "createdAt">,
    id?: UniqueEntityID
  ) {
    const product = new Product(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );
    return product;
  }
}

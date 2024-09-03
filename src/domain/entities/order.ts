import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";

type OrderStatus = "Received" | "Sent" | "Delivered";

interface OrderProps {
  status: OrderStatus;
  total: number;
  deliveryAddress: string;
  customerId: UniqueEntityID;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class Order extends Entity<OrderProps> {
  get status() {
    return this.props.status;
  }

  set status(status: OrderStatus) {
    this.props.status = status;
    this.touch();
  }

  get total() {
    return this.props.total;
  }

  deliveryAddress() {
    return this.props.deliveryAddress;
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

  static create(props: Optional<OrderProps, "createdAt">, id?: UniqueEntityID) {
    const order = new Order(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );
    return order;
  }
}

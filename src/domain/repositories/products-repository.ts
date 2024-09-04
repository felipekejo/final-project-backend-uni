import { Product } from "../entities/product";

/**
 * Repository interface for products.
 */
export interface ProductsRepository {
  /**
   * Retrieve all products.
   * @returns A promise that resolves to an array of products.
   */
  findAll(): Promise<Product[]>;

  /**
   * Retrieve a product by its unique identifier (ID).
   * @param id - The ID of the product to retrieve.
   * @returns A promise that resolves to a product or null if not found.
   */
  findById(id: string): Promise<Product | null>;

  /**
   * Create a new product.
   * @param product - The product data to create.
   * @returns A promise that resolves to the created product.
   */
  create(product: Product): Promise<void>;

  /**
   * Update a product's information.
   * @param id - The ID of the product to update.
   * @param data - The updated product data.
   * @returns A promise that resolves to the updated product.
   */
  update(product: Product): Promise<void>;

  /**
   * Delete a product by its unique identifier (ID).
   * @param id - The ID of the product to delete.
   * @returns A promise that resolves when the product is deleted.
   */
  delete(product: Product): Promise<void>;
}

import { CART_LOCAL_STORAGE_KEY } from "@/constants";
import { CartItem } from "@/types/types";

export class Cart {
  products: CartItem[];
  constructor() {
    const lsValue = localStorage.getItem(CART_LOCAL_STORAGE_KEY) || "[]";
    this.products = JSON.parse(lsValue);
    console.log("Initializing with Local Storage");
    console.log("Initial Cart: ", this.products);
  }

  get total() {
    return this.products.reduce(
      (sum, product) => sum + +product.price * product.quantity,
      0
    );
  }

  private updateLocalStorage() {
    const jsonString = JSON.stringify(this.products);
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, jsonString);
    console.log("Local storage updated");
  }

  onAddItem(item: CartItem) {
    console.log("Cart", this);
    const existingProduct = this.products.find(
      (product) => product.id === item.id
    );
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.products.push(item);
    }
    this.updateLocalStorage();
  }

  onCheckout() {
    return [...this.products];
  }

  onIncrement(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      product.quantity++;
      console.log("Product quantity increased");
      this.updateLocalStorage();
    }
  }

  onDecrement(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (product && product.quantity > 1) {
      product.quantity--;
      console.log("Product quantity decreased");
      this.updateLocalStorage();
    }
  }
}

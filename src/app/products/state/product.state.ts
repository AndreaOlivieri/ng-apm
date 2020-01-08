import {Product} from "../product";
import AppState from "../../state/app.state";

export interface ProductState {
  showProductCode: boolean,
  currentProduct: Product,
  products: Product[]
}

interface State extends AppState {
  products: ProductState
}
export default State;

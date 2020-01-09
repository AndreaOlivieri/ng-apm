/* Defines the product entity */
export interface Product {
    id: number | null;
    productName: string;
    productCode: string;
    description: string;
    starRating: number;
}

export function newProduct(): Product {
  return {
    id: 0,
    productName: '',
    productCode: 'New',
    description: '',
    starRating: 0
  };
};

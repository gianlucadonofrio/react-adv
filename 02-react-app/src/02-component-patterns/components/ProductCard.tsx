import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import {
  ProductCardContextProps,
  ProductCardProps,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductCardContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ product, counter, increaseBy }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

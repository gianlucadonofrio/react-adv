import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import '../styles/custom-styles.css';
const product = {
  id: '1',
  title: 'Coffee Mug',
  img: '/coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image />
          <ProductCard.Title title={'Coffe #1'} />
          <ProductCard.Buttons className="custom-btns" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage
            className="custom-img"
            style={{
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
            }}
          />
          <ProductTitle title={'Coffe #2'} className="text-white" />
          <ProductButtons className="custom-btns" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: '#70D1F8',
          }}
        >
          <ProductImage
            style={{
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
            }}
          />
          <ProductTitle
            title={'Coffe #3'}
            style={{
              fontWeight: 'bold',
            }}
          />
          <ProductButtons
            style={{
              display: 'flex',
              justifyContent: 'end',
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};

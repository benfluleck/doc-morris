import ProductCard from "@components/ProductCard/ProductCard";
import styles from "@components/ProductCardList/productList.module.css";
import { ProductCartDetail, ProductResponse } from "@/app/entities/product";
import { getStock } from "@utils/total";

const ProductCardList = ({
  isOpen,
  products,
  cartItems,
  handleClick,
}: {
  isOpen?: boolean;
  cartItems: Record<ProductCartDetail["id"], number>;
  products: ProductResponse[];
  handleClick: (id: string) => void;
}) => (
  <div
    data-testid="product-card-list-component"
    className={`p-6 flex-1 max-[650px]:p-0 max-[650px]:divide-y max-[650px]:divide-slate-200 ${
      isOpen ? `${styles.hidden}` : `${styles.container}`
    }`}
  >
    {products.map((product, index) => {
      const imageUrl =
        product.images[0].variants["140"].formats.webp.resolutions["2x"].url;

      return (
        <ProductCard
          key={product.code}
          id={product.code}
          imageSrc={imageUrl}
          imageWidth={product.images[0].variants["140"].width}
          imageHeight={product.images[0].variants["140"].height}
          name={product.name}
          supplier={product.supplier}
          dosageForm={product.dosageForm}
          stock={getStock(product.code, product, cartItems)}
          packagingSize={product.packagingSize}
          basePrice={product.baseprice}
          price={product.prices.salesPrice.formattedValue}
          discount={product.prices.savings.formattedValue}
          onClick={handleClick}
          priority={index <= 4}
        />
      );
    })}
  </div>
);

export default ProductCardList;

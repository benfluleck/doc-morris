import { FC } from "react";
import { ProductCardProps } from "@entities/product";
import ImageWithFallback from "@components/ImageWithFallback/ImageWithFallback";
import HeartIcon from "@components/Icons/HeartIcon/HeartIcon";
import CartButton from "@components/CartButton/CartButton";
import Stock from "@components/Stock/Stock";

const ProductCard: FC<ProductCardProps> = ({
  imageSrc,
  price,
  discount,
  basePrice,
  dosageForm,
  packagingSize,
  supplier,
  imageWidth,
  imageHeight,
  name,
  stock,
  id,
  priority,
  onClick,
}) => (
  <div data-testid="product-card-component" className="flex flex-col gap-2 pt-4">
    <Stock stock={stock} />
    <ImageWithFallback
      imageSrc={imageSrc}
      width={imageWidth}
      height={imageHeight}
      name={name}
      priority={priority}
    />
    <div className="self-end cursor-pointer">
      <HeartIcon />
    </div>
    <h3 className="font-semibold line-clamp-2">{name}</h3>
    <p className="text-slate-500 text-xs font-semibold line-clamp-2">
      {packagingSize} &#8226; {dosageForm}
    </p>
    <p className="text-slate-500 text-sm line-clamp-1">{supplier}</p>
    <div className="flex align-center gap-0.5">
      <p className="text-sm font-semibold">{price}</p>
      <p className="text-xs self-center line-through text-neutral-600 decoration-neutral-600">
        {discount}
      </p>
    </div>
    <p className="text-zinc-500 text-xs font-semibold">{basePrice}</p>
    <CartButton id={id} stock={stock} onClick={onClick} />
  </div>
);

export default ProductCard;

"use client";
import { ProductCardProps } from "@/app/entities/product";
import { FC, useState } from "react";
import ImageWithFallback from "@components/ImageWithFallback/ImageWithFallback";
import HeartIcon from "@components/HeartIcon/HeartIcon";
import { CartButton as AddToCart } from "@components/CartButton/CartButton";
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
}) => {
  const [currentStock, setCurrentStock] = useState<number>(stock);

  return (
    <div className="flex flex-col gap-2">
      <Stock stock={currentStock} />
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
      <AddToCart
        id={id}
        imageSrc={imageSrc}
        name={name}
        packagingSize={packagingSize}
        dosageForm={dosageForm}
        price={price}
        stock={currentStock}
        setStock={setCurrentStock}
        onClick={onClick}
      />
    </div>
  );
};

export default ProductCard;
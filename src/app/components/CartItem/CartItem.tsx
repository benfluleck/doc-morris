import { ProductCartDetail } from "@/app/entities/product";
import { FC } from "react";
import ImageWithFallback from "@components/ImageWithFallback/ImageWithFallback";
import RemoveIcon from "@components/RemoveIcon/RemoveIcon";


const CartItem: FC<ProductCartDetail> = ({
  id,
  imageSrc,
  name,
  dosageForm,
  packagingSize,
  price,
  onCartUpdate,
  count,
}) => {
  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onCartUpdate(id, Number(event.target.value));
  };

  return (
    <div className="flex gap-8">
      <ImageWithFallback
        imageSrc={imageSrc}
        width={110}
        height={110}
        name={name}
        priority
      />
      <div>
        <div className="flex">
          <h3 className="font-semibold w-48 line-clamp-2">{name}</h3>
          <RemoveIcon />
        </div>
        <div>
          <p className="text-slate-500 text-xs font-semibold line-clamp-2">
            {packagingSize} &#8226; {dosageForm}
          </p>
          <p className="text-xs text-slate-500 font-semibold">
            Einzelpreis: {price}
          </p>
        </div>
        <div className="flex py-2 justify-between">
          <input
            type="number"
            min="1"
            step="1"
            value={count}
            onChange={handleBlur}
            className="border-solid border-black border flex w-32"
          />
          <p className="text-sm font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

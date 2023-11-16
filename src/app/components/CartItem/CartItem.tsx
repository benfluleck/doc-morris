import { FC, useState } from "react";
import { ProductCartDetail } from "@entities/product";
import ImageWithFallback from "@components/ImageWithFallback/ImageWithFallback";
import RemoveIcon from "@components/Icons/RemoveIcon/RemoveIcon";

const CartItem: FC<ProductCartDetail> = ({
  id,
  imageSrc,
  name,
  dosageForm,
  packagingSize,
  price,
  stock,
  onCartUpdate,
  onRemoveClick,
  count,
}) => {
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setError("");

    if (Number(value) > stock) {
      setError("You can't enter more than stock value");
      return;
    }
    onCartUpdate(id, Number(value));
  };

  const handleClick = () => {
    onRemoveClick(id);
  };

  return (
    <div data-testid="cart-item-component" className="flex gap-8 max-[450px]:gap-2">
      <ImageWithFallback
        imageSrc={imageSrc}
        width={110}
        height={110}
        name={name}
      />
      <div className="flex grow flex-col gap-0.5">
        <div className="flex justify-between">
          <h3 aria-label="Product name" className="font-semibold max-[450px]:w-40 w-48 line-clamp-2">
            {name}
          </h3>
          <button aria-label="remove cart item" onClick={handleClick}>
            <RemoveIcon />
          </button>
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
          <div>
            <input
              data-testid="cart-input"
              type="number"
              min="1"
              max={stock}
              step="1"
              value={count}
              onChange={handleChange}
              className="border-solid border-black text-center border flex w-32"
            />
            <span className="text-xs text-red-400 line-clamp-2 w-32">
              {error}
            </span>
          </div>
          <p className="text-sm font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

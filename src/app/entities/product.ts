interface Product {
  id: string;
  imageSrc: string;
  name: string;
  dosageForm: string;
  packagingSize: string;
  price: string;
  stock?: number;
}

export interface ProductCartDetail extends Product {
  count: number;
  onRemoveClick: (id:string) => void;
  onCartUpdate: (id: string, count: number) => void;
}


export interface ProductCardProps extends Product {
  imageWidth?: number;
  imageHeight?: number;
  stock: number;
  supplier: string;
  basePrice: string;
  price: string;
  discount: string;
  priority?: boolean;
  onClick: (id: string) => void;
}

type Price = {
  value: number;
  formattedValue: string;
};

type Prices = {
  salesPrice: Price;
  savings: Price;
  recommendedRetailPrice: Price;
  savingsPercentageFormatted: string;
};

type Url = {
  url: string;
};

type Resolutions = {
  resolutions: { [k: string]: Url };
};

type Format = {
  webp: Resolutions;
};

type Variant = {
  width: number;
  height: number;
  formats: Format;
};

type Image = {
  id: number;
  variants: { [k: string]: Variant };
};

export type ProductResponse = {
  name: string;
  code: string;
  stock: number;
  supplier: string;
  dosageForm: string;
  packagingSize: string;
  baseprice: string;
  prices: Prices;
  discount: string;
  available: boolean;
  images: Image[];
};


export type CartItemListProps = {
  cartItems: Record<ProductCartDetail["id"], number>
  productsById: Record<ProductResponse["code"], ProductResponse>
  onRemoveItem: (id:string) => void;
  onUpdateCart: (id: string, count: number) => void;
}

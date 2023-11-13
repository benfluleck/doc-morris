interface Product {
  id: string;
  imageSrc: string;
  name: string;
  dosageForm: string;
  packagingSize: string;
  price: string;
  stock?: number;
}

export interface ProductCartDetail extends ProductDetail {
  count: number;
  onCartUpdate: (id: string, count: number) => void;
}

export interface ProductDetail extends Product {
  onClick?: (product: ProductDetail) => void;
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

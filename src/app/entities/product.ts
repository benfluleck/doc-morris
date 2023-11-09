export type ProductCartDetail = {
  id: string;
  imageSrc: string;
  name: string;
  dosageForm: string;
  packagingSize: string;
  price: string;
  stock: number;
  onClick?: (product: ProductCartDetail) => void;
  setStock: React.Dispatch<React.SetStateAction<number>>;
};

export type ProductCardProps = {
  imageSrc: string;
  imageWidth?: number;
  imageHeight?: number;
  name: string;
  stock: number;
  supplier: string;
  dosageForm: string;
  packagingSize: string;
  basePrice: string;
  price: string;
  discount: string;
  priority?: boolean;
  id: string;
  onClick?: (product: ProductCartDetail) => void;
};

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

export type Product = {
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

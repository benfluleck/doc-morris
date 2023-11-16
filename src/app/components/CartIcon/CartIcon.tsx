import { FC } from "react";
import { IconProps } from "@entities/icon";

const CartIcon: FC<IconProps> = ({ size = 21 }) => (
  <>
    <div className="text-white">+</div>
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.72412 5.52087L5.16829 3.02087H3.56079"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.19245 12.3625L5.72412 5.52087H16.2725C16.8033 5.52087 17.1983 6.01004 17.0875 6.52921L15.8358 12.3625C15.7533 12.7467 15.4141 13.0209 15.0208 13.0209H8.00662C7.61412 13.0209 7.27495 12.7467 7.19245 12.3625Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3042 16.0417C15.1317 16.0417 14.9917 16.1817 14.9933 16.3542C14.9933 16.5267 15.1333 16.6667 15.3058 16.6667C15.4783 16.6667 15.6183 16.5267 15.6183 16.3542C15.6175 16.1817 15.4775 16.0417 15.3042 16.0417"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.13002 16.0417C7.95752 16.0417 7.81752 16.1817 7.81919 16.3542C7.81836 16.5267 7.95836 16.6667 8.13086 16.6667C8.30336 16.6667 8.44336 16.5267 8.44336 16.3542C8.44336 16.1817 8.30336 16.0417 8.13002 16.0417"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </>
);

export default CartIcon;

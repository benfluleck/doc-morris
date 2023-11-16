import { FC } from "react";
import { IconProps } from "@entities/icon";

interface HeartIconProps extends IconProps{
  isLiked?: boolean;
}

const HeartIcon: FC<HeartIconProps> = ({ size = 24, isLiked = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.575 4C19.745 4 21.875 6.98 21.875 9.76C21.875 15.39 13.035 20 12.875 20C12.715 20 3.875 15.39 3.875 9.76C3.875 6.98 6.005 4 9.175 4C10.995 4 12.185 4.91 12.875 5.71C13.565 4.91 14.755 4 16.575 4Z"
      stroke="#D0D0D0"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HeartIcon;

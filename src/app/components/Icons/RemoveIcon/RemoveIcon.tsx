import { FC } from "react";
import { IconProps } from "@entities/icon";

const RemoveIcon: FC<IconProps> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 5V15.625C15 16.6608 14.1442 17.5 13.1092 17.5H6.85917C5.82333 17.5 5 16.6608 5 15.625V5"
      stroke="#3C3C3B"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.25 5.00004H3.75"
      stroke="#3C3C3B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.33337 2.50004H11.6667"
      stroke="#3C3C3B"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.6667 8.33337V14.1667"
      stroke="#3C3C3B"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.33335 14.1667V8.33337"
      stroke="#3C3C3B"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RemoveIcon;

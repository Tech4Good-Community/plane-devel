import React from "react";

import type { Props } from "./types";

export const CalendarMonthIcon: React.FC<Props> = ({ width = "24", height = "24", className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 14C11.7167 14 11.4792 13.9042 11.2875 13.7125C11.0958 13.5208 11 13.2833 11 13C11 12.7167 11.0958 12.4792 11.2875 12.2875C11.4792 12.0958 11.7167 12 12 12C12.2833 12 12.5208 12.0958 12.7125 12.2875C12.9042 12.4792 13 12.7167 13 13C13 13.2833 12.9042 13.5208 12.7125 13.7125C12.5208 13.9042 12.2833 14 12 14ZM8 14C7.71667 14 7.47917 13.9042 7.2875 13.7125C7.09583 13.5208 7 13.2833 7 13C7 12.7167 7.09583 12.4792 7.2875 12.2875C7.47917 12.0958 7.71667 12 8 12C8.28333 12 8.52083 12.0958 8.7125 12.2875C8.90417 12.4792 9 12.7167 9 13C9 13.2833 8.90417 13.5208 8.7125 13.7125C8.52083 13.9042 8.28333 14 8 14ZM16 14C15.7167 14 15.4792 13.9042 15.2875 13.7125C15.0958 13.5208 15 13.2833 15 13C15 12.7167 15.0958 12.4792 15.2875 12.2875C15.4792 12.0958 15.7167 12 16 12C16.2833 12 16.5208 12.0958 16.7125 12.2875C16.9042 12.4792 17 12.7167 17 13C17 13.2833 16.9042 13.5208 16.7125 13.7125C16.5208 13.9042 16.2833 14 16 14ZM12 18C11.7167 18 11.4792 17.9042 11.2875 17.7125C11.0958 17.5208 11 17.2833 11 17C11 16.7167 11.0958 16.4792 11.2875 16.2875C11.4792 16.0958 11.7167 16 12 16C12.2833 16 12.5208 16.0958 12.7125 16.2875C12.9042 16.4792 13 16.7167 13 17C13 17.2833 12.9042 17.5208 12.7125 17.7125C12.5208 17.9042 12.2833 18 12 18ZM8 18C7.71667 18 7.47917 17.9042 7.2875 17.7125C7.09583 17.5208 7 17.2833 7 17C7 16.7167 7.09583 16.4792 7.2875 16.2875C7.47917 16.0958 7.71667 16 8 16C8.28333 16 8.52083 16.0958 8.7125 16.2875C8.90417 16.4792 9 16.7167 9 17C9 17.2833 8.90417 17.5208 8.7125 17.7125C8.52083 17.9042 8.28333 18 8 18ZM16 18C15.7167 18 15.4792 17.9042 15.2875 17.7125C15.0958 17.5208 15 17.2833 15 17C15 16.7167 15.0958 16.4792 15.2875 16.2875C15.4792 16.0958 15.7167 16 16 16C16.2833 16 16.5208 16.0958 16.7125 16.2875C16.9042 16.4792 17 16.7167 17 17C17 17.2833 16.9042 17.5208 16.7125 17.7125C16.5208 17.9042 16.2833 18 16 18ZM4.5 22C4.1 22 3.75 21.85 3.45 21.55C3.15 21.25 3 20.9 3 20.5V5C3 4.6 3.15 4.25 3.45 3.95C3.75 3.65 4.1 3.5 4.5 3.5H6.125V2.8C6.125 2.56667 6.2 2.375 6.35 2.225C6.5 2.075 6.69167 2 6.925 2C7.15833 2 7.35417 2.075 7.5125 2.225C7.67083 2.375 7.75 2.56667 7.75 2.8V3.5H16.25V2.8C16.25 2.56667 16.325 2.375 16.475 2.225C16.625 2.075 16.8167 2 17.05 2C17.2833 2 17.4792 2.075 17.6375 2.225C17.7958 2.375 17.875 2.56667 17.875 2.8V3.5H19.5C19.9 3.5 20.25 3.65 20.55 3.95C20.85 4.25 21 4.6 21 5V20.5C21 20.9 20.85 21.25 20.55 21.55C20.25 21.85 19.9 22 19.5 22H4.5ZM4.5 20.5H19.5V9.75H4.5V20.5ZM4.5 8.25H19.5V5H4.5V8.25ZM4.5 8.25V5V8.25Z"
        fill="#212529"
      />
    </svg>
  );
};
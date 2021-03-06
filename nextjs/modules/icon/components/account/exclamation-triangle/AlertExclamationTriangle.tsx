import React from "react";
import classnames from "classnames";

interface IProps {
  className: any;
}

const AlertExclamationTriangle: React.FC<IProps> = (
  props: IProps
): any => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
      className={classnames(props.className)}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.0232377 19.3049C0.154921 20.0818 0.662728 20.6292 1.27226 20.8619C1.70279 21.0258 2.07261 20.9884 2.55361 20.9891H20.8458C21.2227 20.9891 21.9142 21.0274 22.2494 20.9603C23.414 20.7276 24.1284 19.5227 23.7712 18.4483C23.6498 18.0836 23.0127 17.0521 22.78 16.6468C21.4254 14.2848 20.0202 11.9477 18.6687 9.58561L14.0353 1.62562C13.8674 1.33827 13.6986 1.02983 13.5062 0.758099C12.8691 -0.144564 11.3764 -0.261698 10.5721 0.517591C10.2993 0.782299 10.1842 1.00016 9.99412 1.3367C9.34438 2.48611 8.60475 3.71362 7.93766 4.86615C7.26899 6.02025 6.51358 7.27351 5.87408 8.41355C5.22434 9.57155 4.48707 10.7764 3.81762 11.943L0.734488 17.2403C0.568898 17.5253 0.378078 17.8228 0.224315 18.125C0.0563596 18.4545 -0.0493065 18.8777 0.0232377 19.3049Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3448 15.1176C12.2677 15.1176 12.4226 15.2559 12.4476 14.5979C12.4634 14.1814 12.4826 13.7641 12.4976 13.3444C12.5276 12.5015 12.5634 11.6519 12.5942 10.8115L12.7358 7.0176C12.7799 5.81072 13.014 6.01229 11.0117 6.01312C10.5686 6.01312 10.6902 6.41458 10.7085 6.92099L10.9933 14.1898C11.0167 14.7678 10.9234 15.1176 11.3448 15.1176ZM10.5053 17.3373C10.5627 17.9753 11.1383 18.5059 11.8554 18.4359C12.4909 18.3735 13.0065 17.8087 12.9523 17.1108C12.9024 16.4561 12.3243 15.9414 11.5989 16.0013C10.9725 16.0521 10.4411 16.6393 10.5053 17.3373Z"
        fill="white"
        stroke="white"
        strokeWidth="0.2"
      />
    </svg>
  );
};

export default AlertExclamationTriangle;

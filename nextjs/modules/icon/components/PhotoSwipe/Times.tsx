import React, { ReactElement } from "react";
import classnames from "classnames";

interface IProps {
  className?: any;
}

const Times: React.FC<IProps> = (
  props: IProps
): ReactElement => {
  return (
    <svg
      width="64"
      height="63"
      viewBox="0 0 64 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(props.className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.29739 6.09982C3.00469 5.83176 2.57847 5.4415 2.31556 5.04866C1.96123 4.5182 1.92631 3.91277 2.10656 3.38231C2.21285 3.06907 2.39412 2.78202 2.62828 2.55146C2.86347 2.32089 3.15207 2.14681 3.4725 2.06054C3.97882 1.92394 4.56422 2.00662 5.14089 2.43078C5.49265 2.6901 5.82386 3.04443 6.05854 3.29605C6.13402 3.37718 6.19924 3.44702 6.25162 3.4994C6.86424 4.10893 8.44174 5.6926 10.5276 7.78721C17.6695 14.9574 30.7779 28.1181 31.5338 28.6871L56.7986 3.46756C56.852 3.41415 56.9156 3.34483 56.9886 3.26677C57.3259 2.90372 57.8497 2.3404 58.394 2.13859C58.9276 1.94089 59.4745 2.00816 59.9294 2.24746C60.1503 2.363 60.3495 2.5191 60.5148 2.705C60.6802 2.89037 60.8127 3.10656 60.8995 3.34124C61.073 3.80853 61.0664 4.35182 60.786 4.88588C60.5528 5.33006 60.0517 5.78965 59.7158 6.09776C59.6224 6.18352 59.5412 6.25747 59.4853 6.31395L59.1628 6.63746C58.7068 7.09551 58.2754 7.5284 57.8009 7.99878L47.141 18.648C44.6648 21.118 34.8475 30.9122 34.333 31.5448C34.6585 31.913 35.0252 32.2678 35.3908 32.6216C35.5767 32.8014 35.7621 32.9811 35.9428 33.1624C36.2314 33.453 36.5067 33.7293 36.7829 34.0045L37.6271 34.8467C38.7194 35.9328 39.7567 36.9716 40.8427 38.0592L40.9973 38.2143C42.1281 39.3471 43.246 40.465 44.3639 41.5824C45.4823 42.6998 46.6023 43.8172 47.7371 44.9495L59.4935 56.694C59.55 56.75 59.6224 56.8183 59.7045 56.8948C59.988 57.1587 60.3844 57.5285 60.6442 57.9198C60.9924 58.4456 61.051 59.0099 60.9133 59.5101C60.8214 59.8439 60.6422 60.1489 60.4034 60.3949C60.1651 60.6408 59.8668 60.8278 59.5371 60.9248C59.0565 61.0671 58.5096 61.0183 57.9848 60.685C57.5848 60.4313 57.2155 60.0364 56.9588 59.7617C56.8925 59.6908 56.8345 59.6287 56.777 59.5707L38.2408 41.0509C37.4818 40.293 36.7306 39.5325 35.9803 38.7735C34.5096 37.2853 33.0435 35.8013 31.5333 34.3491C31.0876 34.6541 27.4915 38.298 25.7445 40.0681C25.3265 40.4912 25.0112 40.8106 24.8864 40.9354L8.19577 57.6116C8.09615 57.7108 7.94056 57.8735 7.74953 58.0728C6.9921 58.8641 5.67341 60.2408 4.96887 60.6835C4.53855 60.9546 4.07793 61.0142 3.65171 60.9238C3.29636 60.8488 2.96566 60.6696 2.69658 60.4226C2.4275 60.1756 2.21953 59.8603 2.11067 59.5132C1.97767 59.089 1.99153 58.6171 2.22107 58.1632C2.45729 57.6964 2.92663 57.2599 3.24193 56.9667C3.31742 56.8963 3.38469 56.8342 3.43655 56.7818L27.0272 33.2106C27.1705 33.0684 27.3323 32.9143 27.4992 32.7551C27.9177 32.3551 28.3711 31.9217 28.6787 31.5438C28.4471 31.1853 26.8378 29.6197 25.9345 28.741C25.6942 28.5074 25.5037 28.3215 25.4035 28.2219L3.52179 6.30984C3.46531 6.25335 3.38777 6.18249 3.29739 6.09982Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
};

export default Times;
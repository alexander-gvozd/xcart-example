import React from "react";
import classnames from "classnames";

interface IProps {
  className?: any;
}

const Camera: React.FC<IProps> = (props: IProps) => {
  return (
    <svg
      width="31"
      height="28"
      viewBox="0 0 31 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(props.className)}
    >
      <path
        d="M25.9004 19L25.9004 26.8"
        stroke="#055A93"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 22.9004L29.8 22.9004"
        stroke="#055A93"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.2492 14.9979C19.2697 22.4255 7.75142 22.3294 7.93579 13.8105C8.31255 10.4451 11.1485 8.10332 14.3597 8.26362C17.9478 8.44254 20.4838 11.4106 20.2492 14.9979ZM24.0725 7.48672C24.6232 7.8404 24.8163 8.56584 24.6352 9.19789C24.2136 10.6691 22.0875 10.5072 21.7122 9.13924C21.3256 7.72974 22.8354 6.69262 24.0725 7.48672ZM9.95699 3.11251C8.98077 3.11251 4.25684 3.10542 3.28095 3.11224C1.89466 3.12186 1.10303 3.56877 0.437667 4.62106C-0.20752 5.64164 0.0512806 7.00161 0.0512806 8.58954C0.0512806 12.4654 0.0512806 16.3412 0.0512806 20.2171C0.0512806 22.7538 -0.254741 25.7744 3.21515 25.7667C7.87229 25.7669 14.6768 25.8061 18.3937 25.7811C18.9394 20.6024 22.8623 16.4924 27.8006 15.9291C27.875 15.1207 27.8179 8.07683 27.8179 7.26821C27.8179 5.38597 27.746 4.27272 25.9385 3.30386C25.2735 2.94738 19.7681 3.11251 18.1605 3.11251C18.2343 2.15504 17.6995 1.25479 17.0317 0.697499C16.1291 -0.0557049 15.5077 0.000969698 14.0954 0.000969698C12.199 0.000969698 11.4207 -0.0420127 10.294 1.61622C10.0535 1.97007 9.96281 2.60272 9.95699 3.11251Z"
        fill="#C4C4C4"
      />
    </svg>
  );
};

export default Camera;

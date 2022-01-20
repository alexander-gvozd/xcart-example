import React, { ReactElement } from "react";
import classnames from "classnames";

interface IProps {
  className?: any;
}

const SandClock: React.FC<IProps> = (
  props: IProps
): ReactElement => {
  return (
    <svg
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(props.className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.00229 15.3232C3.01225 15.0107 3.05386 14.9872 3.19757 14.8029C3.57358 14.3215 4.26355 13.5496 4.69214 13.0848L5.85512 11.764C6.61121 10.9474 6.85524 9.65964 6.34548 8.5158C6.18262 8.15026 5.97356 7.93201 5.76578 7.67598C5.40203 7.22825 4.94408 6.76342 4.60612 6.35295L4.11014 5.78371C3.80791 5.41792 3.44033 5.04345 3.12916 4.6363C2.92623 4.37083 2.98851 3.74109 2.98698 3.3582C2.98519 2.88341 2.98315 2.40632 2.98672 1.93025L10.8739 1.93153C10.8787 2.41245 10.8754 2.89694 10.8733 3.37811C10.8716 3.78091 10.9382 4.37083 10.7227 4.64753L9.2366 6.37465C8.98236 6.66003 8.63596 7.0294 8.40648 7.31836C8.3008 7.45135 8.18364 7.56188 8.0777 7.6987C7.85639 7.98434 7.68051 8.14107 7.50208 8.54235C7.35045 8.88338 7.24988 9.27827 7.24325 9.70507C7.22895 10.5936 7.59959 11.3094 8.02307 11.7852L8.85319 12.7297C9.20801 13.11 9.70807 13.7188 10.0241 14.0423C10.1507 14.1717 10.2431 14.297 10.3605 14.4152C10.4874 14.5433 10.7848 14.8476 10.8164 15.0263C10.8703 15.3301 10.8813 17.1639 10.8777 17.4526L2.98723 17.4516L3.00229 15.3232V15.3232ZM1.26165 4.68736C1.32087 5.16266 1.46535 5.38882 1.69662 5.67446L3.35328 7.56571C3.64684 7.87943 4.05066 8.37515 4.33962 8.70853C4.61275 9.02327 4.80088 9.20578 4.80063 9.66576C4.80063 9.89193 4.76131 10.0885 4.6467 10.2401C4.40931 10.5548 3.77855 11.2936 3.5095 11.5869C3.44237 11.6599 3.40229 11.7132 3.34282 11.775L2.33988 12.9C2.12087 13.1527 1.90236 13.4021 1.68615 13.6663C1.45948 13.943 1.31296 14.2023 1.25986 14.6559C1.15827 15.5213 1.23153 16.5599 1.21494 17.4516C-0.0169646 17.472 -0.0192619 17.2851 0.00575393 18.7524C0.0108592 19.0454 0.0149425 19.0732 0.161209 19.2336C0.242638 19.3229 0.221452 19.3262 0.385586 19.3247C0.49101 19.3237 0.596179 19.3239 0.701603 19.3239H13.1983C13.5932 19.3239 13.5766 19.3678 13.7183 19.2134C13.8543 19.0653 13.851 18.9956 13.8546 18.7325C13.8574 18.5224 13.8566 18.3121 13.8551 18.1017C13.8513 17.5953 13.788 17.46 13.2573 17.4539C13.0533 17.4516 12.8491 17.4549 12.6454 17.4516C12.6357 16.9745 12.6451 16.4905 12.6441 16.0124C12.6421 15.144 12.7444 14.3476 12.1673 13.653C12.0312 13.4891 11.0388 12.3363 10.8422 12.14L10.0121 11.1958C9.96002 11.1315 9.89952 11.0621 9.84719 11.0062C9.73513 10.8862 9.62868 10.7463 9.52096 10.6227C9.22307 10.2802 9.0597 10.1181 9.05944 9.66576C9.05944 9.2017 9.22971 9.05058 9.53015 8.69806L10.3506 7.74414C10.418 7.67088 10.4573 7.61804 10.517 7.55575L11.354 6.6197C11.8676 6.00911 12.4994 5.46285 12.6107 4.68225C12.6773 4.21359 12.6344 2.50128 12.6451 1.87971C12.8555 1.87639 13.0663 1.87946 13.2772 1.8769C13.5299 1.87358 13.6228 1.87078 13.7555 1.72783C13.923 1.54787 13.8592 0.87142 13.8543 0.579143C13.8492 0.286611 13.8446 0.257511 13.6999 0.09695C13.5781 -0.0380845 13.5266 0.0073522 13.1587 0.0073522L0.345253 0.00607619C0.204602 0.00760777 0.213282 0.0413027 0.142064 0.117882C0.00600832 0.264658 0.00907236 0.335366 0.00575393 0.598798C0.00294603 0.809135 0.00371132 1.01947 0.0052429 1.22955C0.00881659 1.73421 0.0733994 1.87078 0.603072 1.8769C0.807027 1.87946 1.01149 1.87614 1.21494 1.87997C1.23025 2.76599 1.15572 3.8358 1.26165 4.68736V4.68736Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SandClock;

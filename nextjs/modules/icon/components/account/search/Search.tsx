import React, { ReactElement } from "react";
import classnames from "classnames";

interface IProps {
  className?: any;
}

const Search: React.FC<IProps> = (props: IProps): ReactElement => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 28.113 30.076"
      className={classnames(props.className)}
    >
      <g>
        <path
          fill="currentColor"
          d="M20.58,22.365h0.028c0.312-0.255,0.624-0.539,0.935-0.822c2.013-2.041,3.26-4.847,3.26-7.937 s-1.247-5.896-3.26-7.909c-2.041-2.041-4.847-3.288-7.937-3.288S7.71,3.657,5.698,5.698c-2.041,2.013-3.288,4.819-3.288,7.909 s1.247,5.896,3.288,7.937c2.013,2.013,4.819,3.26,7.909,3.26C16.243,24.803,18.68,23.896,20.58,22.365L20.58,22.365z M23.102,23.357l4.649,4.677c0.482,0.454,0.482,1.219,0,1.701c-0.454,0.454-1.219,0.454-1.701,0l-4.819-4.847 c-2.183,1.474-4.791,2.324-7.625,2.324c-3.742,0-7.143-1.502-9.609-3.969S0,17.376,0,13.606c0-3.742,1.531-7.143,3.997-9.609 C6.463,1.531,9.865,0,13.606,0c3.77,0,7.172,1.531,9.638,3.997c2.466,2.466,3.969,5.868,3.969,9.609 c0,3.77-1.502,7.172-3.969,9.638L23.102,23.357z"
        />
      </g>
    </svg>
  );
};

export default Search;
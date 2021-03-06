import React from "react";
import classnames from "classnames";

const Regular = (props: Record<any, any>): any => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="minus"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className={classnames(props.className)}
    >
      <path
        fill="currentColor"
        d="M368 224H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
      ></path>
    </svg>
  );
};

export default Regular;

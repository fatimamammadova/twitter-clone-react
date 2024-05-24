import classNames from "classnames";
import { createElement } from "react";

export const Button = ({ children }) => {
  return createElement(
    "button",
    {
      className: classNames("bg-[#1d9bf0] rounded-full flex items-center font-bold", {
        "px-4 h-9": size === "normal",
      }),
    },
    children
  );
};

Button.protoTypes = {
  size: PropTypes.oneOf(["normal", "large"]),
};

Button.defaultTypes = {
  size: "normal",
};

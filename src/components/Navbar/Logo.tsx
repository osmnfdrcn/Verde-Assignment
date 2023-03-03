import { useEffect, memo } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";

type Props = {};

function Logo({}: Props) {
  return (
    <div className="h-full flex items-center justify-center">
      <Link to="/">
        <img
          className="h-6 md:h-7 lg:h-8 xlg:h-9 2xl:h-10  cursor-pointer"
          src={logo}
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default memo(Logo);

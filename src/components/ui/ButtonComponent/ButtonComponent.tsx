import React from "react";
import { montserrat } from "../../fonts";

const ButtonComponent = ({ prop }: { prop: string }) => {
  return (
    <div>
      <DrawOutlineButton>{prop}</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...rest}
      className={`${montserrat.className} group relative bg-[#9090901a] backdrop-blur-sm px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-[#896e6e]`}
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#c7c7c7] transition-all duration-100 group-hover:w-full " />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#c7c7c7] transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#c7c7c7] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#c7c7c7] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default ButtonComponent;

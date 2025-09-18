import React from "react";
import Image from "next/image";

interface PropsButton {
  text: string;
  link: string;
}

interface PropsButtonHover {
  propsButton: PropsButton;
}

const buttonHover = ({ propsButton }: PropsButtonHover) => {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="relative inline-flex items-center gap-2 px-8 py-2 font-semibold text-slate-50 bg-gradient-to-tr from-slate-900/30 via-slate-900/70 to-slate-900/30 ring-4 ring-slate-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-slate-50/10 before:blur-xl"
      >
        <a className="flex items-center gap-2" href={propsButton.link}>
          {propsButton.text}{" "}
          <Image src={"/github.svg"} alt="github" width={16} height={16} />
        </a>
      </button>
    </div>
  );
};

export default buttonHover;

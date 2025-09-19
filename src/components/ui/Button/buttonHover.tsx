import React from "react";
import Image from "next/image";

interface PropsButton {
  text: string;
  link: string;
  image: string;
}

interface PropsButtonHover {
  propsButton: PropsButton;
}

const buttonHover = ({ propsButton }: PropsButtonHover) => {
  return (
    <div className="flex items-center justify-end pt-">
      <button className="flex cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-[var(--background-primary)] px-8 py-2.5 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:bg-zinc-900 hover:shadow-xl">
        <a
          href={propsButton.link}
          className="flex gap-2 text-slate-300/85 text-sm font-semibold"
        >
          {propsButton.text}
          <Image src={propsButton.image} alt="arrow" width={18} height={18} />
        </a>
      </button>
    </div>
  );
};

export default buttonHover;

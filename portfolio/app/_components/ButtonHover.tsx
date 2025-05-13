import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgColor: string;
  textColor: string;
  borderColor:string;
  margin?:string;
};


export default function ButtonHover({ children,bgColor, textColor ,borderColor,margin} :Props) {
  return (
    <div className={`d relative h-12 w-60 ${margin}`}>
      <span
        className={`absolute size-full ${bgColor} top-0 rounded-full`}
      ></span>
      <p
        className={`absolute size-full ${bgColor} flex items-center justify-center rounded-full text-white transition hover:-translate-x-1 hover:-translate-y-1 hover:bg-white ${textColor} ${borderColor} hover:border-2 active:-translate-x-0 active:-translate-y-0`}
      >
        {children}
      </p>
    </div>
  );
}

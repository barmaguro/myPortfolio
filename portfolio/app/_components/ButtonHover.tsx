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
    <div className={`relative h-12 w-40 ${margin}`}>
      <span
        className={`absolute h-full w-full ${bgColor} top-0 rounded`}
      ></span>
      <p
        className={`absolute h-full w-full ${bgColor} flex items-center justify-center rounded text-white transition hover:-translate-x-1 hover:-translate-y-1 hover:bg-white ${textColor} ${borderColor} hover:border-2`}
      >
        {children}
      </p>
    </div>
  );
}

import { Inconsolata } from "next/font/google";
import "../globals.css";

const InconsolataFont = Inconsolata({
  subsets: ["latin"],
});

export const metadata = { title: "お問い合わせ" };

export default function WorksList({ children }) {
  return <>{children}</>;
}

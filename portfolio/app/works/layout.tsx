import { Inconsolata } from "next/font/google";
import "../globals.css";
import exp from "constants";

const InconsolataFont = Inconsolata({
  subsets: ["latin"],
});

export const metadata = { title: "実績一覧" };

export default function WorksList({ children }) {
  return <>{children}</>;
}

import { Inconsolata } from "next/font/google";
import "../globals.css";

const InconsolataFont = Inconsolata({
  subsets: ["latin"],
});

export default function WorksList({ children }) {
  return <>{children}</>;
}

import type { Category } from "./_libs/microcms";
import styles from "./index.module.css";

type Props = {
  category: Category;
};
export default function Category({ category }: Props) {
  return <span>{category.name}</span>;
}

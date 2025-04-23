import type { Category } from "@/libs/microcms";

type Props = {
  category: Category;
};
export default function Categories({ category }: Props) {
  return <span>{category.name}</span>;
}

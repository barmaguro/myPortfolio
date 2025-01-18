import type { Category } from "app/_components/_libs/microcms";

type Props = {
  category: Category;
};
export default function Category({ category }: Props) {
  return (
    <span>{category.name}</span>
  )
}

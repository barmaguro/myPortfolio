import { formatDate } from "app/_components/_libs/utils";

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return <span className=" text-gray-400 text-sm">{formatDate(date)}</span>;
}

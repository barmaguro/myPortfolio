import { formatDate } from "@/libs/utils";

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return <span className=" text-sm text-gray-400">{formatDate(date)}</span>;
}

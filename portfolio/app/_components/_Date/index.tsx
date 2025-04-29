import { formatDate } from "@/libs/utils";

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return <span className=" text-sm text-zinc-500">{formatDate(date)}</span>;
}

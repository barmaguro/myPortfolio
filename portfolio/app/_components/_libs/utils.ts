import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PageRoute, pageNameMap } from "./routes";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * パンくずを生成
 * @param pathName
 * @returns
 */

export function generateBreadcrumbs(pathName: string) {
  const arrPathName = pathName.split("/").filter((x) => x !== "");
  const breadcrumbPaths = [
    "/",
    ...arrPathName.map((value, index, arr) =>
      index === 0 ? `/${value}` : `/${arr.slice(0, index).join("/")}/${value}`
    ),
  ];

  return breadcrumbPaths.map((path, index) => {
    const currentPath = breadcrumbPaths[index];

    // 動的ルートと静的ルートの区別を行う
    let key = currentPath as PageRoute;
    if (key.includes(`${PageRoute.BLOG}/`) && !pageNameMap[key]) {
      key = PageRoute.BLOG_DETAIL;
    }

    return {
      path: currentPath,
      label: pageNameMap[key] || path,
    };
  });
}


dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  return dayjs.utc(date).tz('Asia/Tokyo').format('YYYY/MM/DD');
};
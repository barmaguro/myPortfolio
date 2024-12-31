import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { twMerge } from "tailwind-merge";
import { PageRoute, pageNameMap } from "./routes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * パンくずを生成
 * @param pathName
 * @returns
 */

export function generateBreadcrumbs(
  pathName: string,
  slug?: string,
  categoryName?: string
) {
  const arrPathName = pathName.split("/").filter((x) => x !== "");
  const breadcrumbPaths = [
    "/",
    ...arrPathName.map((value, index, arr) =>
      index === 0 ? `/${value}` : `/${arr.slice(0, index).join("/")}/${value}`
    ),
  ];

  return breadcrumbPaths
    .filter((path) => path !== PageRoute.CATEGORY) // CATEGORYを除外
    .map((path, index) => {
      const currentPath = breadcrumbPaths[index];

      // 動的ルートと静的ルートの区別を行う
      let key = currentPath as PageRoute;
      if (key.includes(`${PageRoute.WORKS}/`) && !pageNameMap[key]) {
        key = PageRoute.WORKS_DETAIL;
      }

      // CATEGORY_SITEなどのページの場合にWORKS_DETAILを表示しない
      if (key === PageRoute.WORKS_DETAIL && (path.includes(PageRoute.CATEGORY_SITE) || path.includes(PageRoute.CATEGORY_SUPPORT) || path.includes(PageRoute.CATEGORY_DESIGN))) {
        key = path as PageRoute;
      }

      let label = pageNameMap[key] || path;
      if (key === PageRoute.WORKS_DETAIL && categoryName) {
        label = categoryName;
      } else if (key === PageRoute.WORKS && slug) {
        label = slug;
      }

      return {
        path: currentPath,
        label: label,
      };
    });
}

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
};

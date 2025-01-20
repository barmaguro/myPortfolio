import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { twMerge } from "tailwind-merge";
import { PageRoute, pageNameMap } from "@/libs/routes";

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
      if (
        key === PageRoute.WORKS_DETAIL &&
        (path.includes(PageRoute.CATEGORY_SITE) ||
          path.includes(PageRoute.CATEGORY_SUPPORT) ||
          path.includes(PageRoute.CATEGORY_DESIGN))
      ) {
        key = path as PageRoute;
      }

      // 特定のパスに対してラベルを上書き
      let label = pageNameMap[key] || path;
      if (key === PageRoute.WORKS_DETAIL && categoryName) {
        label = categoryName;
      } else if (key === PageRoute.WORKS && slug) {
        label = slug;
      } else if (path === "/works/p" || path.startsWith("/works/p/")) {
        label = "全実績一覧";
      }

      return {
        path: currentPath,
        label: label,
      };
    })
    .filter(
      (breadcrumb, index, self) =>
        index === self.findIndex((b) => b.label === breadcrumb.label)
    ); // 重複するラベルを除外
}

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
};

export const getCategoryBgColor = (item) => {
  const category = item.category ? item.category : item;

  if (!category || !category.id) {
    return "";
  }

  switch (category.id) {
    case "works-site":
      return "bg-[#39a392]";
    case "works-design":
      return "bg-[#4a5dab]";
    case "works-support":
      return "bg-[#b58fff]";
    default:
      return ""; // デフォルトのクラス名を返す
  }
};

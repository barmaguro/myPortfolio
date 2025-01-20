/* eslint-disable no-unused-vars */
// filepath: /Users/motok/Desktop/myPortfolio/myPortfolio/portfolio/@/libs/routes.ts
export enum PageRoute {
  HOME = "/",
  WORKS = "/works",
  CATEGORY_SUPPORT = "/works/category/works-support",
  CATEGORY_DESIGN = "/works/category/works-design",
  CATEGORY_SITE = "/works/category/works-site",
  WORKS_DETAIL = "/works/[id]",
  CATEGORY_DETAIL = "/works/category/[id]",
  CATEGORY = "/works/category",
}

/* eslint-enable no-unused-vars */

/**
 * ページ名
 */
export const pageNameMap = {
  [PageRoute.HOME]: "HOME",
  [PageRoute.WORKS]: "全実績一覧",
  [PageRoute.CATEGORY_SUPPORT]: "サポートの実績一覧",
  [PageRoute.CATEGORY_DESIGN]: "デザインの実績一覧",
  [PageRoute.CATEGORY_SITE]: "サイト制作の実績一覧",
};

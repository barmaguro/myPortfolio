export enum PageRoute {
  
    HOME = "/",
    ABOUT = "/about",
    BLOG = "/blog",
    BLOG_DETAIL = "/blog/[id]",
  }
  
  /**
   * ページ名
   */
  export const pageNameMap = {
    [PageRoute.HOME]: "HOME",
    [PageRoute.ABOUT]: "ABOUT",
    [PageRoute.BLOG]: "BLOG一覧",
    [PageRoute.BLOG_DETAIL]: "記事詳細",
  };
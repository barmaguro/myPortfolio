import { MetadataRoute } from "next";
import {
  getAllCategoryList,
  getAllWorksList,
} from "./_components/_libs/microcms";

const buildUrl = (path?: string) =>
  `https://www.motodesgin.site/${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const worksContents = await getAllWorksList();
  const categoryContents = await getAllCategoryList();
  
  const worksUrls: MetadataRoute.Sitemap = worksContents.map((content) => ({
    url: buildUrl(`/works/${content.id}`),
    lastModified: content.revisedAt,
  }));
  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
    (content) => ({
      url: buildUrl(`/works/category/${content.id}`),
      lastModified: content.revisedAt,
    })
  );

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl("/contact"),
      lastModified: now,
    },
    {
      url: buildUrl("/works"),
      lastModified: now,
    },
    ...worksUrls,
    ...categoryUrls,
  ];
}

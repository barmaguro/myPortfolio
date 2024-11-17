"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { generateBreadcrumbs } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

function BreadCrumb() {
  const pathName = usePathname();
  const breadcrumbPaths = generateBreadcrumbs(pathName);

  return (
    <div className="border-b-1 border-primary max-w-screen-xl px-4 py-5">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbPaths.map(({ path, label }, index) => (
              <Fragment key={path}>
                {index !== 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {index !== breadcrumbPaths.length - 1 && (
                    <BreadcrumbLink href={path}>{label}</BreadcrumbLink>
                  )}
                  {index === breadcrumbPaths.length - 1 && (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
    </div>
  );
}

export default BreadCrumb;

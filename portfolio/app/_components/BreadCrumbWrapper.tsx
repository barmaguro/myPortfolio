"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { generateBreadcrumbs } from "./_libs/utils";

function 
BreadCrumb() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const pathName = usePathname();
  const breadcrumbPaths = generateBreadcrumbs(pathName);

  return (
    <div className={`absolute w-full left-0 -z-10 bg-background transition-transform duration-500  ${isVisible ? 'translate-y-0' : '-translate-y-[110%]'}`}>
      <Breadcrumb className="container mx-auto px-5 py-4" >
        <BreadcrumbList>
          {breadcrumbPaths.map(({ path, label }, index) => (
            <Fragment key={path}>
              {index !== 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem className="md:text-lg">
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

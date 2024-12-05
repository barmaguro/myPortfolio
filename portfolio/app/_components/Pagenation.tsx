// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "components/ui/pagination";
// import { client } from "./_libs/microcms";

// export default async function Page({ searchParams }) {
//   const currentPage = parseInt(searchParams.page || "1", 10);
//   const itemsPerPage = 3;
//   const data = await client.get({ endpoint: "works-site" });
//   const worksData = data.contents;

//   const currentData = worksData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="container mx-auto px-4">
//       {currentData.map((work, index) => (
//         <div key={index}>{/* 同上 */}</div>
//       ))}
//       <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious href={`?page=${currentPage - 1}`} />
//           </PaginationItem>
//           {[...Array(Math.ceil(worksData.length / itemsPerPage))].map(
//             (_, i) => (
//               <PaginationItem key={i}>
//                 <PaginationLink
//                   href={`?page=${i + 1}`}
//                   className={currentPage === i + 1 ? "font-bold" : ""}
//                 >
//                   {i + 1}
//                 </PaginationLink>
//               </PaginationItem>
//             )
//           )}
//           <PaginationItem>
//             <PaginationNext href={`?page=${currentPage + 1}`} />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// }

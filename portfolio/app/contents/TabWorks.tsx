
import { client } from "../../libs/client.js";
import { getWorks } from "../../libs/client.js";

export default async function StaticPage() {
  const content = await getWorks();
  if(!content){
    return <h1 className="">No Contents</h1>
  }

  return (
    <>
    <div>
    {content.map((work)=>(
      <div className="card bg-base-100  shadow-xl" key={work.id}>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {work.title}
            <div className="badge badge-secondary">{work.title}</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    ))}
    </div>
    </>
  );
}
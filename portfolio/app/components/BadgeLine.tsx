import React from 'react'

type BadgeLineType = {
    BadgeLineArray: Array<{
      [key: string]: string[];
    }>;
  };
  

  const BadgeLine = ({ BadgeLineArray }: BadgeLineType) => {
    return (
      <div className="mt-4">
        {BadgeLineArray.map((list, index) => (
          <div key={index}>
            <ul className="pl-6 flex flex-wrap gap-2">
              {Object.keys(list).map((key, i) => (
                list[key].map((item, j) => (
                  <li key={`${i}-${j}`} className="py-1 px-4 border-1 border-secondary text-secondary text-sm rounded-full w-fit">
                    {item}
                  </li>
                ))
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
export default BadgeLine
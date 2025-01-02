import { log } from 'console';
import React from 'react'

type BadgeLineType = {
    BadgeLineArray: Array<{
      [key: string]: string[];
    }>;
  };
  

  const BadgeLine = ({ BadgeLineArray }: BadgeLineType,index) => {
    return (
      <div key={index}>
        {BadgeLineArray.map((list, index) => (
          <div key={index}>
            <ul className="flex flex-wrap gap-x-2 gap-y-3">
              {Object.keys(list).map((key, i) => (
                list[key].map((item, j) => (
                  <li key={`${i}-${j}`} className="w-fit rounded bg-accentLight px-4 py-1 text-sm text-secondary md:text-base">
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
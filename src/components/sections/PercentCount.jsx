import React from "react";

export default function PercentCount({ items = [] }) {
  // const list = items;
  return (
    <div className="my-14 flex flex-col gap-8">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="font-bold">{item.title}</p>
            <p className="font-bold text-[#B18B5E]">{item.count}</p>
          </div>
          <div className="bg-gray-200 rounded-full h-3">
            <p className={`bg-[#B18B5E] rounded-full ${item.width} h-full`}></p>
          </div>
        </div>
      ))}
    </div>
  );
}

import { trends } from "../../../../utils/consts";
import { Trend } from "./trend";

export const Trends = () => {
  return (
    <div className="border border-[#2f3336] mb-4 rounded-[16px] flex flex-col gap-2.5 text-[#e7e9ea]">
      <h5 className="px-4 py-3 text-xl font-extrabold text-[#e7e9ea] leading-6 flex items-center">
        Trends for you
      </h5>
      <div className="grid">
        {trends.map((item, index) => (
          <Trend item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

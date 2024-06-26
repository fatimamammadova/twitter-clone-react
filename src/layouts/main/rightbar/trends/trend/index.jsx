import { Link } from "react-router-dom";
import { numberFormatter } from "../../../../../utils/formats";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export const Trend = ({ item }) => {
  return (
    <Link
      to="/"
      className="px-4 py-3 hover:bg-[#ffffff08] transition-colors relative last:rounded-b-xl"
    >
      <div className="text-[13px] text-[#71767b] leading-4">{item.title}</div>
      <div className="text-[15px] font-bold leading-5 mt-0.5">
        {item.topic.type === "tag" && "#"}
        {item.topic.value}
      </div>
      {item?.postCount && (
        <div className="text-[13px] mt-1 leading-4 text-[#71767b]">
          {numberFormatter(item.postCount)} posts
        </div>
      )}
      <Popover className="absolute top-1 right-2">
        <PopoverButton className="outline-none w-[34.75px] h-[34.75px] rounded-full  flex items-center justify-center hover:bg-[#1d9bf01a] text-[#71767b] hover:text-[#1d9bf0] transition-colors">
          <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </PopoverButton>
        <PopoverPanel className="overflow-hidden w-[384px] absolute top-2 right-0 z-[2] bg-black shadow-box rounded-xl">
          <button
            type="button"
            className="py-3 px-4 flex items-center gap-3 font-bold text-[15px] w-full text-left transition-colors leading-5 hover:bg-[#ffffff08] text-[#e7e9ea]"
          >
            <svg viewBox="0 0 24 24" width={18.75}>
              <path
                fill="currentColor"
                d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
              />
            </svg>
            Not interested in this
          </button>

          <button
            type="button"
            className="py-3 px-4 flex items-center gap-3 font-bold hover:bg-[#ffffff08] transition-colors w-full text-left text-[15px] leading-5 text-[#e7e9ea]"
          >
            <svg viewBox="0 0 24 24" width={18.75}>
              <path
                fill="currentColor"
                d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
              />
            </svg>
            This trend is harmful or spammy
          </button>
        </PopoverPanel>
      </Popover>
    </Link>
  );
};

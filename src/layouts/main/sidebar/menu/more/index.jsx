import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { morePopover } from "../../../../../utils/consts";

export const More = () => {
  return (
    <Popover className="relative">
      <PopoverButton className="py-[3px] block group outline-none">
        <button>
          <div className="p-3 rounded-full inline-flex items-center gap-5 transition-colors group-hover:bg-[#eff3f41a]">
            <div className="w-[26.25px] h-[26.25px] relative">
              <svg
                viewBox="0 0 24 24"
                width={26.25}
                height={26.25}
                className="block"
              >
                <path
                  fill="#e7e9ea"
                  d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
                />
              </svg>
            </div>

            <div className="pr-4 text-xl">More</div>
          </div>
        </button>
      </PopoverButton>
      <PopoverPanel className="w-[318px] absolute bottom-0 left-0 bg-black shadow-box rounded-xl overflow-hidden">
        {morePopover &&
          morePopover.map((item, index) => (
            <button
              key={index}
              className="px-4 h-14 w-full inline-flex items-center justify-between gap-5 transition-colors hover:bg-[#eff3f41a]"
            >
              <div className="flex items-center gap-5">
                <div className="w-[26.25px] h-[26.25px] relative">
                  <svg
                    viewBox="0 0 24 24"
                    width={26.25}
                    height={26.25}
                    className="block"
                  >
                    <path fill="#e7e9ea" d={item.svgPath} />
                  </svg>
                </div>

                <div className="pr-4 text-xl">{item.title}</div>
              </div>

              {item.beta && (
                <div className="bg-[#491600] h-5 px-1 rounded-[4px] inline-flex items-center justify-center text-[#ffe0c2] font-bold">
                  Beta
                </div>
              )}
            </button>
          ))}
      </PopoverPanel>
    </Popover>
  );
};

export default More;

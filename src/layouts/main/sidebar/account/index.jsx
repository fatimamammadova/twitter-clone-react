import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { useAccount } from "../../../../store/auth/hooks";
import { Settings } from "./settings";

export const Account = () => {
  const account = useAccount();
  return (
    <div className="mt-auto">
      <Popover className="relative">
        <PopoverButton className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex items-center text-left transition-colors outline-none">
          <img
            src={account?.avatar}
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <div className="mx-3 text-[15px]">
            <h6 className="font-bold leading-5">{account?.fullName}</h6>
            <span className="text-[#71767b]">@{account?.username}</span>
          </div>
          <svg
            viewBox="0 0 24 24"
            width={18.75}
            height={18.75}
            className="ml-auto"
          >
            <path
              fill="#e7e9ea"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </PopoverButton>
        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <PopoverPanel className="absolute bottom-full mb-4 bg-black w-[300px] left-0.5 -translate-x-0.5 rounded-2xl shadow-box overflow-hidden py-3">
            {({close}) => <Settings close={close}/>}
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  );
};

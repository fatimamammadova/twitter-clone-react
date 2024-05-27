import { Button } from "../button";

export const PremiumCard = () => {
  return (
    <div className="border border-[#2f3336] mb-4 rounded-[16px] py-3 px-4 flex flex-col gap-2.5 text-[#e7e9ea]">
      <h6 className="text-xl leading-6 font-extrabold">Subscribe to Premium</h6>
      <p className="text-[15px] font-bold leading-5">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <div className="self-start">
        <Button>Subscribe</Button>
      </div>
    </div>
  );
};

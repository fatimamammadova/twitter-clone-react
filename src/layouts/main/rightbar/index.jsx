import { PremiumCard } from "./premiumCard"
import { Trends } from "./trends"
import { Search } from "./search"
import { WhoFollow } from "./who_follow"

export const Rightbar = () => {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search/>
            <PremiumCard/>
            <Trends/>
            <WhoFollow/>
        </aside>
    )
}
import { PremiumCard } from "../../../components/premiumCard"
import { Trends } from "../../../components/trends"
import { Search } from "./search"

export const Rightbar = () => {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search/>
            <PremiumCard/>
            <Trends/>
        </aside>
    )
}
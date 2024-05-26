import { Logo } from "./logo"
import { Menu } from "./menu"

export const Sidebar = () => {
    return (
        <aside className="w-[275px] min-h-screen">
            <Logo/>
            <Menu/>
            <div>
                test
            </div>
        </aside>
    )
}

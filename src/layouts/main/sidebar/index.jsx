import { Account } from "./account";
import { Logo } from "./logo";
import { Menu } from "./menu";

export const Sidebar = () => {
  return (
    <aside className="w-[275px] max-h-screen min-h-screen flex flex-col px-2">
      <Logo />
      <Menu />
      <Account/>
    </aside>
  );
};

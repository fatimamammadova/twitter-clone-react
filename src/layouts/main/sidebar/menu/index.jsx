import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { mainMenu } from "../../../../utils/consts";
import More from "./more";
import NewPost from "./newPost";
import { useAccount } from "../../../../store/auth/hooks";

export const Menu = () => {
  const account = useAccount()
  return (
    <nav className="mt-0.5 mb-1" key={account}>
      {mainMenu &&
        mainMenu.map((menu, index) => (
          <NavLink key={index} to={typeof menu.path==="function" ? menu.path() : menu.path} className="py-[3px] block group">
            {({ isActive }) => (
              <div
                className={classNames(
                  "p-3 rounded-full inline-flex items-center gap-5 transition-colors group-hover:bg-[#eff3f41a]",
                  {
                    "font-bold": isActive,
                  }
                )}
              >
                <div className="w-[26.25px] h-[26.25px] relative">
                  {menu?.notification && (
                    <span className="w-[18px] h-[18px] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px] bg-[#1d9bf0] rounded-full">
                      {menu?.notification}
                    </span>
                  )}
                  {!isActive && menu.icon?.passive}
                  {isActive && menu.icon?.active}
                </div>

                <div className="pr-4 text-xl">{menu.title}</div>
              </div>
            )}
          </NavLink>
        ))}
      <More/>

      <NewPost/>
      
    </nav>
  );
};

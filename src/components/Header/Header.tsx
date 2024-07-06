import { NavLink } from "react-router-dom";
import LogoImage from "@/assets/logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import moneytick from "@/assets/svg/money-tick.svg";

import { routes } from "@/routes/routes";
const Header: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-3 text-white py-8 max-md:py-4">
        <div className="flex items-center gap-14">
          <div className="flex">
            <div className=" hidden max-md:block">
              <i className="ri-menu-line w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"></i>
            </div>
            <button type="button" className="max-md:hidden">
              <img src={LogoImage} alt="" />
            </button>
          </div>
          <ul className="w-full flex items-center gap-2 text-start max-md:hidden">
            <li>
              <NavLink
                to={routes.default}
                className={({ isActive }) =>
                  `py-3 px-6 rounded-lg ${
                    isActive ? "bg-white/10" : "bg-transparent"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to={routes.wallets}
                className={({ isActive }) =>
                  `py-3 px-6 rounded-lg ${
                    isActive ? "bg-white/10" : "bg-transparent"
                  }`
                }
              >
                Wallets
              </NavLink>
            </li>
            <li>
              <NavLink
                to={routes.settings}
                className={({ isActive }) =>
                  `py-3 px-6 rounded-lg ${
                    isActive ? "bg-white/10" : "bg-transparent"
                  }`
                }
              >
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink
                to={routes.helpcenter}
                className={({ isActive }) =>
                  `py-3 px-6 rounded-lg ${
                    isActive ? "bg-white/10" : "bg-transparent"
                  }`
                }
              >
                Help & Center
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="w-full flex items-center gap-3 text-start">
            <li>
              <div className="relative ml-auto flex-1 md:grow-0 max-md:flex max-md:items-center max-md:justify-center">
                <i className="ri-search-line text-lg lucide lucide-search absolute w-12 h-full flex items-center justify-center"></i>
                <input
                  type="search"
                  className="flex p-5 py-2 max-md:p-0 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 rounded-full bg-white/10 pl-10 max-md:w-10 max-md:h-10 w-[260px]"
                  placeholder="Search anything here"
                />
              </div>
            </li>
            <li className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <i className="ri-notification-3-line"></i>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[428px] right-0">
                  <DropdownMenuLabel className="text-xl p-3">
                    Notification
                  </DropdownMenuLabel>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-start gap-3 w-full py-2 last:pb-0">
                      <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                        <img src={moneytick} className="w-6 h-6" alt="" />
                      </div>
                      <div className="w-[calc(100%-64px)]">
                        <div className="flex items-center justify-between">
                          <p className="text-secondary-500 font-bold">
                            Transfer Success
                          </p>
                          <p className="text-sm text-gray-300">2m</p>
                        </div>
                        <p className="text-secondary-400">
                          You have successfully sent{" "}
                          <span className="font-bold text-secondary-500">
                            johnatan
                          </span>{" "}
                          $10.00
                        </p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

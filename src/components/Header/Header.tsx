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

import { routes } from "@/routes/routes";
const Header: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between text-white py-8">
        <div className="flex items-center gap-14">
          <img src={LogoImage} alt="" />
          <ul className="w-full flex items-center gap-2 text-start">
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
              <div className="relative ml-auto flex-1 md:grow-0">
                <i className="ri-search-line text-lg lucide lucide-search absolute w-12 h-full flex items-center justify-center"></i>
                <input
                  type="search"
                  className="flex p-5 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-full bg-white/10 pl-10 md:w-[200px] lg:w-[260px]"
                  placeholder="Search anything here"
                />
              </div>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <i className="ri-notification-3-line"></i>
                  </div>
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

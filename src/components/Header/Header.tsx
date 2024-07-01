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
        <div className="flex items-center gap-14">
          <ul className="w-full flex items-center gap-5 text-start">
            <li>
              <div className="relative ml-auto flex-1 md:grow-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-search absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                  type="search"
                  className="flex p-5 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-full bg-white/10 pl-8 md:w-[200px] lg:w-[260px]"
                  placeholder="Search anything here"
                />
              </div>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <i className="ri-notification-3-line"></i>
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

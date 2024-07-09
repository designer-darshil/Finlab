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
import UserAvatar from "@/assets/UserAvatar.jpg";

import { routes } from "@/routes/routes";
import { useEffect, useState } from "react";
const Header: React.FC = () => {
  const [isMobileSidebarOpen, setisMobileSidebarOpen] = useState(false);
  useEffect(() => {
    const body = document.body;
    if (isMobileSidebarOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isMobileSidebarOpen]);
  return (
    <>
      <div className="flex items-center justify-between gap-3 text-white py-8 max-md:py-4">
        <div className="flex items-center gap-14">
          <div className="flex">
            <div className="md:hidden">
              <button
                onClick={() => setisMobileSidebarOpen(!isMobileSidebarOpen)}
                className="text-white focus:outline-none cursor-pointer"
              >
                <i className="ri-menu-line w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"></i>
              </button>
            </div>
            <NavLink to="/" className="max-md:hidden">
              <img src={LogoImage} alt="LogoImage" />
            </NavLink>
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
                <DropdownMenuContent align="end" className="w-[428px] mt-3">
                  <DropdownMenuLabel className="text-xl p-3">
                    Notification
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
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
                    <AvatarImage src={UserAvatar} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
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
      <div className={`md:hidden ${isMobileSidebarOpen ? "block" : "hidden"}`}>
        <div
          className="absolute text-white z-[99] backdrop-blur-sm bg-white/30 rounded-full flex items-center justify-center w-14 h-14 end-6 top-16"
          typeof="button"
          onClick={() => setisMobileSidebarOpen(!isMobileSidebarOpen)}
        >
          <i className="ri-close-line text-white text-2xl"></i>
        </div>
        <div className="bg-[#1C2634] md:hidden fixed inset-0 z-50 w-3/4 h-full p-6">
          <div className="grid grid-rows-[60px_1fr_50px] gap-6 h-full">
            <NavLink to="/" className="">
              <img src={LogoImage} alt="LogoImage" />
            </NavLink>
            <ul className="flex flex-col items-center gap-4 text-start">
              <li className="w-full">
                <NavLink
                  onClick={() => setisMobileSidebarOpen(!isMobileSidebarOpen)}
                  to={routes.default}
                  className={({ isActive }) =>
                    `py-4 px-8 rounded-full w-full block text-white ${
                      isActive ? "bg-white/10" : "bg-transparent"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  onClick={() => setisMobileSidebarOpen(!isMobileSidebarOpen)}
                  to={routes.wallets}
                  className={({ isActive }) =>
                    `py-4 px-8 rounded-full w-full block text-white ${
                      isActive ? "bg-white/10" : "bg-transparent"
                    }`
                  }
                >
                  Wallets
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  onClick={() => setisMobileSidebarOpen(!isMobileSidebarOpen)}
                  to={routes.settings}
                  className={({ isActive }) =>
                    `py-4 px-8 rounded-full w-full block text-white ${
                      isActive ? "bg-white/10" : "bg-transparent"
                    }`
                  }
                >
                  Settings
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  onClick={() => setisMobileSidebarOpen(!isMobileSidebarOpen)}
                  to={routes.helpcenter}
                  className={({ isActive }) =>
                    `py-4 px-8 rounded-full w-full block text-white ${
                      isActive ? "bg-white/10" : "bg-transparent"
                    }`
                  }
                >
                  Help & Center
                </NavLink>
              </li>
            </ul>
            <button
              onClick={() => setisMobileSidebarOpen(!isMobileSidebarOpen)}
              className="py-4 px-8 rounded-full w-full text-start block text-error-600"
            >
              Log Out
            </button>
          </div>
        </div>
        <div
          className="fixed inset-0 bg-[#1A1C1E]/30 backdrop-blur-sm z-[49]"
          onClick={() => setisMobileSidebarOpen(false)}
        ></div>
      </div>
    </>
  );
};

export default Header;

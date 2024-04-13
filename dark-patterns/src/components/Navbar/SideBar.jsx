import { Dialog, Transition } from "@headlessui/react";
import {
  Cog6ToothIcon,
  HomeIcon,
  InformationCircleIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import GLOBAL_CONSTANTS from "../../GlobalConstants";
import { classNamesMerge } from "../../utils/generalUtils";

export default function SideBar({
  mobileMenuOpen = false,
  setMobileMenuOpen = () => {},
  handleItemClick = () => {},
}) {
  const navigation = [
    { key: "home", name: "Home", route: "/", icon: HomeIcon },
    {
      key: "about",
      name: "About",
      route: "/about",
      icon: InformationCircleIcon,
    },
  ];

  const userNavigation = [
    { key: "profile", name: "Your profile", route: "/profile", icon: UserIcon },
    {
      key: "settings",
      name: "Settings",
      route: "/settings",
      icon: Cog6ToothIcon,
    },
  ];

  const { userData } = useSelector((state) => state.data);

  return (
    <Transition.Root show={mobileMenuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={setMobileMenuOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={userData?.imageUrl || ""}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = GLOBAL_CONSTANTS?.DEFAULT_IMAGE;
                      }}
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {userData?.name}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {userData?.email}
                    </div>
                  </div>
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <div
                              className={classNamesMerge(
                                location.pathname == item.route
                                  ? "bg-gray-800 text-white"
                                  : "text-gray-400 hover:text-white hover:bg-gray-800",
                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                              )}
                              onClick={() => handleItemClick(item)}
                            >
                              <item.icon
                                className="h-6 w-6 shrink-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </li>

                    <div className="mt-auto pb-5 border-b">
                      <ul role="list" className="-mx-2 space-y-1">
                        {userNavigation.map((item) => (
                          <li key={item.name}>
                            <div
                              className={classNamesMerge(
                                location.pathname == item.route
                                  ? "bg-gray-800 text-white"
                                  : "text-gray-400 hover:text-white hover:bg-gray-800",
                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                              )}
                              onClick={() => handleItemClick(item)}
                            >
                              <item.icon
                                className="h-6 w-6 shrink-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      color="error"
                      variant="contained"
                      className="!rounded-md !normal-case"
                      startIcon={<LogoutIcon />}
                    >
                      Sign out
                    </Button>
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
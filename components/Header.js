import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  FlagIcon,
  HomeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* 왼쪽 */}
      <div className="flex items-center">
        <Image
          alt=""
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        ></Image>
        <div className="bg-gray-100 p-2 flex ml-2 items-center rounded-full">
          <SearchIcon className="text-gray-600 h-6"></SearchIcon>
          <input
            className="hidden md:inline-flex flex flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="search facebook"
          ></input>
        </div>
      </div>
      {/* 중간 */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon}></HeaderIcon>
          <HeaderIcon Icon={FlagIcon}></HeaderIcon>
          <HeaderIcon Icon={PlayIcon}></HeaderIcon>
          <HeaderIcon Icon={ShoppingCartIcon}></HeaderIcon>
          <HeaderIcon Icon={UserGroupIcon}></HeaderIcon>
        </div>
      </div>
      {/* 오른쪽 */}
      <div className="flex items-center">
        {/* 프로필 사진 */}
        <p className="font-semibold pr-3 whitespace-nowrap">leeseungheon</p>
        <ViewGridIcon className="icon"></ViewGridIcon>
        <ChatIcon className="icon"></ChatIcon>
        <BellIcon className="icon"></BellIcon>
        <ChevronDownIcon className="icon"></ChevronDownIcon>
      </div>
    </div>
  );
}

export default Header;

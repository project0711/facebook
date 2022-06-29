import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div>
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
            className="ml-2 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="search facebook"
          ></input>
        </div>
      </div>
      {/* 중간 */}
      {/* 오른쪽 */}
    </div>
  );
}

export default Header;

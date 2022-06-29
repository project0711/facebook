function HeaderIcon({ Icon, active }) {
  return (
    <div
      className="cursor-pointer md:px-10 pb-3 pt-3 md:hover:bg-gray-100 rounded-xl
    active:border-b-2 active:border-blue-500 group"
    >
      <Icon
        className={`text-gray-500 h-5 group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      ></Icon>
    </div>
  );
}

export default HeaderIcon;

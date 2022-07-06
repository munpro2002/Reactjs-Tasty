const SecondaryNav = () => {
  return (
    <div className="flex items-center h-[50px] bg-[#F4F4F4] px-4 py-4 ">
      <ul className="max-w-[75rem] flex flex-row w-full items-center font-bold text-[#222222] text-[0.875rem] mx-auto md:pl-[198px] overflow-x-auto no-scrollbar">
        <li className="ml-[8px] md:ml-[0px] whitespace-nowrap mr-[30px] hover:text-[#e40754]">
          <a href="/">Country</a>
        </li>
        <li className="ml-[8px] md:ml-[0px] whitespace-nowrap mr-[30px] hover:text-[#e40754]">
          <a href="/">User ratings</a>
        </li>
        <li className="ml-[8px] md:ml-[0px] whitespace-nowrap mr-[30px] hover:text-[#e40754]">
          <a href="/">Seo tilte</a>
        </li>
        <li className="ml-[8px] md:ml-[0px] whitespace-nowrap mr-[30px] hover:text-[#e40754]">
          <a href="/">On top</a>
        </li>
        <li className="ml-[8px] md:ml-[0px] whitespace-nowrap mr-[30px] hover:text-[#e40754]">
          <a href="/">Shopable</a>
        </li>
        <li className="ml-[8px] md:ml-[0px] whitespace-nowrap mr-[30px] hover:text-[#e40754]">
          <a href="/">Promotion</a>
        </li>
      </ul>
    </div>
  );
};

export default SecondaryNav;

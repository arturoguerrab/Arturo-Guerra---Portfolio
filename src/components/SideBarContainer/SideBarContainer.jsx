import React from "react";

const SideBarContainer = () => {
  const StylesAside ={
    mobile:'col-span-12 row-start-12 overflow-hidden flex justify-center items-center mb-4 ',
    desktop:"xl:row-span-11 xl:col-start-12 xl:row-start-2" 
  }

  const StylesBar ={
    mobile:'grid grid-rows-1 grid-cols-12 gap-4 h-12 w-3/4 rounded-[1.25rem] bg-[#FFFFFF]/65 ',
    desktop:"xl:grid-cols-1 xl:grid-rows-12 gap-4 xl:w-12 xl:h-2/4 rounded-[1.25rem] bg-[#FFFFFF]/65 " 
  }

	return (
    <aside className={StylesAside.mobile + StylesAside.desktop}>
    <div className={ StylesBar.mobile + StylesBar.desktop  }>
        <div className="row-span-6 row-start-4"></div>
    </div>
  </aside>
  )
}

export default SideBarContainer;

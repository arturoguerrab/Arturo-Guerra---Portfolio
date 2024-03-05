import React from "react";


const Profile = () => {
	return (
		<div id="profile">
			<div className="glassmorphism h-11 my-8 rounded-2xl ">profile</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-a6 md:grid-rows-a3 lg:grid-rows-a5 xl:grid-rows-a3 gap-8 pb-8">
				<div className="bg-white row-span-2 lg:col-span-2 rounded-3xl "></div>
				<div className="bg-black rounded-3xl 2xl:col-span-2 "></div>
				<div className="bg-white row-span-2 lg:col-span-2 lg:row-start-4 xl:col-span-1 xl:row-start-1 xl:col-start-3 2xl:col-span-2  rounded-3xl   "></div>
				<div className="bg-black rounded-3xl xl:col-span-2 2xl:row-start-1   "></div>
			</div>
		</div>
	);
};

export default Profile;

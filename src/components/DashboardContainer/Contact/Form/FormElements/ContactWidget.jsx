import React from "react";

const ContactWidget = ({ children }) => {
	return (
		<div className="h-full">
			<div className="bg-pwhite h-32 md:h-72 rounded-t-3xl p-5 md:p-8 flex flex-col justify-between">
				<div className="flex justify-end">
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/yfesfuir9ytbckws9li8"
						alt="contact icon"
						loading="lazy"
						className="h-5"
					/>
				</div>
				<div className="md:flex gap-40 items-end">
					<div>
						<h3 className="text-sm md:text-base text-pgreen font-semibold">
							CONTACT
						</h3>
						<h2 className="text-2xl md:text-3xl font-bold">
							Let's work together ;)
						</h2>
						<span className="text-sm md:text-base text-pgray">
							Lorem, ipsum dolor.
						</span>
					</div>
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/ky1tn5e7y76gubgcxume"
						alt="image of arturo guerra"
						loading="lazy"
						className="hidden md:inline h-36"
					/>
				</div>
			</div>
			<div className="glassWhite h-80 md:h-[400px] p-5 md:p-8 flex items-center rounded-b-3xl">
				{children}
			</div>
		</div>
	);
};

export default ContactWidget;

import React from "react";

const Prueba = ({
	Double,

	mdSimple,
	mdDouble,
	lgSimple,
	lgDouble,
	xlSimple,
	xlDouble,
	xxlSimple,
	xxlDouble,
}) => {
	const simple = "col-span-1 ";
	const long = "col-span-2 ";
	const double = "row-span-2 ";

	return <div className={'bg-black '+simple + (Double ? large : "")}></div>;
};

export default Prueba;

"use client";
import Image from "next/image";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
	{ name: "Group A", value: 92, fill: "#C3EBFA" },
	{ name: "Group B", value: 8, fill: "#FAE27C" },
];

function Performance() {
	return (
		<div className="bg-white rounded-md h-80 p-4 relative">
			{/* TITLE */}
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-semibold">Performance</h1>
				<Image src="/moreDark.png" alt="" width={16} height={16} />
			</div>

			{/* CHART */}
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						dataKey="value"
						startAngle={180}
						endAngle={0}
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={80}
						fill="#8884d8"
					/>
				</PieChart>
			</ResponsiveContainer>
			{/* CHART END */}

			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
				<h1 className="text-3xl font-bold">9.2</h1>
				<p className="text-xs text-gray-400">of 10 max MDTS</p>
			</div>

			{/* BOTTOM TEXT INFO */}
			<h2 className="absolute font-medium bottom-16 left-0 right-0 m-auto text-center">
				1st Semester - 2nd Semester
			</h2>
		</div>
	);
}

export default Performance;

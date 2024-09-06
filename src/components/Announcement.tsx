"use client";
import Image from "next/image";

// TEMPORARY
// const anouncement = [
// 	{
// 		id: 1,
// 		title: "Lorem ipsum dolor",
// 		time: "12:00 PM - 2:00 PM",
// 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// 	},
// 	{
// 		id: 2,
// 		title: "Lorem ipsum dolor",
// 		time: "12:00 PM - 2:00 PM",
// 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// 	},
// 	{
// 		id: 3,
// 		title: "Lorem ipsum dolor",
// 		time: "12:00 PM - 2:00 PM",
// 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// 	},
// ];

function Announcement() {
	return (
		<div className="bg-white p-4 rounded-md">
			<div className="flex items-center justify-between">
				<h1 className="text-lg font-semibold my-4">Announcement</h1>
				<span className="text-xs text-gray-300">View All</span>
			</div>

			<div className="flex flex-col gap-4 mt-4">
				{/* ANNOUCEMENT 1 */}
				<div className="p-4 rounded-md bg-dashSkyLight">
					<div className="flex items-center justify-between">
						<h2 className="text-gray-600 font-medium">
							Lorem ipsum dolor
						</h2>
						<span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
							2024-11-12
						</span>
					</div>
					<p className="text-sm mt-2 text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>

                {/* ANNOUCEMENT 2 */}
				<div className="p-4 rounded-md bg-dashPurpleLight">
					<div className="flex items-center justify-between">
						<h2 className="text-gray-600 font-medium">
							Lorem ipsum dolor
						</h2>
						<span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
							2024-11-12
						</span>
					</div>
					<p className="text-sm mt-2 text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>

                {/* ANNOUCEMENT 3 */}
				<div className="p-4 rounded-md bg-dashYellowLight">
					<div className="flex items-center justify-between">
						<h2 className="text-gray-600 font-medium">
							Lorem ipsum dolor
						</h2>
						<span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
							2024-11-12
						</span>
					</div>
					<p className="text-sm mt-2 text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>

				{/* {anouncement.map((info) => (
					<div
						className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-dashSky even:border-t-dashPurple"
						key={info.id}>
						<div className="flex items-center justify-between">
							<h1 className="text-gray-600 font-semibold">
								{info.title}
							</h1>
							<span className="text-sm text-gray-300">
								{info.time}
							</span>
						</div>
						<p className="text-sm mt-2 text-gray-400">
							{info.description}
						</p>
					</div>
				))} */}
			</div>
		</div>
	);
}

export default Announcement;

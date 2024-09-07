import BigCalendar from "@/components/BigCalendar";
import Image from "next/image";
import React from "react";

function SingleTeacherPage() {
	return (
		<div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
			{/* LEFT */}
			<div className="w-full xl:w-2/3">
				{/* TOP SECTION */}
				<div className="flex flex-col lg:flex-row gap-4">
					{/* USER INFO CARD */}
					<div className="bg-dashSky py-6 px-4 flex-1 flex gap-4">
						<div className="w-1/3 relative">
							<Image
								src="https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200"
								alt=""
								width={144}
								height={144}
								className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover"
							/>
						</div>
						<div className="w-2/3 flex flex-col justify-between gap-4">
							<h1 className="text-md md:text-xl font-semibold">
								Jennifer Kahlanye
							</h1>
							<p className="text-xs md:text-sm text-gray-500">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</p>
							<div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
								<div className="flex gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3 items-center">
									<Image
										src="/blood.png"
										alt=""
										width={14}
										height={14}
									/>
									<span>A+</span>
								</div>
								<div className="flex gap-2 w-full md:w-1/3 lg:w-full items-center">
									<Image
										src="/date.png"
										alt=""
										width={14}
										height={14}
									/>
									<span>February 2025</span>
								</div>
								<div className="flex gap-2 w-full md:w-1/3 lg:w-full items-center">
									<Image
										src="/mail.png"
										alt=""
										width={14}
										height={14}
									/>
									<span>jenkahlanye@yahoo.com</span>
								</div>
								<div className="flex gap-2 w-full md:w-1/3 lg:w-full items-center">
									<Image
										src="/phone.png"
										alt=""
										width={14}
										height={14}
									/>
									<span>+1 234 5765</span>
								</div>
							</div>
						</div>
					</div>
					{/* SMALL CARDS */}
					<div className="flex-1 flex gap-4 justify-between flex-wrap">
						{/* CARDS */}
						<div className="flex bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
							<Image
								src="/singleAttendance.png"
								alt=""
								width={24}
								height={24}
								className="w-6 h-6"
							/>
							<div className="">
								<h1 className="text-xl font-semibold">90%</h1>
								<span className="text-sm text-gray-400">
									Attendance
								</span>
							</div>
						</div>
						<div className="flex bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
							<Image
								src="/singleBranch.png"
								alt=""
								width={24}
								height={24}
								className="w-6 h-6"
							/>
							<div className="">
								<h1 className="text-xl font-semibold">2</h1>
								<span className="text-sm text-gray-400">
									Branches
								</span>
							</div>
						</div>
						<div className="flex bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
							<Image
								src="/singleLesson.png"
								alt=""
								width={24}
								height={24}
								className="w-6 h-6"
							/>
							<div className="">
								<h1 className="text-xl font-semibold">6</h1>
								<span className="text-sm text-gray-400">
									Lessons
								</span>
							</div>
						</div>
						<div className="flex bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
							<Image
								src="/singleClass.png"
								alt=""
								width={24}
								height={24}
								className="w-6 h-6"
							/>
							<div className="">
								<h1 className="text-xl font-semibold">6</h1>
								<span className="text-sm text-gray-400">
									Classess
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* END OF TOP SECTION */}

				{/* BOTTOM SECTION */}
				<div className="mt-4 bg-white rounded-md p-4 h-[800px]">
					<h1 className="">Teacher&apos;s Schedule</h1>
					<BigCalendar />
				</div>
				{/* END OF BOTTOM SECTION */}
			</div>

			{/* RIGHT */}
			<div className="w-full xl:w-1/3">Right widgets</div>
		</div>
	);
}

export default SingleTeacherPage;

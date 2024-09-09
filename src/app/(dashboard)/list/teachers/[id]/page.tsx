import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/PerformanceChart";
import Image from "next/image";
import Link from "next/link";
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
							<div className="flex items-center gap-4">
								<h1 className="text-md md:text-xl font-semibold">
									Jennifer Kahlanye
								</h1>
								<FormModal
									table="teacher"
									requestType="update"
									data={{
										id: 1,
										username: "michelmclans",
										email: "michelmclans@gmail.com",
										password: "password",
										firstName: "Michel",
										lastName: "Mclans",
										phone: "+1 399 390 83",
										address:
											"222 lison str, Notown, Australia",
										bloodType: "AB+",
										birthday: "1998-01-22",
										sex: "female",
										img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
									}}
								/>
							</div>

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
			<div className="w-full xl:w-1/3 flex flex-col gap-4">
				<div className="bg-white p-4 rounded-md">
					<h1 className="text-xl font-semibold">Shortcuts</h1>
					<div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
						<Link
							className="p-3 rounded-md bg-dashSkyLight"
							href="/">
							Teacher&apos;s Classes
						</Link>
						<Link
							className="p-3 rounded-md bg-dashPurpleLight"
							href="/">
							Teacher&apos;s Students
						</Link>
						<Link
							className="p-3 rounded-md bg-dashYellowLight"
							href="/">
							Teacher&apos;s Lessons
						</Link>
						<Link className="p-3 rounded-md bg-pink-50" href="/">
							Teacher&apos;s Exams
						</Link>
						<Link
							className="p-3 rounded-md bg-dashSkyLight"
							href="/">
							Teacher&apos;s Assignment
						</Link>
					</div>
				</div>
				<Performance />
				<Announcement />
			</div>
		</div>
	);
}

export default SingleTeacherPage;

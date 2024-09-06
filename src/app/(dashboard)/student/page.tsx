import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";

function StudentPage() {
	return (
		<div className="p-4 flex gap-4 flex-col xl:flex-row ">
			{/* LEFT */}
			<div className="w-full xl:w-2/3">
				<div className="h-full bg-white p-4 rounded-md">
					<h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendar />
				</div>

				{/* MIDDLE CHART */}
				{/* <div className="flex gap-4 flex-col lg:flex-row"></div> */}
				{/* BOTTOM CHART */}
				{/* <div className="w-full h-[500px]"></div> */}
			</div>

			{/* RIGHT */}
			<div className="w-full xl:w-1/3">
				<EventCalendar />
				<Announcement />
			</div>
		</div>
	);
}

export default StudentPage;

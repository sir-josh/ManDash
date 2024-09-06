import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";

function ParentsPage() {
	return (
		<div className="p-4 flex gap-4 flex-col xl:flex-row flex-1">
			{/* LEFT */}
			<div className="w-full xl:w-2/3">
				<div className="h-full bg-white p-4 rounded-md">
					<h1 className="text-xl font-semibold">Schedule (Geraldine Brown)</h1>
					<BigCalendar />
				</div>
			</div>

			{/* RIGHT */}
			<div className="w-full xl:w-1/3">
				<Announcement />
			</div>
		</div>
	);
}

export default ParentsPage;

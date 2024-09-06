import TableSearch from "@/components/TableSearch";
import Image from "next/image";

const TeacherListPage = () => {
	return (
		<div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
			{/* TOP HEADER & FILTER BUTTONS */}
			<div className="flex justify-between items-center">
				<h1 className="hidden md:block font-semibold text-lg">
					All Teachers
				</h1>

				<div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
					<TableSearch />
					<div className="flex items-center gap-4 self-end">
						<button className="flex w-8 h-8 items-center justify-center rounded-full bg-dashYellow">
							<Image
								src="/filter.png"
								alt=""
								width={14}
								height={14}
							/>
						</button>
						<button className="flex w-8 h-8 items-center justify-center rounded-full bg-dashYellow">
							<Image
								src="/sort.png"
								alt=""
								width={14}
								height={14}
							/>
						</button>
						<button className="flex w-8 h-8 items-center justify-center rounded-full bg-dashYellow">
							<Image
								src="/plus.png"
								alt=""
								width={14}
								height={14}
							/>
						</button>
					</div>
				</div>
			</div>

			{/* TEACHERS LIST */}
			<div className=""></div>

			{/* PAGINATION */}
			<div className=""></div>
		</div>
	);
};

export default TeacherListPage;

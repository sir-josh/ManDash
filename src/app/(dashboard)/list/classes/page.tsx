import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, classesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Classes = {
	id: number;
	name: string;
	capacity: number;
	grade: number;
	supervisor: string;
};

const columns = [
	{
		header: "Class Names",
		accessor: "classnames",
	},
	{
		header: "Capacity",
		accessor: "capacity",
	},
	{
		header: "Grade",
		accessor: "grade",
		className: "hidden md:table-cell",
	},
	{
		header: "Supervisor",
		accessor: "supervisor",
		className: "hidden md:table-cell",
	},
	{
		header: "Actions",
		accessor: "actions",
	},
];

const ClassesListPage = () => {
	const renderRow = (item: Classes) => (
		<tr
			key={item.id}
			className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-dashPurpleLight">
			<td className="flex items-center gap-4 p-4">
				<div className="text-left">
					<h3 className="font-semibold">{item.name}</h3>
				</div>
			</td>
			<td className="table-cell flex-wrap">{item.capacity}</td>
			<td className="hidden md:table-cell pr-4">{item.grade}</td>
			<td className="hidden md:table-cell">{item.supervisor}</td>
			<td>
				<div className="flex gap-2 items-center">
					<Link href={`/list/teachers/${item.id}`}>
						<button className="w-7 h-7 flex items-center justify-center rounded-full bg-dashSky">
							<Image
								src="/edit.png"
								alt=""
								width={16}
								height={16}
							/>
						</button>
					</Link>
					{role === "admin" && (
						<button className="w-7 h-7 flex items-center justify-center rounded-full bg-dashPurple">
							<Image
								src="/delete.png"
								alt=""
								width={16}
								height={16}
							/>
						</button>
					)}
				</div>
			</td>
		</tr>
	);

	return (
		<div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
			{/* TOP HEADER & FILTER BUTTONS */}
			<div className="flex justify-between items-center">
				<h1 className="hidden md:block font-semibold text-lg">
					All Classes
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
						{role === "admin" && (
							<button className="flex w-8 h-8 items-center justify-center rounded-full bg-dashYellow">
								<Image
									src="/plus.png"
									alt=""
									width={14}
									height={14}
								/>
							</button>
						)}
					</div>
				</div>
			</div>

			{/* TEACHERS LIST */}
			<Table columns={columns} renderRow={renderRow} data={classesData} />

			{/* PAGINATION */}
			<Pagination />
		</div>
	);
};

export default ClassesListPage;

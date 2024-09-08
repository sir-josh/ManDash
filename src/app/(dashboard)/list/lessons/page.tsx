import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, lessonsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Lesson = {
	id: number;
	subject: string;
	class: string;
	teacher: string;
};

const columns = [
	{
		header: "Subject Name",
		accessor: "subject",
	},
	{
		header: "Class",
		accessor: "class",
	},
	{
		header: "Teacher",
		accessor: "teacher",
		className: "hidden md:table-cell",
	},
	{
		header: "Actions",
		accessor: "actions",
	},
];

const LessonsListPage = () => {
	const renderRow = (item: Lesson) => (
		<tr
			key={item.id}
			className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-dashPurpleLight">
			<td className="flex items-center gap-4 p-4 text-left">
				<h3 className="font-semibold">{item.subject}</h3>
			</td>
			<td className="table-cell pr-4">{item.class}</td>
			<td className="hidden md:table-cell">{item.teacher}</td>
			<td>
				<div className="flex gap-2 items-center">
					{role === "admin" && (
						<>
							<FormModal
								requestType="update"
								table="lesson"
								data={item}
							/>
							<FormModal
								requestType="delete"
								table="lesson"
								id={item.id}
							/>
						</>
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
					All Lessons
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
							<FormModal requestType="create" table="lesson" />
						)}
					</div>
				</div>
			</div>

			{/* LESSONS LIST */}
			<Table columns={columns} renderRow={renderRow} data={lessonsData} />

			{/* PAGINATION */}
			<Pagination />
		</div>
	);
};

export default LessonsListPage;

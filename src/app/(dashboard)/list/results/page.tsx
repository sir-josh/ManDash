import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, resultsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Result = {
	id: number;
	subject: string;
	class: string;
	teacher: string;
	student: string;
	type: "exam" | "assignment";
	score: number;
	date: string;
};

const columns = [
	{
		header: "Subject Names",
		accessor: "subject",
	},

	{
		header: "Student",
		accessor: "student",
	},
	{
		header: "Score",
		accessor: "score",
		className: "hidden md:table-cell",
	},
	{
		header: "Class",
		accessor: "class",
		className: "hidden md:table-cell",
	},
	{
		header: "Type",
		accessor: "type",
		className: "hidden md:table-cell",
	},
	{
		header: "Teacher",
		accessor: "teacher",
		className: "hidden md:table-cell",
	},
	{
		header: "Date",
		accessor: "Date",
		className: "hidden md:table-cell",
	},
	{
		header: "Actions",
		accessor: "actions",
	},
];

const ResultsListPage = () => {
	const renderRow = (item: Result) => (
		<tr
			key={item.id}
			className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-dashPurpleLight">
			<td className="flex items-center gap-4 p-4">
				<div className="text-left">
					<h3 className="font-semibold">{item.subject}</h3>
				</div>
			</td>
			<td className="pr-4">{item.student}</td>
			<td className="hidden md:table-cell pr-4">{item.score}</td>
			<td className="hidden md:table-cell flex-wrap">{item.class}</td>
			<td className="hidden md:table-cell pr-4">{item.type}</td>
			<td className="hidden md:table-cell pr-4">{item.teacher}</td>
			<td className="hidden md:table-cell">{item.date}</td>
			<td>
				<div className="flex gap-2 items-center">
					{role === "admin" && (
						<>
							<FormModal
								requestType="update"
								table="result"
								data={item}
							/>
							<FormModal
								requestType="delete"
								table="result"
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
					All Results
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
							<FormModal requestType="update" table="result" />
						)}
					</div>
				</div>
			</div>

			{/* RESULTS LIST */}
			<Table columns={columns} renderRow={renderRow} data={resultsData} />

			{/* PAGINATION */}
			<Pagination />
		</div>
	);
};

export default ResultsListPage;

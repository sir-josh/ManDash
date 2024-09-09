"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import SpinnerMini from "./SpinnerMini";
// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm copy";
const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
	loading: () => <SpinnerMini />,
});
const StudentForm = dynamic(() => import("./forms/TeacherForm"), {
	loading: () => <SpinnerMini />,
});
const ParentForm = dynamic(() => import("./forms/ParentForm"));
const SubjectForm = dynamic(() => import("./forms/SubjectForm"));
const ResultForm = dynamic(() => import("./forms/ResultForm"));
const LessonForm = dynamic(() => import("./forms/LessonForm"));
const ExamForm = dynamic(() => import("./forms/ExamForm"));
const EventForm = dynamic(() => import("./forms/EventForm"));
const ClassForm = dynamic(() => import("./forms/ParentForm"));
const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"));
const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"));


const forms: {
	[key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
	teacher: (type, data) => <TeacherForm type={type} data={data} />,
	student: (type, data) => <StudentForm type={type} data={data} />,
	parent: (type, data) => <ParentForm type={type} data={data} />,
	subject: (type, data) => <SubjectForm type={type} data={data} />,
	result: (type, data) => <ResultForm type={type} data={data} />,
	lesson: (type, data) => <LessonForm type={type} data={data} />,
	exam: (type, data) => <ExamForm type={type} data={data} />,
	event: (type, data) => <EventForm type={type} data={data} />,
	class: (type, data) => <ClassForm type={type} data={data} />,
	assignment: (type, data) => <AssignmentForm type={type} data={data} />,
	announcement: (type, data) => <AnnouncementForm type={type} data={data} />,
};

function FormModal({
	table,
	requestType,
	data,
	id,
}: {
	table:
		| "teacher"
		| "student"
		| "parent"
		| "subject"
		| "class"
		| "lesson"
		| "exam"
		| "assignment"
		| "result"
		| "attendance"
		| "event"
		| "announcement";
	requestType: "create" | "update" | "delete";
	data?: any;
	id?: number;
}) {
	const size = requestType === "create" ? "w-8 h-8" : "w-7 h-7";
	const bgColor =
		requestType === "create"
			? "bg-dashYellow"
			: requestType === "update"
			? "bg-dashSky"
			: "bg-dashPurple";

	const [open, setOpen] = useState(false);

	const Form = () => {
		return requestType === "delete" && id ? (
			<form action="" className="flex flex-col p-4 gap-4">
				<span className="text-center font-medium">
					All data will be lost. Are you sure you want to delete this{" "}
					{table}?
				</span>
				<button className="bg-red-600 text-white py-2 px-4 rounded-md border-none w-max self-center">
					Delete
				</button>
			</form>
		) : requestType === "create" || requestType === "update" ? (
			forms[table](requestType, data)
		) : (
			"Form not found!"
		);
	};

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className={`flex items-center justify-center rounded-full ${size} ${bgColor}`}>
				<Image
					src={`/${requestType}.png`}
					alt=""
					width={16}
					height={16}
				/>
			</button>
			{open && (
				<div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-40 flex items-center justify-center">
					<div className="relative bg-white p-4 rounded-md z-50 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
						{/* MODAL CLOSE BUTTON*/}
						<div
							className="absolute top-4 right-4 cursor-pointer"
							onClick={() => setOpen(false)}>
							<Image
								src="/close.png"
								alt=""
								width={14}
								height={14}
							/>
						</div>
						{/* MODAL BODY*/}
						<div className="">
							<Form />
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default FormModal;

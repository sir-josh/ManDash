"use client";

import Image from "next/image";
import React, { useState } from "react";
import TeacherForm from "./forms/TeacherForm";

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
		) : requestType === "create" ? (
			<TeacherForm type="create" />
		) : (
			<TeacherForm type="update" data={data} />
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

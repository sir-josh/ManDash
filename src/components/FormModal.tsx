"use client";

import Image from "next/image";
import React from "react";

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

	return (
		<>
			<button
				className={`flex items-center justify-center rounded-full ${size} ${bgColor}`}>
                    <Image src={`/${requestType}.png`} alt="" width={16} height={16} />
                </button>
		</>
	);
}

export default FormModal;

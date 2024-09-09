"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
	username: z
		.string()
		.min(3, { message: "Username must be at least 3 characters long!" })
		.max(20, { message: "Username must be at most 20 characters long!" }),
	email: z.string().email({ message: "Invalid email address!" }),
	password: z.string().min(8, {
		message: "Your password must be at least 8 characters long!",
	}),
	firstName: z.string().min(1, { message: "First name is required!" }),
	lastName: z.string().min(1, { message: "Last name is required!" }),
	phone: z.string().min(1, { message: "Phoneis required!" }),
	address: z.string().min(1, { message: "Address is required!" }),
	bloodType: z.string().min(1, { message: "Blood type is required!" }),
	birthday: z.date({ message: "First name is required!" }),
	sex: z.enum(["male", "female"], { message: "Sex is required!" }),
	img: z.instanceof(File, { message: "Teacher's image is required!" }),
});

type Inputs = z.infer<typeof schema>;

function ParentForm({
	type,
	data,
}: {
	type: "create" | "update";
	data?: any;
}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ resolver: zodResolver(schema) });

	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});

	return (
		<form className="flex flex-col gap-8 pb-4" onSubmit={onSubmit}>
			<h1 className="text-xl font-semibold">Create a new parent</h1>
			<span className="text-xs text-gray-400 font-medium px-3 md:px-6">
				Authentication Information
			</span>

			<div className="flex justify-between flex-wrap gap-4 px-3 md:px-6">
				<InputField
					label="Username"
					name="username"
					defaultValue={data?.username}
					register={register}
					error={errors?.username}
				/>
				<InputField
					label="Email"
					name="email"
					inputType="email"
					defaultValue={data?.email}
					register={register}
					error={errors?.email}
				/>
				<InputField
					label="Password"
					name="password"
					inputType="password"
					defaultValue={data?.password}
					register={register}
					error={errors?.password}
				/>
			</div>

			<span className="text-xs text-gray-400 font-medium px-3 md:px-6">
				Authentication Information
			</span>
			<div className="flex justify-between flex-wrap gap-4 px-3 md:px-6">
				<InputField
					label="FirstName"
					name="firstName"
					defaultValue={data?.firstName}
					register={register}
					error={errors?.firstName}
				/>
				<InputField
					label="Last Name"
					name="lastName"
					defaultValue={data?.lastName}
					register={register}
					error={errors?.lastName}
				/>

				<InputField
					label="Phone"
					name="phone"
					defaultValue={data?.phone}
					register={register}
					error={errors?.phone}
				/>
				<InputField
					label="Address"
					name="address"
					defaultValue={data?.address}
					register={register}
					error={errors?.address}
				/>
				<InputField
					label="Blood Type"
					name="bloodType"
					defaultValue={data?.bloodType}
					register={register}
					error={errors?.bloodType}
				/>
				<InputField
					label="Birthday"
					name="birthday"
					inputType="date"
					defaultValue={data?.birthday}
					register={register}
					error={errors?.birthday}
				/>
				<div className="flex flex-col gap-2 w-full md:w-1/4">
					<label className="text-xs text-gray-400">Sex</label>
					<select
						className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
						{...register("sex")}
						defaultValue={data?.sex}>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
					{errors.sex?.message && (
						<p className="text-xs text-red-300 ">
							{errors.sex.message.toString()}
						</p>
					)}
				</div>
				<div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
					<label
						htmlFor="img"
						className="text-xs text-gray-400 flex items-center gap-2 cursor-pointer">
						<Image
							src="/upload.png"
							alt=""
							width={28}
							height={28}
						/>
						<span>Upload a photo</span>
					</label>
					<input
						type="file"
						id="img"
						{...register("img")}
						className="hidden"
					/>
					{errors.img?.message && (
						<p className="text-xs text-red-300 ">
							{errors.img.message.toString()}
						</p>
					)}
				</div>
			</div>

			<button className="bg-blue-400 text-white p-2 rounded-md mx-6">
				{type === "create" ? "Create" : "Update"}
			</button>
		</form>
	);
}

export default ParentForm;

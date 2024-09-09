import { FieldError } from "react-hook-form";

type InputFieldProps = {
	label: string;
	inputType?: string;
	register: any;
	name: string;
	defaultValue?: string;
	error?: FieldError;
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

function InputField({
	label,
	inputType = "text",
	register,
	name,
	defaultValue,
	error,
	inputProps,
}: InputFieldProps) {
	return (
		<div className="flex flex-col gap-2 w-full md:w-[30%]">
			<label className="text-xs text-gray-400">{label}</label>
			<input
				type={inputType}
				{...register(name)}
				className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
				{...inputProps}
				defaultValue={defaultValue}
			/>
			{error?.message && (
				<p className="text-xs text-red-300 ">
					{error.message.toString()}
				</p>
			)}
		</div>
	);
}

export default InputField;

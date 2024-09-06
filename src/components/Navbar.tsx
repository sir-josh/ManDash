import Image from "next/image";

export default function Navbar() {
	return (
		<div className="flex items-center justify-between p-4">
			{/* SEARCH BAR */}
			<div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 py-1">
				<Image src="/search.png" alt="" width={14} height={14} />
				<input
					type="text"
					placeholder="Search..."
					className="w-[200px] bg-transparent outline-none"
				/>
			</div>

			{/* ICONS AND USERS*/}
			<div className="flex items-center gap-6 justify-end w-full">
				<div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
					<Image src="/message.png" alt="" width={20} height={20} />
				</div>
				<div className="bg-white rounded-full w-7 h-7 relative flex items-center justify-center cursor-pointer">
					<Image
						src="/announcement.png"
						alt=""
						width={20}
						height={20}
					/>
					<div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm">
						1
					</div>
				</div>
				<div className="flex flex-col">
					<span className="text-sm leading-3 font-medium">
						Micheal Dean
					</span>
					<span className="text-[10px] text-gray-500 text-right">
						Admin
					</span>
				</div>
				<Image
					src="/avatar.png"
					alt=""
					className="rounded-full"
					width={36}
					height={36}
				/>
			</div>
		</div>
	);
}

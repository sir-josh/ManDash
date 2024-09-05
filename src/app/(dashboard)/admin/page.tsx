import UserCard from "@/components/UserCard";

function AdminPage() {
	return (
		<div className="p-4 flex gap-4 flex-col md:flex-row ">
			{/* LEFT */}
			<div className="w-full lg:w-2/3">
				{/* USER CARD */}
				<div className="flex flex-wrap gap-4 justify-between">
					<UserCard type="student" />
					<UserCard type="teacher" />
					<UserCard type="parent" />
					<UserCard type="staff" />
				</div>
			</div>

			{/* RIGHT */}
			<div className="w-full lg:w-1/3">right side</div>
		</div>
	);
}

export default AdminPage;

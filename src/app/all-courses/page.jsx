import React from "react";
import Cards from "../../components/Cards";

export default function AllCoursesPage() {
	return (
		<div className="h-1/2 flex flex-col">
			{/* All Courses Section */}
			<div className="flex-1 flex flex-col">
				<h1 className="font-mono font-bold text-3xl pl-20 p-3.5 m-3.5">
					All Courses
				</h1>
				<Cards />
			</div>

			{/* Recent Courses Section */}
			<div className="flex-1 flex flex-col">
				<h1 className="font-mono font-bold text-3xl pl-20 p-4 m-4">
					Recent Courses
				</h1>
				<Cards />
			</div>
		</div>
	);
}

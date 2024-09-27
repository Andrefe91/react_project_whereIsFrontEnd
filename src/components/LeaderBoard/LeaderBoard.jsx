//Modules
import { React, Suspense } from "react";
import { useLoaderData } from "react-router-dom";
//Scripts
import fetchData from "../../scripts/getData";

export async function loader() {
	const leaderBoardData = await fetchData(
		"https://rails-project-whereisbackendtwo.fly.dev/passed",
	);
	return { leaderBoardData };
}

function Loading() {
	return <div> 🌀 Loading...</div>;
}

export default function LeaderBoard() {
	// Fetching leaderboard data from backend
	const { leaderBoardData } = useLoaderData();
	return (
		<>
			<Suspense fallback={<Loading />}>
				<div
					className="d-flex flex-column justify-content-center m-5"
					style={{ width: "calc(min(90vw, 40rem))" }}
				>
					<table className="table fs-3 table-striped table-hover table-bordered table-fixed border-primary border-3 shadow">
						<thead className="table-primary text-center">
							<tr>
								<th scope="col">#</th>
								<th scope="col">Name</th>
								<th scope="col">Time (seg)</th>
								<th scope="col">Difficulty</th>
								<th scope="col">Date</th>
							</tr>
						</thead>
						<tbody className="table-group-divider">
							{leaderBoardData.map((object, index) => (
								<tr className="" key={object.identifier}>
									<td scope="row">{index + 1}</td>
									<td>{object.name}</td>
									<td>{object.time}</td>
									<td>{object.difficulty}</td>
									<td>{object.created_at.slice(0, 10)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Suspense>
		</>
	);
}

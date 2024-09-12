//Modules
import React from "react";

export default function LeaderBoard() {
	return (
		<>
			<div
				className="d-flex flex-column justify-content-center"
				style={{ width: "calc(min(90vw, 40rem))" }}
			>
				<table className="table fs-3 table-striped table-hover table-bordered table-fixed border-primary border-3 shadow">
					<thead className="table-primary text-center">
						<tr >
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Time</th>
							<th scope="col">Date</th>
						</tr>
					</thead>
					<tbody className="table-group-divider">
						<tr className="">
							<td scope="row">1</td>
							<td>Item</td>
							<td>Item</td>
							<td>Item</td>
						</tr>
						<tr className="">
							<td scope="row">2</td>
							<td>Item</td>
							<td>Item</td>
							<td>Item</td>
						</tr>
						<tr className="">
							<td scope="row">3</td>
							<td>Item</td>
							<td>Item</td>
							<td>Item</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}

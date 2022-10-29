import React from "react";
import InsideMenu from "./InsideMenu";

export default function Menu() {
	return (
		<div>
			<div className="Menu">
				<div
					className="card row-1"
					style={{ width: "18rem" }}>
					<img
						src="#"
						className="card-img-top"
						alt="Food Image"
					/>
					<div className="card-body">
						<h5 className="card-title">Food Name</h5>
						<p className="card-text">Description</p>
						<a
							href="#"
							className="btn btn-primary">
							Hello world
						</a>
					</div>
				</div>
			</div>
			<div className="SeeThisMenu">
				<button
					type="button"
					className="btn btn-primary mt-3"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal">
					See This Menu
				</button>

				<div
					className="modal fade"
					id="exampleModal"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true">
					<div className="modal-dialog modal-xl">
						<div className="modal-content">
							<div className="modal-header">
								<h1
									className="modal-title fs-5"
									id="exampleModalLabel">
									Food Name
								</h1>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<div className="input-group mb-10">
									<label
										className="input-group-text"
										htmlFor="inputGroupFile01">
										Image :
									</label>
								</div>
								<div className="mb-3">
									<label
										htmlFor="inputfood"
										className="form-label form-label-m">
										Food Name :
									</label>
								</div>
								<div className="mb-3">
									<label
										for="Description"
										className="form-label">
										Description :
									</label>
								</div>
								<div className="mb-3">
									<label
										for="Ingredient"
										className="form-label">
										Ingredient :
									</label>
								</div>
								<div className="mb-3">
									<label
										for="Likes"
										className="form-label">
										Likes :
									</label>
								</div>
								<div className="mb-3">
									<label
										for="Rating"
										className="form-label">
										Rating:
									</label>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-primary">
								Add Menu
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

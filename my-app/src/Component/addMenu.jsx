export default function AddMenu() {
	return (
   	<div className = 'AddMenu'>
				<button
					type="button"
					className="btn btn-primary mt-3"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal">
					Add Menu
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
									Add new Menu
								</h1>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<div className="mb-3">
									<label
										htmlFor="inputfood"
										className="form-label form-label-m">
										Food Name
									</label>
									<input
										type="text"
										className="form-control"
										id="inputfood"
										placeholder="nasi goreng"
									/>
								</div>
								<div className="mb-3">
									<label
										for="Description"
										className="form-label">
										Description
									</label>
									<textarea
										className="form-control"
										id="Description"
										rows="3"></textarea>
								</div>
								<div className="mb-3">
									<label
										for="Ingredient"
										className="form-label">
										Ingredient
									</label>
									<textarea
										className="form-control"
										id="Ingredient"
										rows="3"></textarea>
								</div>
								<div className="input-group mb-10">
									<label
										className="input-group-text"
										htmlFor="inputGroupFile01">
										Upload Image
									</label>
									<input
										type="file"
										className="form-control"
										id="inputGroupFile01"
									/>
									or
									<div className="input-group mb-3">
									<label
										htmlFor="basic-url"
										className="form-label">
										Upload with URL
									</label>
										<span
											className="input-group-text"
											id="basic-addon3">
											https://example.com/users/
										</span>
										<input
											type="text"
											className="form-control"
											id="basic-url"
											aria-describedby="basic-addon3"
										/>
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

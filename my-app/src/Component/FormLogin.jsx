import React from "react";

export default function FormLogin() {
	return (
		<div>
			<form
				className="row g-3 needs-validation"
				noValidate>
				<div className="form-floating mb-3">
					<input
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="name@example.com"
					/>
					<label htmlFor="floatingInput">Email address</label>
				</div>
				<div className="form-floating">
					<input
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Password"
					/>
					<label htmlFor="floatingPassword">Password</label>
				</div>
				
				{/* Submit Form Register */}
				<div className="col-12">
					<button
						className="btn btn-primary"
						type="submit">
						Register
					</button>
				</div>
			</form>
		</div>
	);
}

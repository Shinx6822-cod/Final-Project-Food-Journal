import React from "react";
import FormLogin from './FormLogin';

export default function NavbarAft() {
	return (
		<div className="app">
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<a
						className="navbar-brand"
						href="#">
						Food Journal
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse" 
						id="navbarSupportedContent">
						<form
							className="d-flex"
							role="search">
							<input
								className="form-control me-2" style={{width:'400px', marginLeft:'300px'}}
								type="search"
								placeholder="Search"
								aria-label="Food Name"
							/>
							<button
								className="btn btn-outline-success"
								type="submit">
								Search
							</button>
						</form>
						<ul className="navbar-nav me-2 mb-2 mb-lg-0" >
							<li className="nav-item">
								<a
									className="nav-link active" style={{width:'100px', marginLeft:'500px'}}
									aria-current="page"
									href="#">
									Main Menu
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link active" style={{width:'75px', marginLeft:'5px'}}
									aria-current="page"
									href='MyList.js'>
									My List
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href='#'>
									Profile
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

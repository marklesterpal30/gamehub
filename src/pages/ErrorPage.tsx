import React from "react";
import Navbar from "../components/Navbar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div>
			<Navbar />
			<h1>
				{isRouteErrorResponse(error) ? "invalid page" : "unexpected error"}
			</h1>
		</div>
	);
};

export default ErrorPage;

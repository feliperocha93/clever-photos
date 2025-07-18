import { Link } from "react-router-dom";

import Header from "@/components/ui/header";
import FormRegister from "./form-register";

export default function Register() {
	return (
		<div className="min-h-screen">
			<div className="flex flex-col gap-10 py-9 max-w-[320px] mx-auto px-2">
				<Header title="Create an account" />
				<FormRegister />
				<Link
					to="/login"
					className="text-md text-center text-primary hover:underline"
				>
					Already have an account? Sign in
				</Link>
			</div>
		</div>
	);
}

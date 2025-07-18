import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/useLogin";
import { type LoginSchema, loginSchema } from "@/schemas/auth";

import LabeledInput from "../../components/ui/labeled-input";

export default function FormLogin() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

	const { mutate, isPending, loginError } = useLogin();

	const onSubmit: SubmitHandler<LoginSchema> = (data) => mutate(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
			<LabeledInput
				id="username"
				label="Username"
				placeholder="testing"
				type="text"
				error={errors.username?.message}
				{...register("username")}
			/>
			<LabeledInput
				id="password"
				label="Password"
				placeholder="********"
				type="password"
				link={{
					href: "/",
					anchor: "Forgot password?",
				}}
				error={errors.password?.message}
				{...register("password")}
			/>

			<div className="grid gap-3">
				<Button type="submit" size="lg" disabled={isPending}>
					Sign in
				</Button>
				{loginError && (
					<span className="text-xs text-red-500">{loginError}</span>
				)}
			</div>
		</form>
	);
}

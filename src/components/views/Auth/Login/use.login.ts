import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "@/types/Auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

// Validation Schema
const loginSchema = yup.object().shape({
  identifier: yup.string().required("Please input your email or username"),
  password: yup.string().required("Please input your password"),
});

// Custom Hook
  const useLogin = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false); // Password visibility
  const toggleVisibility = () => setIsVisible(!isVisible); // Toggle password visibility

  const callbackUrl: string = (router.query.callbackUrl as string) || "/";

  // Form Hook
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // Login Service to handle login request
  const loginService = async (payload: ILogin) => {
    const result = await signIn("credentials", {
      ...payload,
      redirect: false, // prevent redirect after login
      callbackUrl, // redirect to the callbackUrl after login
    });
    if (result?.error && result?.status === 401) {
      throw new Error("Login failed");
    }
  };

  // Mutation Hook
  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: loginService, // login service
    onError(error) {
      setError("root", {
        message: error.message,
      });
    },
    onSuccess: () => {
      router.push(callbackUrl); // redirect to the callbackUrl after login
      reset();
    },
  });

  // Handle Login
  const handleLogin = (data: ILogin) => mutateLogin(data);

  return {
    isVisible,
    toggleVisibility,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  };
};

export default useLogin;

import axios from "axios";
import { ILogin } from "../screens/Login";
import { RegisterUserData } from "../screens/RegisterUser";

interface Response {
  data: any;
  token: string;
  user: {
    name: string;
    email: string;
  };
}

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export async function signIn(data: ILogin): Promise<Response> {
  if (!apiUrl) {
    throw new Error(
      "API URL is not defined. Please check your environment variables."
    );
  }

  try {
    const response = await axios.post(`${apiUrl}/api/auth/login`, data);
    return response.data;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error;
  }
}

export async function registerUser(data: RegisterUserData) {
  if (!apiUrl) {
    throw new Error(
      "API URL is not defined. Please check your environment variables."
    );
  }

  try {
    const response = await axios.post(`${apiUrl}/api/users`, data);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
}

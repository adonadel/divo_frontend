import axios from "axios";
import { ILogin } from "../screens/Login";

interface Response {
  data: any;
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export async function signIn(data: ILogin): Promise<Response> {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

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
    throw error; // Re-throw the error after logging it
  }
}

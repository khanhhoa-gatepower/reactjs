import { sendPost } from "./api.client";

export const login = (payload: any) => sendPost("/auth/email/login", payload);
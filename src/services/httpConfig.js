const API_KEY = "AIzaSyAIVFq4TvN8j8anhgdPveJ_Y-bTdPiNDms";
export const baseURL = "";
export const signupURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
export const loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
export const passwordUpdateURL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`;
export { default as instance } from "axios";

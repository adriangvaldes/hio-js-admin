import { cookies } from "next/headers";
import { LoginClientSide } from "./loginClientSide";
import { getCookie } from "../actions/cookies";

export default async function Login() {
  const formVisibleCookie = (await getCookie("formVisible")) === "true";

  return <LoginClientSide formVisible={formVisibleCookie} />;
}

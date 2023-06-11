import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../helpers/firebase";
import { useRouter } from "next/router";
import { storeLocally } from "../helpers/helpers";
import LoadingBtn from "../components/assets/LoadingButton";
import Button from "../components/assets/Button";
import Link from "next/link";

const LoginScreen = () => {
  const { register, handleSubmit } = useForm();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const route = useRouter();

  const loginFn = async (data) => {
    setLoading(true);
    const { email, password } = data;

    let loginRes = await login({ email, password });
    console.log(loginRes);

    if (!loginRes) {
      setLoginSuccess("Wrong Username or Password");
      setLoading(false);
    } else if (loginRes == "not verified") {
      route.push("/signupsuccess");
      setLoading(false);
    } else {
      setLoginSuccess(loginRes);
      storeLocally("user", loginRes);
      setLoading(false);
      route.push("/");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="mt-4 bg-white px-6 sm:px-8 py-6 text-left shadow-lg mx-5 rounded-md">
          <h3 className="text-center text-2xl font-bold">Sign in</h3>
          <form onSubmit={handleSubmit(loginFn)}>
            <div className="mt-4">
              <div>
                <label className="block font-medium" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder={"E-mail"}
                  {...register("email")}
                  name="email"
                  id="email"
                  required
                  className="mt-2 w-full rounded-md border px-2 sm:px-4 py-2 focus:outline-none focus:ring-1 focus:ring-moni-orange"
                />
                <span className="text-xs tracking-wide text-red-600">
                  {loginSuccess === "Wrong Username or Password" &&
                    "Wrong Username or Password"}
                </span>
              </div>
              <div className="mt-4">
                <label className="block font-medium">Password</label>
                <input
                  type="password"
                  placeholder={"Password"}
                  {...register("password")}
                  name="password"
                  id="password"
                  required
                  className="mt-2 w-full rounded-md border px-2 sm:px-4 py-2 focus:outline-none focus:ring-1 focus:ring-moni-orange"
                />
              </div>

              <div>
                {loading ? (
                  <LoadingBtn otherStyles={"w-full mt-3"} />
                ) : (
                  <Button otherStyles={"w-full mt-3"}>Sign in</Button>
                )}
              </div>
              <div className="flex text-sm items-baseline justify-between">
                <div>
                  <Link href={"/signup"}>Sign up</Link>
                </div>
                <a
                  href="#"
                  className="mt-2 text-sm text-moni-orange hover:underline"
                >
                  Forgot Pasword
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

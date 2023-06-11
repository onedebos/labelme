import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../helpers/firebase";
import { useRouter } from "next/router";
import { storeLocally } from "../helpers/helpers";
import LoadingBtn from "../components/assets/LoadingButton";
import Button from "../components/assets/Button";
import Link from "next/link";

const SignUpScreen = () => {
  const { register, handleSubmit } = useForm();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const route = useRouter();

  const validatePassword = (data) => {
    const { password, reenterPassword } = data;

    if (password != reenterPassword) {
      return "no match";
    } else return "match";
  };

  const signUpFn = async (data) => {
    // validate password
    const pwdMatch = validatePassword(data);

    if (pwdMatch == "no match") {
      setPasswordError("passwords do not match");
      return;
    }

    // start loading
    setLoading(true);
    setPasswordError("");
    const { email, password, name, brandName, phoneNo } = data;

    // register user
    let loginRes = await registerUser({
      email,
      password,
      displayName: name,
      brandName,
      phoneNo,
    });

    console.log(loginRes);

    if (loginRes == "success") {
      route.push("/signupsuccess");
      setLoading(false);
    } else {
      setLoginSuccess(loginRes);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-10">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="mt-4 bg-white px-6 sm:px-8 py-6 text-left shadow-lg mx-5 rounded-md">
          <h3 className="text-center text-2xl font-bold">Sign Up</h3>
          <form onSubmit={handleSubmit(signUpFn)}>
            <div className="mt-4">
              <div className="mb-4">
                <label className="block font-semibold" htmlFor="email">
                  Name
                </label>
                <input
                  type="name"
                  placeholder={"Full Name"}
                  {...register("name")}
                  name="name"
                  id="name"
                  required
                  className="mt-2 w-full rounded-md border px-2 sm:px-4 py-2 focus:outline-none focus:ring-1 focus:ring-moni-orange"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold" htmlFor="email">
                  Brand Name
                </label>
                <input
                  type="brandName"
                  placeholder={"Your Brand Name"}
                  {...register("brandName")}
                  name="brandName"
                  id="brandName"
                  required
                  className="mt-2 w-full rounded-md border px-2 sm:px-4 py-2 focus:outline-none focus:ring-1 focus:ring-moni-orange"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold" htmlFor="email">
                  Phone No.
                </label>
                <input
                  type="phoneNo"
                  placeholder={"Your Phone No.(WhatsApp)"}
                  {...register("phoneNo")}
                  name="phoneNo"
                  id="phoneNo"
                  required
                  className="mt-2 w-full rounded-md border px-2 sm:px-4 py-2 focus:outline-none focus:ring-1 focus:ring-moni-orange"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold" htmlFor="email">
                  Your E-mail
                </label>
                <input
                  type="email"
                  placeholder={"Your Phone No.(WhatsApp)"}
                  {...register("email")}
                  name="email"
                  id="email"
                  required
                  className="mt-2 w-full rounded-md border px-2 sm:px-4 py-2 focus:outline-none focus:ring-1 focus:ring-moni-orange"
                />
              </div>

              <div className="mt-4">
                <label className="block font-semibold">Password</label>
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

              <div className="mt-4">
                <label className="block font-semibold">Re-enter Password</label>
                <input
                  type="password"
                  placeholder={"Re-enter Password"}
                  {...register("reenterPassword")}
                  name="reenterPassword"
                  id="reenterPassword"
                  required
                  className="mt-2 w-full rounded-md border px-2 sm:px-4 py-2 focus:outline-none focus:ring-1 focus:ring-moni-orange"
                />
                {passwordError && (
                  <small className="text-red-600">Passwords do not match</small>
                )}
              </div>

              <div className="mb-4">
                {loading ? (
                  <LoadingBtn otherStyles={"w-full mt-3"} />
                ) : (
                  <>
                    <Button otherStyles={"w-full mt-3"}>Sign Up</Button>
                    {loginSuccess && (
                      <small className="text-red-600">{loginSuccess}</small>
                    )}
                  </>
                )}
              </div>
              <div className="flex items-center justify-center">
                <div>
                  I have a LabelMe account.{" "}
                  <Link href={"/signin"} className="text-labelme-wine">
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;

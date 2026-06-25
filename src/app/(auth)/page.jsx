import ButtonComponent from "../ui/components/Buttons";
import InputComponent from "../ui/components/Inputs";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className=" min-h-dvh flex items-center justify-center text-sm p-5">
      <div className="flex flex-col gap-6 w-full max-w-md">
        {/* header */}
        <div className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold">
            Welcome to <span className="text-green-700">Spenderly</span>
          </h1>
          <p className="text-gray-500 font-semibold text-base">
            Save.Track.Manage
          </p>
        </div>
        {/* main */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Username</label>

            <InputComponent type="text" placeholder="Enter your username" />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="">Password</label>
              <Link href="/forgot-password" className="text-green-700">
                Forgot password?
              </Link>
            </div>

            <InputComponent type="password" placeholder="Enter your password" />
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-col gap-3">
          <ButtonComponent type="submit">Sign in</ButtonComponent>

          <div className="flex items-center justify-center">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/create-account"
                className="text-green-700 hover:underline"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

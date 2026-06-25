import ButtonComponent from "../../ui/components/Buttons";
import InputComponent from "../../ui/components/Inputs";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <div className=" min-h-dvh flex items-center justify-center text-sm p-5">
      <div className="flex flex-col gap-6 w-full max-w-md ">
        {/* header */}
        <div className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold">
            Reset <span className="text-green-700">Password</span>
          </h1>
          <p className="text-gray-500">
            Create a new password for your account. Make sure it's strong and
            secure.
          </p>
        </div>

        {/* main */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Password</label>

            <InputComponent type="password" placeholder="Enter your password" />

            {/* password metrics */}
            <div className="flex flex-col gap-2 text-xs text-gray-500 bg-gray-100 p-3 rounded-xl mt-1">
              <span>• At least 8 characters</span>
              <span>• Include a number</span>
              <span>• Include a special character</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Confirm password</label>

            <InputComponent
              type="password"
              placeholder="Re-enter your password"
            />
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-col gap-2">
          <ButtonComponent type="submit">Reset password</ButtonComponent>

          <Link
            href="/"
            className="flex w-full items-center justify-center rounded-xl py-3 px-5 bg-gray-100 hover:bg-gray-200 transition-colors duration-150 cursor-pointer "
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}

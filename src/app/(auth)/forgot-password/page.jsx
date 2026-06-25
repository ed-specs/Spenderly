import ButtonComponent from "../../ui/components/Buttons";
import InputComponent from "../../ui/components/Inputs";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className=" min-h-dvh flex items-center justify-center text-sm p-5">
      <div className="flex flex-col gap-6 w-full max-w-md">
        {/* header */}
        <div className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold">
            Forgot <span className="text-green-700">Password</span>
          </h1>
          <p className="text-gray-500">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>

        {/* main */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Email</label>

            <InputComponent type="email" placeholder="Enter your email" />
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-col gap-2">
          <ButtonComponent type="submit">Send reset link</ButtonComponent>

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

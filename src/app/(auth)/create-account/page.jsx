"use client";

import ButtonComponent from "@/app/ui/components/Buttons";
import InputComponent from "@/app/ui/components/Inputs";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className=" min-h-dvh flex items-center justify-center text-sm p-5">
      <div className="flex flex-col gap-6 w-full">
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
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="">First name</label>

              <InputComponent type="text" placeholder="John" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Last name</label>

              <InputComponent type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Username</label>

            <InputComponent type="text" placeholder="john_doe" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Email</label>

            <InputComponent type="text" placeholder="john.doe@example.com" />
          </div>

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
        <div className="flex flex-col gap-3">
          <ButtonComponent type="submit">Create account</ButtonComponent>

          <div className="flex items-center justify-center">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link href="/" className="text-green-700 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

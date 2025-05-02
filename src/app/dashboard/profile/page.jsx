'use client'
import UseAuth from "@/app/ContextApi/UseAuth";
import Image from "next/image";
import Link from "next/link";
import bg from '../../../../public/images/recipe-tiramisu.jpg'

export default function Profile() {
  const { user } = UseAuth();



  return (
    <div className="h-[500px] text-center text-white  min-h-screen">
      {/* Cover Section */}
      <div className="relative">
        <Image
          src={bg}
          alt="Cover Background"
          className="w-full h-[200px] object-cover"
        />
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
          <Image
            src=''
            alt=''
            // src={user.photoURL}
            // alt={user.displayName || "User"}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Profile Card */}
      <div className="flex justify-center pt-36">
        <div className="bg-white shadow-lg border  rounded-lg p-6 w-80 text-center">
          <h2 className="text-xl font-semibold text-gray-800"></h2>
          <p className="text-gray-600 mt-2">Email:</p>

          <p className="text-sm text-gray-500 mt-4">
            Welcome to your profile! Here, you can manage your account...
          </p>

          <Link
            href="/dashboard/update-profile"
            className="btn text-white bg-[#BA0120] mt-4 w-full rounded-md "
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

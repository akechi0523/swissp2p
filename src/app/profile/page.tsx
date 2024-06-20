"use client"

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Avatar from "@/components/Profile/Avatar";
import ProfileInfo from "@/components/Profile/ProfileInfo";


export default function Profile() {

  return (
    <>
      <DefaultLayout>
        <div className="md:pr-16">
          <div className="font-medium text-xl text-primary dark:text-white mb-5">Profile</div>
          <Avatar />
          <div className="flex items-center gap-5 mb-5">
            <button className="text-xl font-medium text-primary dark:text-white">KYC</button>
            <button className="text-xl font-medium text-primary dark:text-white">Verify</button>
            <button className="text-xl font-medium text-primary dark:text-white">Verify</button>
            <button className="text-xl font-medium text-primary dark:text-white">Verify</button>
          </div>
          <ProfileInfo />
        </div>
      </DefaultLayout>
    </>
  );
}
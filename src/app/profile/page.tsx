"use client"

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Avatar from "@/components/Profile/Avatar";
import ProfileInfo from "@/components/Profile/ProfileInfo";


export default function Profile() {

  return (
    <>
      <DefaultLayout>
        <div className="pr-16">
          <div className="font-medium text-xl text-primary mb-5">Profile</div>
          <Avatar />
          <ProfileInfo />
        </div>
      </DefaultLayout>
    </>
  );
}
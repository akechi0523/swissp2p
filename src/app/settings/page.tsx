import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import TwoFactorAuth from "@/components/Settings/TwoFactorAuth";
import AccountManagement from "@/components/Settings/AccountManagement";


export default function Settings() {

  return (
    <>
      <DefaultLayout>
        <div className="pr-16">
          <div className="font-medium text-xl text-primary dark:text-white mb-5">Settings</div>
          <ProfileInfo />
          <div className="flex gap-12 mt-8">
            <div className="flex w-1/2 flex-col gap-8">
              <TwoFactorAuth />
            </div>
            <div className="flex w-1/2 flex-col gap-8">
              <AccountManagement />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
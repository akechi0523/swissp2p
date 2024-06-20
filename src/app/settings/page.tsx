import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import TwoFactorAuth from "@/components/Settings/TwoFactorAuth";
import AccountManagement from "@/components/Settings/AccountManagement";


export default function Settings() {

  return (
    <>
      <DefaultLayout>
        <div className="md:pr-16">
          <div className="font-medium text-xl text-primary dark:text-white mb-5">Settings</div>
          <ProfileInfo />
          <div className="flex flex-wrap md:flex-nowrap md:gap-12 gap-6 mt-8">
            <div className="flex md:w-1/2 w-full flex-col">
              <TwoFactorAuth />
            </div>
            <div className="flex md:w-1/2 w-full flex-col">
              <AccountManagement />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
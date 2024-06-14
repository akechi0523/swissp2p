const AccountManagement = () => {

	return (
		<div className="bg-white rounded-3xl px-8 py-6">
			<div className="font-medium text-xl text-primary dark:text-white mb-3">Two Factor Authentication</div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-10">
          <div>
            <div className="text-base font-medium text-[#FF3032] mb-1">Disable Account</div>
            <div className="text-sm font-normal text-secondary">Once the account is disabled, most of your actions will be restricted, such as logging in and trading. You can choose to unlock the account at any time.</div>
          </div>
          <button className="bg-third text-base text-secondary rounded-full px-4 py-3">Disabled</button>
        </div>
        <div className="flex items-center justify-between gap-10">
          <div>
            <div className="text-base font-medium text-[#FF3032] mb-1">Delete Account</div>
            <div className="text-sm font-normal text-secondary">Please note that account deletion is irreversible. Once deleted, you will not be able to access your account or view your transaction history.</div>
          </div>
          <button className="bg-third text-base text-secondary rounded-full px-4 py-3">Disabled</button>
        </div>
      </div>
		</div>
	);
	
}

export default AccountManagement;
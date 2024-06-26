const TwoFactorAuth = () => {

	return (
		<div className="bg-white dark:bg-primary rounded-3xl md:px-8 px-4 md:py-6 py-4">
			<div className="font-medium text-xl text-primary dark:text-white mb-3">Two Factor Authentication</div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between md:gap-10 gap-4">
          <div>
            <div className="text-base font-medium text-primary dark:text-white mb-1">Passkeys</div>
            <div className="text-sm font-normal text-secondary">Protect your account and withdrawals with Passkeys and/or security keys, such as Yubikey.</div>
          </div>
          <button className="bg-primary text-base text-white dark:bg-bodydark rounded-full px-4 py-3">Manage</button>
        </div>
        <div className="flex items-center justify-between md:gap-10 gap-4">
          <div>
            <div className="text-base font-medium text-primary dark:text-white mb-1">Authenticator App</div>
            <div className="text-sm font-normal text-secondary">Use Google Authenticator to protect your account and transactions.</div>
          </div>
          <button className="bg-primary text-base text-white dark:bg-bodydark rounded-full px-4 py-3">Manage</button>
        </div>
        <div className="flex items-center justify-between md:gap-10 gap-4">
          <div>
            <div className="text-base font-medium text-primary dark:text-white mb-1">Email</div>
            <div className="text-sm font-normal text-secondary">Use your email to protect your account and transactions.</div>
          </div>
          <button className="bg-primary text-base text-white dark:bg-bodydark rounded-full px-4 py-3">Manage</button>
        </div>
        <div className="flex items-center justify-between md:gap-10 gap-4">
          <div>
            <div className="text-base font-medium text-primary dark:text-white mb-1">Phone Number</div>
            <div className="text-sm font-normal text-secondary">Use your phone number to protect your account and transactions.</div>
          </div>
          <button className="bg-primary text-base text-white dark:bg-bodydark rounded-full px-4 py-3">Manage</button>
        </div>
      </div>
		</div>
	);
	
}

export default TwoFactorAuth;
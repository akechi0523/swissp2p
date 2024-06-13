const TwoFactorAuth = () => {

	return (
		<div className="bg-white rounded-3xl px-8 py-6">
			<div className="font-medium text-xl text-primary mb-3">Two Factor Authentication</div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-10">
          <div>
            <div className="text-base font-medium text-primary mb-1">Passkeys</div>
            <div className="text-sm font-normal text-secondary">Protect your account and withdrawals with Passkeys and/or security keys, such as Yubikey.</div>
          </div>
          <button className="bg-primary text-base text-white rounded-full px-4 py-3">Manage</button>
        </div>
        <div className="flex items-center justify-between gap-10">
          <div>
            <div className="text-base font-medium text-primary mb-1">Authenticator App</div>
            <div className="text-sm font-normal text-secondary">Use Google Authenticator to protect your account and transactions.</div>
          </div>
          <button className="bg-primary text-base text-white rounded-full px-4 py-3">Manage</button>
        </div>
        <div className="flex items-center justify-between gap-10">
          <div>
            <div className="text-base font-medium text-primary mb-1">Email</div>
            <div className="text-sm font-normal text-secondary">Use your email to protect your account and transactions.</div>
          </div>
          <button className="bg-primary text-base text-white rounded-full px-4 py-3">Manage</button>
        </div>
        <div className="flex items-center justify-between gap-10">
          <div>
            <div className="text-base font-medium text-primary mb-1">Phone Number</div>
            <div className="text-sm font-normal text-secondary">Use your phone number to protect your account and transactions.</div>
          </div>
          <button className="bg-primary text-base text-white rounded-full px-4 py-3">Manage</button>
        </div>
      </div>
		</div>
	);
	
}

export default TwoFactorAuth;
const VerificationCode = () => {
	return (
		<>
      <div className="text-base text-primary dark:text-white">
        Enter Code
      </div>
      <div className="flex items-center justify-between rounded-full dark:bg-primary px-6 py-3">
        <input className="w-30 dark:bg-primary text-sm items-center text-primary dark:text-white placeholder-secondary outline-none" placeholder='65647567' />
        <button className="text-sm text-[#04C063]">Verify</button>
      </div>
    </>
  );
} 

export default VerificationCode;
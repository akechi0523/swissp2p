const VerificationCode = () => {
	return (
		<>
      <div className="text-base text-primary">
        Enter Code
      </div>
      <div className="flex items-center justify-between rounded-full bg-white px-6 py-3">
        <input className="text-sm items-center text-primary placeholder-secondary outline-none" placeholder='65647567' />
        <button className="text-sm text-[#04C063]">Verify</button>
      </div>
    </>
  );
} 

export default VerificationCode;
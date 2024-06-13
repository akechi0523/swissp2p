interface Props {
  placeholder: string;
	title: string;
}

const CommonInput = ({placeholder, title}: Props) => {
	return (
		<>
      <div className="text-base text-primary">
        {title}
      </div>
      <div className="flex items-center justify-between rounded-full border-[1px] border-[#E6E8EC] px-6 py-3">
        <input className="text-sm items-center text-primary placeholder-secondary outline-none" placeholder={placeholder} />
      </div>
    </>
  );
} 

export default CommonInput;
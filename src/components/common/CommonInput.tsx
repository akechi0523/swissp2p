interface Props {
  placeholder: string;
	title: string;
}

const CommonInput = ({placeholder, title}: Props) => {
	return (
		<>
      <div className="text-base text-primary dark:text-white">
        {title}
      </div>
      <div className="flex items-center justify-between rounded-full border-[1px] border-thrid dark:border-secondary px-6 md:py-3 py-2">
        <input className="w-30 dark:bg-primary text-sm items-center text-primary dark:text-white placeholder-secondary outline-none" placeholder={placeholder} />
      </div>
    </>
  );
} 

export default CommonInput;
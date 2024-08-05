import Image from "next/image";

interface Props {
	icon: string;
	name: string;
  // onclick: () => void;
}

const WalletType = ({name, icon}: Props) => {
  return (
    <button  className={'flex items-center justify-between text-base font-medium text-primary dark:text-white rounded-full border-[1px] border-thrid dark:border-secondary px-6 py-3 hover:bg-third dark:hover:bg-secondary w-full'}>
			{name}
      <Image src={icon} width={24} height={24} alt="icon"/>
		</button >
  );
}

export default WalletType;

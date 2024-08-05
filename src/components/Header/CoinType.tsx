import Image from "next/image";

interface Props {
  icon: string;
  name: string;
}

const CoinType = ({ name, icon }: Props) => {
  return (
    <button className={'flex text-base font-medium text-primary dark:text-white dark:border-secondary px-4 py-3 hover:bg-third dark:hover:bg-secondary w-full rounded-xl'}>
      <Image src={icon} width={24} height={24} alt="icon" />
      <div className="ms-2">
        {name}
      </div>
    </button >
  );
}

export default CoinType;

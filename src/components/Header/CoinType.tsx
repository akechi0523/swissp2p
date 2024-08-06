import Image from "next/image";

interface Props {
  icon: string;
  name: string;
}

const CoinType = ({ name, icon }: Props) => {
  return (
    <button className={'flex items-center md:text-base text-sm font-medium text-primary dark:text-white dark:border-secondary hover:bg-third dark:hover:bg-secondary'}>
      <Image src={icon} width={20} height={20} alt="icon"/>
      <div className="ms-2">
        {name}
      </div>
    </button >
  );
}

export default CoinType;

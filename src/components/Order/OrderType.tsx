import Image from "next/image";

interface Props {
  bgcolor: string;
  icon: string;
  icon_size: number;
  name: string;
  value: string;
}

const OrderType = ({bgcolor, icon, icon_size, name, value}: Props) => {
  return (
    <div className={`flex gap-4 items-center rounded-xl ${bgcolor} text-white text-base px-6 md:py-6 py-4`}>
      <Image src={icon} width={icon_size} height={icon_size} alt="icon-order" />
      <div className="flex flex-col">
        <div>{name}</div>
        <div>{value}</div>
      </div>
    </div>
  );
}

export default OrderType;
import Image from "next/image";

interface Props {
  title:string;
}

const Uplaod = ({title}: Props) => {
  return (
    <div>
      <div className="font-medium text-xl text-primary dark:text-white mb-3">{title}</div>
      <div className="bg-white rounded-3xl py-12">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center w-[66px] h-[66px] rounded-2xl">
            <Image src='/images/icon/icon-upload.svg' width={44} height={44} alt="Paymant Receipt"/>
          </div>
          <div className="text-base text-secondary">Drag and drop or <button className="text-[#04C063]">upload from device</button></div>
        </div>
      </div>
    </div>
    
  );
}

export default Uplaod;
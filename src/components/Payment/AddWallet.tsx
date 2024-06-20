import Image from "next/image";

const AddWallet = () => {
  return (
    <button className="flex items-center justify-center gap-3 text-base text-white font-bold rounded-2xl border-none md:py-4.5 py-3.5 bg-[#23262F]">
      <Image src='/images/icon/icon-pluse.svg' width={18} height={18} alt="icon"/>
      Add Receiving Wallet
    </button>
  );
}

export default AddWallet;
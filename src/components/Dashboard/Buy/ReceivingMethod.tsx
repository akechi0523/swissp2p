import ReceivingSelect from "./ReceivingSelect";

const ReceivingMethod = () => {
  return (
    <div className="bg-white rounded-3xl px-8 py-6">
      <div className="font-medium text-xl text-primary mb-3">Receiving Method</div>
      <div className="flex flex-col gap-4">
        <ReceivingSelect path="#" bgcolor="bg-[#F2C94C]" icon_size={36} icon_src="/images/icon/icon-binance.svg" content="Binance Pay" />
        <ReceivingSelect path="#" bgcolor="bg-[#2F80ED]" icon_size={36} icon_src="/images/icon/icon-wallet.svg" content="Wallet Deposit"/>
      </div>
    </div>
  );
}

export default ReceivingMethod;
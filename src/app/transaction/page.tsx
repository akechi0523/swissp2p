import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Transaction from "@/components/common/Transaction";

export default function Transactions() {
  return (
    <>
      <DefaultLayout>
        <div className="pr-16">
          <div className="font-medium text-xl text-primary mb-5">Transaction</div>
          <div className="flex gap-12">              
            <div className="flex flex-col w-1/2">
              <div className="flex flex-col gap-3 bg-white rounded-3xl px-8 py-6">
                <Transaction icon_src="/images/icon/icon-usdt.svg" name="USDT" value="500.00" />
                <Transaction icon_src="/images/icon/icon-usdt.svg" name="USDT" value="500.00" />
                <Transaction icon_src="/images/icon/icon-usdt.svg" name="USDT" value="500.00" />
                <Transaction icon_src="/images/icon/icon-usdt.svg" name="USDT" value="500.00" />
                <Transaction icon_src="/images/icon/icon-usdt.svg" name="USDT" value="500.00" />
                <Transaction icon_src="/images/icon/icon-usdt.svg" name="USDT" value="500.00" />
                <Transaction icon_src="/images/icon/icon-usdt.svg" name="USDT" value="500.00" />
                <Transaction icon_src="/images/icon/icon-usdt.svg" name="USDT" value="500.00" />
                <Transaction icon_src="/images/icon/icon-usdt.svg" name="USDT" value="500.00" />
              </div>                          
            </div>
            <div className="flex flex-col w-1/2 gap-3"></div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Transaction from "@/components/common/Transaction";

export default function Transactions() {
  return (
    <>
      <DefaultLayout>
        <div className="md:pr-16">
          <div className="font-medium text-xl text-primary dark:text-white mb-5">Transaction</div>
          <div className="flex flex-wrap md:flex-nowrap md:gap-12 gap-6">              
            <div className="flex flex-col md:w-1/2 w-full">
              <div className="flex flex-col gap-3 bg-white dark:bg-primary rounded-3xl md:px-8 px-4 md:py-6 py-4">
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
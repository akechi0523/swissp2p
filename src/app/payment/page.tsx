import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PaymentToBuy from "@/components/Payment/PaymentToBuy";

export default function Buy() {
  return (
    <>
      <DefaultLayout>
        <div className="pr-16">
          <div className="font-medium text-xl text-primary dark:text-white mb-5">Payment To Buy</div>
          <div className="flex gap-12">              
            <div className="flex flex-col w-1/2 gap-3">
              <PaymentToBuy icon_src="/images/icon/icon-bank.svg" name="Bank Transfer" link="payment/bank"/>
              <PaymentToBuy icon_src="/images/icon/icon-twint.svg" name="Twint" link="payment/twint"/>
              <PaymentToBuy icon_src="/images/icon/icon-paypal.svg" name="Paypal" link="payment/paypal"/>
              <PaymentToBuy icon_src="/images/icon/icon-zen.svg" name="Zen" link="payment/zen"/>
              <PaymentToBuy icon_src="/images/icon/icon-wise.svg" name="Wise" link="payment/wise"/>
              <PaymentToBuy icon_src="/images/icon/icon-revolut.svg" name="Revolut" link="payment/revolut"/>
              <PaymentToBuy icon_src="/images/icon/icon-binance-third.svg" name="Binance Pay" link="payment/binance"/>
              <PaymentToBuy icon_src="/images/icon/icon-walletaddress.svg" name="Wallet Address" link="payment/wallet"/>
            </div>
            <div className="flex flex-col w-1/2 gap-3"></div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
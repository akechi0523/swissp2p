import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PaymentToBuy from "@/components/Payment/PaymentToBuy";
import Link from "next/link";

export default function Buy() {
  return (
    <>
      <DefaultLayout>
        <div className="md:pr-16">
          <div className="font-medium text-xl text-primary dark:text-white mb-5">Payment To Buy</div>
          <div className="flex flex-wrap md:flex-nowrap md:gap-12 gap-6">              
            <div className="flex flex-col md:w-1/2 w-full gap-3">              
              <div className="flex items-center justify-between rounded-3xl bg-white dark:bg-primary border-none px-5 py-3">
                <div className="flex items-center gap-3 text-base font-medium text-primary dark:text-white">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" className="fill-current dark:fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.7666 30.75H33.7666V33.75H3.7666V30.75ZM6.7666 18.75H9.7666V29.25H6.7666V18.75ZM14.2666 18.75H17.2666V29.25H14.2666V18.75ZM20.2666 18.75H23.2666V29.25H20.2666V18.75ZM27.7666 18.75H30.7666V29.25H27.7666V18.75ZM3.7666 11.25L18.7666 3.75L33.7666 11.25V17.25H3.7666V11.25ZM18.7666 12.75C19.1644 12.75 19.546 12.592 19.8273 12.3107C20.1086 12.0294 20.2666 11.6478 20.2666 11.25C20.2666 10.8522 20.1086 10.4706 19.8273 10.1893C19.546 9.90804 19.1644 9.75 18.7666 9.75C18.3688 9.75 17.9872 9.90804 17.7059 10.1893C17.4246 10.4706 17.2666 10.8522 17.2666 11.25C17.2666 11.6478 17.4246 12.0294 17.7059 12.3107C17.9872 12.592 18.3688 12.75 18.7666 12.75Z" fill=""/>
                </svg>
                  Bank Transfer
                </div>
                <Link href='payment/bank' className="bg-[#04C063] px-5 py-1.5 text-base text-white rounded-xl ">Connect</Link>
              </div>
              <PaymentToBuy icon_src="/images/icon/icon-twint.svg" name="Twint" link="payment/twint"/>
              <PaymentToBuy icon_src="/images/icon/icon-paypal.svg" name="Paypal" link="payment/paypal"/>
              <PaymentToBuy icon_src="/images/icon/icon-zen.svg" name="Zen" link="payment/zen"/>
              <PaymentToBuy icon_src="/images/icon/icon-wise.svg" name="Wise" link="payment/wise"/>
              <PaymentToBuy icon_src="/images/icon/icon-revolut.svg" name="Revolut" link="payment/revolut"/>
              <PaymentToBuy icon_src="/images/icon/icon-binance-third.svg" name="Binance Pay" link="payment/binance"/>
              <div className="flex items-center justify-between rounded-3xl bg-white dark:bg-primary border-none px-5 py-3">
                <div className="flex items-center gap-3 text-base font-medium text-primary dark:text-white">
                  <svg width="36" height="37" viewBox="0 0 36 37" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 9.9375C1.5 7.45222 3.51472 5.4375 6 5.4375H30C32.4853 5.4375 34.5 7.45222 34.5 9.9375C34.5 10.7659 33.8284 11.4375 33 11.4375H27C22.8579 11.4375 19.5 14.7954 19.5 18.9375C19.5 23.0796 22.8579 26.4375 27 26.4375H33C33.8284 26.4375 34.5 27.1091 34.5 27.9375C34.5 30.4228 32.4853 32.4375 30 32.4375H6C3.51472 32.4375 1.5 30.4228 1.5 27.9375V9.9375Z" fill=""/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M27 14.4375H33C33.8284 14.4375 34.5 15.1091 34.5 15.9375V21.9375C34.5 22.7659 33.8284 23.4375 33 23.4375H27C24.5147 23.4375 22.5 21.4228 22.5 18.9375C22.5 16.4522 24.5147 14.4375 27 14.4375ZM27 20.4375C27.8284 20.4375 28.5 19.7659 28.5 18.9375C28.5 18.1091 27.8284 17.4375 27 17.4375C26.1716 17.4375 25.5 18.1091 25.5 18.9375C25.5 19.7659 26.1716 20.4375 27 20.4375Z" fill=""/>
                  </svg>
                  Wallet Address
                </div>
                <Link href='payment/wallet' className="bg-[#04C063] px-5 py-1.5 text-base text-white rounded-xl ">Connect</Link>
              </div>
            </div>
            <div className="flex flex-col w-1/2 gap-3"></div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
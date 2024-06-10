import Image from "next/image";
import PaymentSelect from "./PaymentSelect";


const PaymentMethod = () => {
	return (
		<div className="bg-white rounded-3xl px-8 py-6">
			<div className="font-medium text-xl text-primary mb-3">Payment Method</div>
			<div className="flex flex-col gap-3">
				<PaymentSelect icon_src="/images/icon/icon-bank.svg" content="Bank Transfer"/>
				<PaymentSelect icon_src="/images/icon/icon-twint.svg" content="Twint"/>
				<PaymentSelect icon_src="/images/icon/icon-zen.svg" content="Zen"/>
				<PaymentSelect icon_src="/images/icon/icon-wise.svg" content="Wise"/>
				<PaymentSelect icon_src="/images/icon/icon-revolut.svg" content="Revolut"/>
			</div>
		</div>
	);
}

export default PaymentMethod;
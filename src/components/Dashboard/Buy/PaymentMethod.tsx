"use client"

import Image from "next/image";
import PaymentSelect from "./PaymentSelect";
import { useTransactionContext } from "@/context/TransactionContext";

const PaymentMethod = () => {
	const {paymentMethod, setValues} = useTransactionContext();

	const handlePaymentSelect = (paymentMethod: string) => {
		setValues((prev) => ({ ...prev, paymentMethod: paymentMethod}));
	}

	return (
		<div className="bg-white dark:bg-primary rounded-3xl px-8 py-6">
			<div className="font-medium text-xl text-primary dark:text-white mb-3">Payment Method</div>
			<div className="flex flex-col gap-3">
				<PaymentSelect bgcolor={paymentMethod == "Bank Transfer" ? "bg-third dark:bg-secondary" : "dark:bg-primary"} icon_src="/images/icon/icon-bank.svg" content="Bank Transfer" handleClick={() => handlePaymentSelect("Bank Transfer")}/>
				<PaymentSelect bgcolor={paymentMethod == "Twint" ? "bg-third dark:bg-secondary" : "dark:bg-primary"} icon_src="/images/icon/icon-twint.svg" content="Twint" handleClick={() => handlePaymentSelect("Twint")}/>
				<PaymentSelect bgcolor={paymentMethod == "Zen" ? "bg-third dark:bg-secondary" : "dark:bg-primary"} icon_src="/images/icon/icon-zen.svg" content="Zen" handleClick={() => handlePaymentSelect("Zen")}/>
				<PaymentSelect bgcolor={paymentMethod == "Wise" ? "bg-third dark:bg-secondary" : "dark:bg-primary"} icon_src="/images/icon/icon-wise.svg" content="Wise" handleClick={() => handlePaymentSelect("Wise")}/>
				<PaymentSelect bgcolor={paymentMethod == "Revolut" ? "bg-third dark:bg-secondary" : "dark:bg-primary"} icon_src="/images/icon/icon-revolut.svg" content="Revolut" handleClick={() => handlePaymentSelect("Revolut")}/>
			</div>
		</div>
	);
}

export default PaymentMethod;
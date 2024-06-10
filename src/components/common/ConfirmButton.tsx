import Link from "next/link";

interface Props {
	setIsOdrState: (arg:Number) => void;
}

const ConfirmButton = ({setIsOdrState}: Props) => {
    return (
        <Link href="#" className="flex items-center justify-center gap-3 text-base text-white font-bold rounded-2xl border-none py-4.5 bg-[#04C063]"
					onClick={() => {
						setIsOdrState(0);
					}}
				>
					Confirm
				</Link>
    );
}

export default ConfirmButton;
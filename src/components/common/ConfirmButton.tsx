interface Props {
  handleClick: () => void;
}

const ConfirmButton = ({handleClick}: Props) => {
  return (
    <button onClick={handleClick} className="flex items-center justify-center gap-3 text-base text-white font-bold rounded-2xl border-none md:py-4.5 py-3.5 bg-[#04C063]">
      Confirm
    </button>
  );
}

export default ConfirmButton;
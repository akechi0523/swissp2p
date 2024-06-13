import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex items-center gap-4 mb-5">
      <Image src='/images/user/user-02.png' width={100} height={100} alt="user" />
      <div className="flex flex-col gap-2">
        <div className="flex gap-3 font-bold text-3xl text-primary">
          Zain Bator
          <Image src='/images/icon/icon-checked.svg' width={22} height={22} alt="checked icon" />
        </div>
        <div className="flex gap-3 font-normal text-sm text-secondary">
          ID:778668
          <Image src='/images/icon/icon-copy.svg' width={14} height={14} alt="copy icon" />
        </div>
      </div>
    </div>
  );
}

export default Avatar;
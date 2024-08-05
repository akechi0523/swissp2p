"use client"


const MsgContent = (props) => {
  return (
    <div>
        <div className="ms-2">
          <div className={`text-[12px] w-full max-w-64 text-wrap md:min-w-24 ${props.direct === true ? 'bg-neutral-500 text-white':'bg-[#E6E8EC]'}  p-5 py-2 rounded-lg leading-normal`}>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
    </div>
  );

}

export default MsgContent;
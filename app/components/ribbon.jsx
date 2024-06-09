import Image from "next/image";

export default function Ribbon() {
  return (
    <div id="ribbon" className="block">
      <Image
        className="-rotate-3 relative top-[15.56rem] right-9"
        src="/a.svg"
        alt="this is a"
        width={131.05}
        height={100}
      ></Image>
      <div
        id="ribbon-top"
        className="bg-black text-white relative text-sm font-serif h-20 w-[38rem] -rotate-28 flex items-center justify-center rounded-r"
      >
        <Image
          className="mr-3"
          src="/cup.svg"
          alt="this is a"
          width={50}
          height={100}
        ></Image>
        <div>
          <p>Achievements</p>
          <p>Best Finance App on Playstore</p>
        </div>
        <div className="w-[2px] bg-white h-16 mx-7 rotate-28"></div>
        <Image
          className="mr-3"
          src="/bill.svg"
          alt="this is a"
          width={50}
          height={100}
        ></Image>
        <div>
          <p>Finance</p>
          <p>Most Popular Accounting App</p>
        </div>
      </div>
      <div
        id="ribbon-middle"
        className="text-black bg-link-pink h-20 -rotate-45.74 text-sm font-semibold relative left-[14.8rem] flex items-center justify-center bottom-20 rounded w-96 -z-10"
      >
        <p>Make the Best Financial Decisions</p>
      </div>
      <div
        id="ribbon-bottom"
        className="text-black bg-link-pink h-20 text-sm relative left-[20rem] flex items-center justify-end bottom-9 rounded w-64 -z-20"
      >
        <div className="w-[2px] bg-black h-20"></div>
        <Image
          className="mx-3"
          src="/star.svg"
          alt="this is a"
          width={50}
          height={100}
        ></Image>
        <div className="w-[2px] bg-black h-20"></div>
        <div className="mx-3">
          <p className="font-semibold">Ultra Premium</p>
          <p className="font-normal">Free Trial</p>
        </div>
      </div>
    </div>
  );
}

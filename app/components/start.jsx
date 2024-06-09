import Image from "next/image";
import Ribbon from "./ribbon";

export default function Start() {
  return (
    <div className="w-4/5 mx-auto flex">
      <div className="flex-initial w-1/2 my-16 relative">
        <div className="bg-link-pink absolute left-1/3 w-1/3 h-1/3 blur-2xl -z-10 rounded-full"></div>
        <div className="bg-blob-yellow absolute left-1/4 top-10 w-1/3 h-1/3 blur-2xl -z-20 rounded-full"></div>
        <h1 className="text-6xl my-5 font-extrabold">
          Make The Best Financial Decisions
        </h1>
        <p className="text-gray-500 my-5">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <a
          class="inline-block rounded border border-black bg-black px-12 py-3 mr-5 text-sm font-medium text-white"
          href="#"
        >
          Get Started
          <Image
            className="inline ml-2"
            src="/arror.svg"
            alt="This is an arror"
            width={20}
            height={20}
          ></Image>
        </a>
        <a
          class="inline-block rounded px-12 py-3 text-sm font-medium text-black"
          href="#"
        >
          <Image
            className="inline mr-2"
            src="/play.svg"
            alt="This is a play icon"
            width={20}
            height={20}
          ></Image>
          Watch Video
        </a>
        <Ribbon />
      </div>
      <div className="flex-initial w-1/2 relative">
        <div className="absolute w-[20rem] h-[30rem] top-8 left-[17rem] -z-40">
          <div className="rounded-[50%] absolute w-[20rem] h-[30rem] border-2 border-black -rotate-45"></div>
          <div className="rounded-[50%] absolute top-8 -left-8 w-[20rem] h-[30rem] border-2 border-black -rotate-45"></div>
          <div className="rounded-[50%] absolute top-16 -left-16 w-[20rem] h-[30rem] border-2 border-black -rotate-45"></div>
        </div>
        <div className="bg-link-pink absolute left-56 bottom-24  w-1/3 h-1/3 blur-2xl -z-30 rounded-full"></div>
        <Image
          className="absolute"
          src="/iphone1.svg"
          alt="This is a play icon"
          width={500}
          height={500}
        ></Image>
        <Image
          className="absolute top-16 left-28 -z-10"
          src="/iphone2.svg"
          alt="This is a play icon"
          width={500}
          height={500}
        ></Image>
        <Image
          className="absolute top-36 left-56 -z-20"
          src="/iphone3.svg"
          alt="This is a play icon"
          width={400}
          height={400}
        ></Image>
      </div>
    </div>
  );
}

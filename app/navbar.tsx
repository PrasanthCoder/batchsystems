import Image from "next/image";

export default function Navbar() {
  return (
    <div className="mx-auto my-7 w-4/5 flex items-center">
      <Image
        className="inline mr-5"
        src="/Group.png"
        alt="This is group image"
        width={100}
        height={20}
      ></Image>
      <a className="mx-3 font-medium hover:font-bold hover:text-link-pink" href="/">Home</a>
      <a className="mx-3 font-medium hover:font-bold hover:text-link-pink" href="#">About us</a>
      <a className="mx-3 font-medium hover:font-bold hover:text-link-pink" href="#">Pricing</a>
      <a className="mx-3 font-medium hover:font-bold hover:text-link-pink" href="#">Features</a>
      <a
        className="inline-block rounded border border-black bg-black px-12 py-3 ml-auto text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black"
        href="#"
      >
        Download
      </a>
    </div>
  );
}

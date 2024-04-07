import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-800 items-center flex justify-center">
      <div className="bg-white shadow-md border rounded-md flex-col flex items-center w-96 h-full p-4 gap-4">
        <div className="text-gray-600 font-semibold text-md">merhaba</div>
        <div className="text-gray-600 font-serif italic text-sm">
          i lost alot of my spirit to life, i lost everyone who i loved. i lost
          alot of my friend who i think they can to make me happy. idk why i
          just feel that no one love me, wanna me, and care to me. they are just
          call me when need a something from me. and then will be gone after
          they got it.
        </div>
        <Link
          href="/profile"
          className="bg-gray-600 hover:bg-gray-700 py-2 px-4 rounded-md shadow-lg text-sm italic"
        >
          Find me
        </Link>
      </div>
    </div>
  );
}

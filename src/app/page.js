import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-blue-400 rounded-md p-5 text-white">
        <Link href={"/practice"}>go to practice</Link>
      </div>
    </main>
  );
}

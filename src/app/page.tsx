import Image from "next/image";
import Link from 'next/link'


export default function Home() {
  return (
    <html lang="en" className="bg-primary">
      <head>
        <title>Tailwind Professional Guid</title>
      </head>
      <body>
        <div className="">

          <div
            className={
              "bg-white flex rounded-full shadow-lg px-6 py-4 h-18 w-auto mt-4"
            }>
            <div className="flex  flex-row justify-center">
              <h1 className="font-bold pl-8 text-primary text-2xl">EasyTailwindGuide</h1>
              <div className="">
                <div className="flex  bg-primary items-end gap-2 md:gap-8">
                  <Link href="">Home</Link>
                  <Link href="">Components</Link>
                  <Link href="">Blog</Link>
                  <Link href="">About</Link>

                </div>
                <div>
                  <Link href="">Login</Link>
                  <Link href="">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

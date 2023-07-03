import Link from "next/link";
import Layout from '@/components/layout/Layout'
import Window from '@/components/layout/Window'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function NotFound() {
  const size = useWindowSize()
  return (
    <Layout>
      <div className="flex w-10/12 mx-auto mt-20 font-retro">
        <Window
          title="uh oh"
          x={size.width / 2 - size.width * .9 / 2}
          y={size.height / 10}
          zIndex="1"
          width={`${size.width * .90}px`}
        >
          <div className="p-5 place-content-center flex-col h-full">
            <div className="w-[90%] m-auto max-w-[640px]">
              <h1 className="pt-[10%] mb-[50px] text-center text-4xl text-primary-lighter-100 dark:text-accent-first-800 tracking-wide">
                <span className="bg-primary-500 dark:bg-accent-first-200 pt-0 pr-[15px] pb-[2px] pl-[13px]">Error - 404</span>
              </h1>
              <p className="text-2xl tracking-wide text-primary-600 dark:text-accent-first-dark-100">An error has occured, to continue:</p>
              <p className="text-xl tracking-wide dark:text-accent-first-100 text-primary-500">
                * Return to our homepage.{" "}
                <br />
                * Send us an e-mail about this error and try later.
              </p>
              <nav className="mt-[35px] text-center text-lg tracking-wider">
                <Link href="/" className="pt-0 pr-[9px] pb-[2px] pl-[8px]">home</Link>{" "}|{" "}
                <Link href="mailto:meagan@meaganwaller.com" className="pt-0 pr-[9x] pb-[2px] pl-[8px]">webmistress</Link>
              </nav>
            </div>
          </div>
        </Window>
      </div>
    </Layout>
  );
}

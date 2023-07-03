"use client";

import Window from "@/components/layout/Window"
import Image from 'next/image';
import { useWindowSize } from "@/hooks/useWindowSize"

export default function RingsAndLinks() {
  const size = useWindowSize()

  return (
    <Window
      title="webrings & buttons"
      x={size.width / 20}
      y={size.height / 10}
      zIndex="1"
      width="300px"
      height="400px"
    >
      <aside className="my-2 grid gap-2 content-start">
        <webring-devblog site="https://meaganwaller.com" class="justify-self-center max-h-28 max-w-full" />
        <div className="text-center">
          <Image src="/static/images/buttons/meaganwaller.gif" alt="meaganwaller.com animated graphic" width="150" height="20" className="inline-block hover:scale-150" />
          <Image src="/static/images/buttons/acab.gif" alt="ACAB" width="88" height="31" className="inline-block hover:scale-150" />
          <Image src="/static/images/buttons/bookmark.gif" alt="Bookmark this Page GIF" width="88" height="31" className="inline-block hover:scale-150" />
          <Image src="/static/images/buttons/bestviewed.gif" alt="This Page Best Viewed on a Computer" width="88" height="31" className="inline-block hover:scale-150" />
          <Image src="/static/images/buttons/madewithmac.gif" alt="This website was made with a Mac" width="88" height="31" className="inline-block hover:scale-150" />
          <Image src="/static/images/buttons/online.gif" alt="Forever Online Animated GIF" width="88" height="31" className="inline-block hover:scale-150" />
          <Image src="/static/images/buttons/trustme.gif" alt="Trust Me, I'm Good With Computer" width="129" height="38" className="inline-block hover:scale-150" />
          <Image src="/static/images/buttons/antiNFT.gif" alt="This is an Anti-NFT" width="88" height="31" className="inline-block hover:scale-150" />
          <Image src="/static/images/buttons/oldweb.png" alt="I love old web" width="99" height="55" className="inline-block hover:scale-150" />
          <Image src="/static/images/buttons/sucks.gif" alt="This website SUCKS!" width="88" height="31" className="inline-block hover:scale-150" />
        </div>
        <div className="text-center">
          <Image src="/static/images/buttons/www.gif" alt="World Wide Web Badge Graphic" width="91" height="100" className="inline-block hover:scale-150" />
        </div>
      </aside>
    </Window>
  )
}

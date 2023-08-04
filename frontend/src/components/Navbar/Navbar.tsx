import Link from "next/link";
import { cn } from "@/lib/utils/tailwind";
import pages from "../../data/pages";
import dynamic from "next/dynamic";
import { HiSparkles } from "react-icons/hi";
import { MouseEvent, useRef, useState, createContext } from "react";
import { useWindowSize } from "react-use";
import { useRouter } from "next/router";
import Modal from "@/components/Modal";
import NewsletterForm from "@/components/NewsletterForm";

type NavbarProps = {
  className?: string;
};

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });
const SwitchThemeButton = dynamic(() => import("@components/ui/SwitchThemeButton"), {
  ssr: false,
});

export function Navbar({ className }: NavbarProps) {
  const confettiRef = useRef(null);
  const { width, height } = useWindowSize();
  const router = useRouter();
  const [confetti, setConfetti] = useState(false);
  const [mousePosX, setMousePosX] = useState(0);
  const [mousePosY, setMousePosY] = useState(0);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  function navClick(event: MouseEvent) {
    if (window.scrollY <= 90 && router.route == "/") {
      setMousePosX(event.clientX);
      setMousePosY(event.clientY);
      setConfetti(true);
      setTimeout(() => setConfetti(false), 100);
    } else {
      router.push("/");
    }
  }

  return (
    <nav
      className={cn(
        "bg-secondary-three dark:bg-primary-four h-[32px] menubar border-b border-b-solid border-b-secondary-three dark:border-b-primary-four rounded-t-[10px] py-0 px-[0.5em] w-full",
        className,
      )}
    >
      {showNewsletterModal && (
        <Modal onClose={() => setShowNewsletterModal(false)}>
          <div className="flex w-full mx-auto">
          <NewsletterForm title={["A newsletter you'll ", <em>actually</em>, " open."]} subtitle="A monthly-ish newsletter with updates from the blog, my life, and things I find around the web." />
          </div>
        </Modal>
      )}
      <ul className="flex flex-row list-none m-0 p-0">
        <li key="icon">
          <HiSparkles
            size="20"
            aria-label="Home page"
            className="h-[20px] mr-[8px]"
            onClick={navClick}
          />
        </li>
        {pages.map((item, index) => (
          <li key={index} className="align-middle">
            <Link href={item.href} className="duration-75">
              {item.name}
            </Link>
            {item.children && (
              <ul className="z-[2]">
                {item.children.map((child, index) => (
                  <li key={`child-${index}`}>
                    {child.href === "#newsletter" ? (
                      <button className="duration-75" onClick={() => setShowNewsletterModal(true)}>{child.name}</button>
                    ) : (
                      <Link href={child.href} className="duration-75">
                        {child.name}
                      </Link>
                    )}
                    {child.children && (
                      <ul>
                        {child.children.map((grandchild, index) => (
                          <li key={`grandchild-${index}`}>
                            <Link
                              href={grandchild.href}
                              className="duration-75"
                            >
                              {grandchild.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li key="switch-theme" className="ml-auto mr-2 p-1">
          <SwitchThemeButton />
        </li>
      </ul>
      <Confetti
        style={{ pointerEvents: "none" }}
        numberOfPieces={confetti ? 200 : 0}
        initialVelocityX={50}
        initialVelocityY={-50}
        ref={confettiRef}
        gravity={0.05}
        width={width}
        height={height}
        confettiSource={{
          w: 0,
          h: 0,
          x: mousePosX,
          y: mousePosY,
        }}
        recycle={confetti ? true : false}
        tweenDuration={10}
      />
    </nav>
  );
}

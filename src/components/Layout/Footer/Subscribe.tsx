import { useRef, useState } from "react";

export const Subscribe = () => {
  const inputEl = useRef(null);
  const [message, setMessage] = useState("");

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (inputEl?.current) {
      const email = (inputEl.current as HTMLInputElement)?.value;

      if (!email || !email.length) {
        setMessage("Please enter a valid email address.");
        return;
      } else {
        const res = await fetch("/api/subscribe", {
          body: JSON.stringify({
            email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const { error } = await res.json();

        if (error) {
          setMessage(error);
          return;
        }
      }
    }

    if (inputEl?.current) {
      const emailInput = inputEl.current as HTMLInputElement;
      emailInput.value = "";
      setMessage("Success! 🎉 You are now subscribed to the newsletter.");
    }
  };

  return (
    <div className="px-4 pb-8 md:px-6 md:pb-10 lg:pb-12">
      <div className="mx-auto w-full max-w-3xl">
        <div className="grid grid-cols-1 justify-items-center gap-24">
          <div className="mx-auto px-2">
            <h2 className="mb-3 w-full text-center font-extra text-2xl font-bold text-light-yellow">
              Join the Newsletter
            </h2>
            <form
              onSubmit={subscribe}
              className="grid w-full grid-cols-1 gap-6"
            >
              <div className="font-extra">
                <p className="mb-4 text-md italic text-lilac last:mb-0">
                  Twice-monthly<span className="font-bold">ish</span> doses
                  straight to your inbox. Featuring the latest blog posts, web
                  gems I've stumbled upon, side projects that may or may not see
                  the light of day, my ongoing tinkerings, and whatever current
                  hyper-focus that's consuming my existence.
                </p>
              </div>
              <div className="mx-auto mb-2 grid grid-cols-1 gap-2">
                <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem] font-extra">
                  <label>
                    <span className="sr-only">Email address</span>
                    <input
                      name="email"
                      type="email"
                      ref={inputEl}
                      placeholder="you@youremail.com"
                      className="peer h-full w-full rounded-[7px] border border-lilac bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-vanilla outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-vanilla placeholder-shown:border-t-vanilla focus:border-2 focus:border-vanilla focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blush"
                      required
                    />
                    <div className="inset-y-0 mt-2 flex items-center text-sm text-light-yellow">
                      {message
                        ? message
                        : "I'll only send emails when new content is posted. No spam."}
                    </div>
                  </label>
                  <button
                    type="submit"
                    className="!absolute right-1 top-1 z-10 select-none rounded bg-lilac px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-electric-purple shadow-md shadow-purple/60 transition-all hover:shadow-lg hover:shadow-purple/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-background peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                    data-ripple-light="true"
                  >
                    Join
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

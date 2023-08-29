import ColorChip from './color-chip'

const Styleguide = () => {
  return (
    <section className="styleguide mt-[4em]">
      <header className="bg-accent py-12 text-on-accent">
        <div className="max-w-prose mx-auto text-center text-on-accent">
          <h1 className="text-on-accent font-venice">
            <span className="block lowercase text-6xl font-light tracking-widest text-on-accent">
              Meagan Waller
            </span>
            <span className="mt-4 block uppercase text-2xl">Style Guide</span>
          </h1>
        </div>
      </header>
      <section className="max-w-prose mx-auto py-12 border-b border-accent flex flex-col space-y-6">
        <h2 className="font-bold text-2xl">Introduction</h2>
        <p className="text-xl text-primary-txt font-light mt-6">
          This is a style guide for the Meagan Waller website.
          It's purpose is to provide a central location for all of the
          styles used throughout the site.
        </p>
      </section>
      <section className="max-w-prose mx-auto py-12 border-b border-black flex flex-col space-y-6">
        <div>
          <h2 className="font-bold text-2xl">Color</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
          <ColorChip
            name="Background"
            pantone="2418 U"
            cmyk="94 23 81 09"
            rgb="0 126 82"
            hex="008759"
          />
          <ColorChip
            name="Accent"
            pantone="347 C"
            cmyk="92 76 56 78"
            rgb="17 24 32"
            hex="111820"
          />
          <ColorChip
            name="Gray"
            pantone="Cool Gray 3 C"
            cmyk="24 19 19 01"
            rgb="202 200 200"
            hex="CAC8C8"
          />
          <ColorChip
            name="White"
            pantone="Brilliant White"
            cmyk="0 0 0 0"
            rgb="255 255 255"
            hex="FFFFFF"
          />
        </div>
      </section>
      <section className="max-w-prose mx-auto py-12 border-b border-black flex flex-col space-y-6">
        <h2 className="font-bold text-2xl">Typography</h2>
        <div>
          <h3 className="font-bold">Headings</h3>
          <p>
            Headings are set in Gotham Bold. Gotham is a commercial typeface by{' '}
            <a
              className="underline hover:text-primary hover:decoration-primary decoration-2 underline-offset-2"
              href="https://www.typography.com/fonts/gotham/overview"
              target="_blank"
              rel="noreferrer noopener"
            >
              Hoefler&Co
            </a>
            . A licence must be purchased to use this font. If you don’t have
            access to Gotham, you can use the free alternative{' '}
            <a
              className="underline hover:text-primary hover:decoration-primary decoration-2 underline-offset-2"
              href="https://fonts.google.com/specimen/Montserrat"
              target="_blank"
              rel="noreferrer noopener"
            >
              Montserrat Bold
            </a>{' '}
            from Google Fonts.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Body Copy</h3>
          <p>
            Body copy is set in Sentinel Book. Sentinel is a commercial typeface
            by{' '}
            <a
              className="underline hover:text-primary hover:decoration-primary decoration-2 underline-offset-2"
              href="https://www.typography.com/fonts/sentinel/overview"
              target="_blank"
              rel="noreferrer noopener"
            >
              Hoefler&Co
            </a>
            . A licence must be purchased to use this font. If you don’t have
            access to Sentinel, you can use the free alternative{' '}
            <a
              className="underline hover:text-primary hover:decoration-primary decoration-2 underline-offset-2"
              href="https://fonts.google.com/specimen/Domine"
              target="_blank"
              rel="noreferrer noopener"
            >
              Domine Regular
            </a>{' '}
            from Google Fonts.
          </p>
          <h3 className="font-bold mt-6">Sample</h3>
          <p className="font-bold tracking-widest text-3xl">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </p>
          <p className="font-bold tracking-widest text-3xl">
            abcdefghijklmnopqrstuvwxyz
          </p>
          <p className="font-bold tracking-widest text-3xl">
            1234567890&!?.,:;()[]
          </p>
        </div>
      </section>
      <section className="max-w-prose mx-auto py-12 border-b border-black flex flex-col space-y-6">
        <h2 className="font-bold text-2xl">Logo</h2>
      </section>
    </section>
  )
}

export default Styleguide

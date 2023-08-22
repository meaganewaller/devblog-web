import { cx } from 'classix'
import { Heading } from '@/components/core/heading';
import { Link } from '@/components/core/link';
import { Section } from '@/components/core/section';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import Doodle from './doodle';
import ContactButtons from './contact-buttons';

import Header from './header';

export default function AboutMeaganPage() {
  return (
    <>
      <Section id={'meagan'}>
        <Heading shadow={'blue'} from={'blue'} to={'green'}>
          About Meagan
        </Heading>
      </Section>
      <Section id={'contact'}>
        <Heading $as={'h2'} shadow={'brand'} from={'brand'} to={'blue'}>
          Contact
        </Heading>
        <p>
          I&apos;m always open to chat, connect with new people and explore new
          opportunities.
        </p>
        <div className={cx('flex flex-col-reverse gap-48', 'tablet-sm:flex-row tablet-sm:items-start')}>
          <Doodle />
          <div className={cx('flex flex-col gap-12')}>
            <p>
              If you have a project or idea in mind where I can contribute,
              don&apos;t hesitate contacting me!
              <br />
              But please{' '}
              <Link
                title={"Don't just say hello page"}
                href={'https://nohello.net/'}
              >
                don&apos;t just say hello
              </Link>
              .
            </p>
            <p>There&apos;s a few ways you can get it touch:</p>
            <ContactButtons />
          </div>
        </div>
      </Section>
    </>
  )
}

export const metadata = getStaticMetadata({
  title: 'About - Meagan Waller',
  description: 'Learn more about me!',
  exactUrl: 'https://meaganwaller.com/meagan',
  keywords: ['bio', 'biography', 'information', 'about'],
  image: buildOgImageUrl('about'),
});

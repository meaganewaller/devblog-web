import Icon from '@mdi/react';

import {
  gitHubOutline,
  linkedInOutline,
  twitterOutline,
  mdiInstagram,
  bluesky,
} from '@/components/icons';

import { BackToTopLink } from './back-to-top';
import {
  SocialLinksContainer,
  SocialLinkItem,
  GitHubLink,
  LinkedInLink,
  TwitterLink,
  InstagramLink,
  BlueskyLink,
} from './social-links.styles';

interface SocialLinksProps {
  withBackToTop?: boolean;
}

const iconSize = 0.9;
export const SocialLinks = (props: SocialLinksProps) => {
  const { withBackToTop } = props;
  return (
    <SocialLinksContainer aria-label={'Social links'}>
      <SocialLinkItem>
        <GitHubLink title={'GitHub'} href={'https://github.com/meagnewaller'}>
          <Icon path={gitHubOutline} size={iconSize} />
        </GitHubLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <LinkedInLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/meaganewaller'}
        >
          <Icon path={linkedInOutline} size={iconSize} />
        </LinkedInLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <BlueskyLink title={'Bluesky'} href={'https://bsky.meaganwaller.com'}>
          <Icon path={bluesky} size={iconSize} />
        </BlueskyLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <TwitterLink
          title={'Twitter'}
          href={'https://twitter.com/meaganewaller'}
        >
          <Icon path={twitterOutline} size={iconSize} />
        </TwitterLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <InstagramLink
          title={'Instagram'}
          href={'https://instagram.com/neonbudlightsign'}
        >
          <Icon path={mdiInstagram} size={iconSize} />
        </InstagramLink>
      </SocialLinkItem>
      {Boolean(withBackToTop) && <BackToTopLink />}
    </SocialLinksContainer>
  );
};

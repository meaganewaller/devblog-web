interface PageItem {
  name: string;
  href: string;
  children?: PageItem[];
}

const pages: PageItem[] = [
  {
    name: 'Site',
    href: '#',
    children: [
      { name: 'Join the Newsletter', href: '#newsletter' },
      { name: 'Colophon', href: '/colophon' },
    ],
  },
  {
    name: 'Meagan',
    href: '#',
    children: [
      { name: 'About Me', href: '/about' },
      { name: 'Resume', href: '/cv' },
      { name: "Let's Chat", href: '/contact' },
    ],
  },
  {
    name: 'Blog',
    href: '/blog',
    children: [
      {
        name: 'Categories',
        href: '/blog/categories',
        children: [
          { name: 'Design', href: '/blog/categories/design' },
          { name: 'Development', href: '/blog/categories/development' },
          { name: 'Personal', href: '/blog/categories/personal' },
          { name: 'Productivity', href: '/blog/categories/productivity' },
          { name: 'Guides', href: '/blog/categories/guides' },
          { name: 'Tutorial', href: '/blog/categories/tutorial' },
        ],
      },
    ],
  },
  {
    name: 'Projects',
    href: '/projects',
    children: [
      { name: 'First Project', href: '/projects/first-project' },
      { name: 'Second Project', href: '/projects/second-project' },
      { name: 'Third Project', href: '/projects/third-project' },
    ],
  },
  {
    name: 'Workspace',
    href: '/workspace',
    children: [
      { name: 'MacOS Setup', href: '/workspace/mac-setup' },
      { name: 'Linux Setup', href: '/workspace/linux-setup' },
      { name: 'iOS Setup', href: '/workspace/ios-setup' },
      { name: 'Home Office', href: '/workspace/home-office-setup' },
    ],
  },
  {
    name: 'Guestbook',
    href: '/guestbook',
  },
];

export default pages;

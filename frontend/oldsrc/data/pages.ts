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
        children: [],
      },
    ],
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Workspace',
    href: '/workspace',
  },
  {
    name: 'Guestbook',
    href: '/guestbook',
  },
];

export default pages;

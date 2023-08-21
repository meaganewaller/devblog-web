'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useMenuContext } from '@/providers/menu-provider'

const links = [
  {
    name: 'Site',
    path: '#',
    children: [
      {
        name: 'About',
        path: '/site'
      },
      {
        name: 'Join the Newsletter',
        path: '/newsletter'
      },
      {
        name: 'Colophon',
        path: '/colopon'
      }
    ]
  },
  {
    name: 'Meagan',
    path: '#',
    children: [
      {
        name: 'About me',
        path: '/meagan'
      },
      {
        name: 'Let\'s chat',
        path: '/chat'
      }
    ]
  },
  {
    name: 'Blog',
    path: '/blog',
    children: [
      {
        name: 'Categories',
        path: '#'
      }
    ]
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Workspace',
    path: '/workspace'
  },
]

function NavLinks() {
  const { closeMenu } = useMenuContext();
  return (
    <NavLinksWrapper className="nav-links">
      {links.map((item, index) => (
        <li key={index}>
          {item.name}
        </li>
      ))}
    </NavLinksWrapper>
  )
}

export default NavLinks

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  li:not(:last-child) {
    margin-right: 26px;
  }

  li:last-child {
    margin-left: auto;
  }

  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      padding: 12px;
      margin: 0 !important;
    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--text);
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: var(--text);
    transition: width 150ms linear;
  }
  &:hover::before {
    width: 100%;
  }
`;

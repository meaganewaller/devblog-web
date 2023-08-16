'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type PropsWithChildren } from 'react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

import PlausibleProvider from 'next-plausible';
import { ThemeProvider } from './theme-provider';

const themes =
  process.env.IS_TEMPLATE === 'true'
    ? { light: 'light-inverted', dark: 'dark-inverted' }
    : { light: 'light', dark: 'dark' };

export function Providers(props: PropsWithChildren) {
  return (
    <NextThemeProvider
      attribute={'class'}
      defaultTheme={'system'}
      value={themes}
    >
    <PlausibleProvider domain="meaganwaller.com">
    <ThemeProvider>
    <BalancerProvider>{props.children}</BalancerProvider>
    </ThemeProvider>
    </PlausibleProvider>
    </NextThemeProvider>
  );
}

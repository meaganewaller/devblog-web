import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactNode } from "react"

export interface MDXProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  content: string;
}

export interface IconClassNameProps {
  className?: string;
}

export interface ThemeProps {
  theme: string;
  changeTheme: () => void;
}

export interface ChildrenProps {
  children: ReactNode;
}

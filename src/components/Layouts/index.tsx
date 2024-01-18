import * as React from "react";

interface Props {
  list: React.ReactElement | null;
  detail: React.ReactElement | null;
  hasDetail?: boolean;
}

export function ListDetailView({ list, detail, hasDetail = false }: Props) {
  return (
    <div className="flex w-full">
      {list && (
        <div
          id="list"
          className={`w-full ${
            hasDetail ? "hidden lg:flex" : "min-h-screen w-full"
          }`}
        >
          {list}
        </div>
      )}
      {detail}
    </div>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-full min-h-screen w-full">
      <div className="flex flex-1">{children}</div>
    </div>
  );
}

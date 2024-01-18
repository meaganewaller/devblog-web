"use client";
import { Container } from "@/components/Layout/Container";

import PageLayout from "@/app/pageLayout";

const NowLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayout>
      <Container className="mx-auto grid grid-cols-12 md:space-x-4">
        <div className="col-span-12 p-2">{children}</div>
      </Container>
    </PageLayout>
  );
};

export default NowLayout;

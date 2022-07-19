import React from "react";
import Link from "next/link";
import { MainLayout } from "../../components/layout/MainLayout";
import { DarkLayout } from "../../components/layout/DarkLayout";

export default function AboutPage() {
  return (
    <>
      <h1>Esta es la pagina de About</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Esta es la pagina de About{" "}
        <code className={"code"}>pages/about.tsx</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

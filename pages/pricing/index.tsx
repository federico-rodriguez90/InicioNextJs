import React from "react";
import Link from "next/link";
import { MainLayout } from "../../components/layout/MainLayout";

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Esta es la pagina de Pricing</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Esta es la pagina de Pricing{" "}
        <code className={"code"}>pages/pricing.tsx</code>
      </p>
    </MainLayout>
  );
}

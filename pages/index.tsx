import Link from "next/link";
import { MainLayout } from "../components/layout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Esta es la pagina de Home</h1>
      <h1 className={"title"}>
        Ir a <Link href="/about">About</Link>
      </h1>
      <h1 className={"title"}>
        Ir a <Link href="/contact">Contact</Link>
      </h1>

      <p className={"description"}>
        Esta es la pagina Home <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}

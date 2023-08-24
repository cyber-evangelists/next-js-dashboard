import { Header } from "./components/home/Header";
import Mychart from "./components/home/Mychart";
import { Nav } from "./components/home/Nav";
import { SalesActivites } from "./components/home/SalesActivites";
import { Timeline } from "./components/home/Timeline";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <section className="p-8 flex w-full bg-white">
        <SalesActivites />
        <Timeline />
      </section>
    </>
  );
}

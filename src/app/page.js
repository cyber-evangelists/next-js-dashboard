"use client";
import { Header } from "./components/home/Header";
import { Tasks } from "./components/home/Tasks";
import { Nav } from "./components/home/Nav";
import { ProductSummery } from "./components/home/ProductSummery";
import { Customer } from "./components/home/Customer";
import { Transactions } from "./components/home/Transactions";
import { SalesActivites } from "./components/home/SalesActivites";
import Stats from "./components/home/Stats";
import { Timeline } from "./components/home/Timeline";
import { Visitor } from "./components/home/Visitor";
import { Budget } from "./components/home/Budget";

export default function Home() {
  return (
    <section className="px-2 text-black-900">
      <Nav />
      <Header />
      <section className="xl:flex xl:flex-wrap ">
        <div style={{ flex: "1" }} >
          <SalesActivites />
        </div>

        <div className="md:min-w-[30%]" style={{ flex: "1" }}>
          <Timeline />
        </div>

        <div className="md:min-w-[30%]" style={{ flex: "1" }}>
          <Stats />
        </div>

        <div className="md:min-w-[30%]" style={{ flex: "1" }}>
          <Visitor />
        </div>
        <div className="md:min-w-[30%] 2xl:order-1" style={{ flex: "1" }}>
          <Transactions/>
        </div>

        <div className="md:min-w-[30%]" style={{ flex: "1" }}>
          <Tasks />
        </div>

        <div className="md:min-w-[30%]" style={{ flex: "1" }}>
          <Budget />
        </div>

        <div className="md:min-w-[30%]" style={{ flex: "1" }}>
          <Customer />
        </div>
      </section>
      <ProductSummery />
    </section>
  );
}

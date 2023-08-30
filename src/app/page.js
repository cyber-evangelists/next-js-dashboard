"use client";
import { Header } from "./components/home/Header";
import { MainTask } from "./components/home/MainTask";
import { Nav } from "./components/home/Nav";
import { ProductSummery } from "./components/home/ProductSummery";
import { RecentCustomer } from "./components/home/RecentCustomer";
import { RecentTrans } from "./components/home/RecentTrans";
import { SalesActivites } from "./components/home/SalesActivites";
import Stats from "./components/home/Stats";
import { Timeline } from "./components/home/Timeline";
import { Visitor } from "./components/home/Visitor";
import { WeeklyBd } from "./components/home/WeeklyBd";

export default function Home() {
  return (
    <section className="px-2">
      <Nav />
      <Header />
      <section className="xl:flex xl:flex-wrap ">
        <div style={{ flex: "2" }}>
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
          <RecentTrans />
        </div>

        <div className="md:min-w-[30%]" style={{ flex: "1" }}>
          <MainTask />
        </div>

        <div className="md:min-w-[30%]" style={{ flex: "1" }}>
          <WeeklyBd />
        </div>

        <div className="md:min-w-[30%]" style={{ flex: "1" }}>
          <RecentCustomer />
        </div>
      </section>
      <ProductSummery />
    </section>
  );
}

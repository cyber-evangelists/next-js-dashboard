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
        <div className="md:min-w-[400px]" style={{ flex: "2" }}>
          <SalesActivites />
        </div>

        <div className="md:min-w-[350px]">
          <Timeline />
        </div>

        <div className="md:min-w-[300px]">
          <Stats />
        </div>

        <div className="md:min-w-[300px]">
          <Visitor />
        </div>
        <div className="md:min-w-[355px] xl:min-w-[300px] 2xl:order-1">
          <RecentTrans />
        </div>

        <div className="xl:w-[350px]">
          <MainTask />
        </div>

        <div className="md:min-w-[345px]">
          <WeeklyBd />
        </div>

        <div className="min-w-full 2xl:min-w-[320px]">
          <RecentCustomer />
        </div>
      </section>
      <ProductSummery />
    </section>
  );
}

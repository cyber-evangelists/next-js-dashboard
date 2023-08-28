"use client";
import { Header } from "./components/home/Header";
import { MainTask } from "./components/home/MainTask";
import Mychart from "./components/home/Mychart";
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
    <>
      <Nav />
      <Header />
      <section className="xl:flex xl:flex-wrap xl:justify-between xl:gap-4">
        <div className="min-w-[400px]" style={{flex: "2"}}>
          <SalesActivites />
        </div>

        <div className="min-w-[350px]">
          <Timeline />
        </div>

        <div className="min-w-[300px]">
          <Stats />
        </div>

        <div className="min-w-[450px]">
          <Visitor />
        </div>

        <div className="w-full 3xl:w-[48%] 3xl:border-2 border-red-500">
          <MainTask />
        </div>

        <div className="flex-1">
          <RecentTrans />
        </div>

        <div className="flex-1">
          <WeeklyBd />
        </div>

        <div className="w-full">
          <RecentCustomer />
        </div>

      </section>
      <ProductSummery />
    </>
  );
}

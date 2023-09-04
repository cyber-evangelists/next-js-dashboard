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
        <div className="xl:w-[60%] 4xl:w-[33.33%]">
          <SalesActivites />
        </div>

        <div className="xl:w-[40%] 4xl:w-[33.33%]" >
          <Timeline />
        </div>

        <div className="xl:w-[30%] 4xl:w-[33.33%]">
          <Stats />
        </div>

        <div className="xl:w-[30%] 4xl:w-[33.33%]">
          <Visitor />
        </div>
        <div className="xl:w-[40%] 4xl:w-[33.33%]">
          <Transactions/>
        </div>

        <div className="xl:w-[40%] xl:order-3 4xl:w-[33.33%]" >
          <Tasks />
        </div>

        <div className="xl:w-[30%] 4xl:w-[33.33%]" >
          <Budget />
        </div>

        <div className="xl:w-[30%] 4xl:w-[33.33%]" >
          <Customer />
        </div>
      </section>
      <ProductSummery />
    </section>
  );
}

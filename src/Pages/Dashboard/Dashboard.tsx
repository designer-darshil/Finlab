import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Bar } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PaymentReceive from "@/assets/svg/PaymentReceive.svg";
import PaymentTransfer from "@/assets/svg/PaymentTransfer.svg";
import { Payment, columns } from "@/components/payments/columns";
import { DataTable } from "@/components/payments/DataTable";
import { LineChart, Line } from "recharts";
import MoneyBag from "@/assets/svg/MoneyBag.svg";
import SportUtility from "@/assets/svg/SportUtility.svg";
import VideoGame from "@/assets/svg/VideoGame.svg";
import Woman from "@/assets/svg/Woman.svg";
import { BarChart } from "lucide-react";

const ExpenseOverview = [
  { name: "Subscribed", value: 400.1 },
  { name: "Taxs", value: 250 },
  { name: "Taxs", value: 100 },
  { name: "Others", value: 180 },
];

const COLORS = ["#31B099", "#E7854D", "#C65468", "#4D81E7"];
const ExpenseAnalysis = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const IncomeAnalysis = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
async function getData(): Promise<Payment[]> {
  return new Array(85).fill(null).map(() => {
    const status = (["Accepted", "Pending", "Rejected"] as const)[
      Math.floor(Math.random() * 3)
    ];
    const transactionType = (["Subscribe", "Receive", "transfer"] as const)[
      Math.floor(Math.random() * 3)
    ];
    const backgroundColor = {
      Accepted: "green",
      Pending: "yellow",
      Rejected: "red",
    }[status];

    return {
      id: "728ed52f",
      invoice: "B12341",
      amount: Math.random() * 1000,
      status: status,
      backgroundColor: backgroundColor,
      email: "m@example.com",
    };
  });
}
const Dashboard: React.FC = () => {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-white text-3xl font-semibold mb-3">
          Welcome back, Rainer Yaeger 👏🏻
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-[#A2A6AA]">
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">Overview</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Tabs defaultValue="Overview" className="w-full">
        <TabsList className="mb-8 bg-transparent border-b border-white/10 h-auto p-0 rounded-none">
          <TabsTrigger
            value="Overview"
            className="text-[#A2A6AA] text-base border-b border-b-transparent p-4 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b data-[state=active]:border-primary"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="Transaction"
            className="text-[#A2A6AA] text-base border-b border-b-transparent p-4 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b data-[state=active]:border-primary"
          >
            Transaction
          </TabsTrigger>
          <TabsTrigger
            value="Statistics"
            className="text-[#A2A6AA] text-base border-b border-b-transparent p-4 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b data-[state=active]:border-primary"
          >
            Statistics
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Overview">
          <div className="grid grid-cols-4 max-md:grid-cols-1 gap-8">
            <div className="grid grid-cols-1 items-start justify-start flex-col max-md:col-span-2 gap-8">
              <Card className="border-0">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold">Total Balance</h2>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <i className="ri-information-line text-gray-400 font-light text-lg"></i>
                            </TooltipTrigger>
                            <TooltipContent className="w-52 font-normal tracking-normal">
                              <p>
                                Total Balance: The overall sum of all your
                                account balances, including cash, investments,
                                and savings.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h1 className="text-4xl font-extrabold">$12,456,315</h1>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4 w-full">
                    <button className="bg-primary text-white px-4 py-3 rounded-lg w-full hover:opacity-80 flex items-center gap-3 justify-center">
                      <img src={PaymentTransfer} alt="" />
                      Transfer
                    </button>
                    <button className="bg-primary text-white px-4 py-3 rounded-lg w-full hover:opacity-80 flex items-center gap-3 justify-center">
                      <img src={PaymentReceive} alt="" />
                      Receive
                    </button>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className="grid grid-cols-1 items-start justify-start col-span-2 gap-8">
              <Card className="border-0 w-full">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold">Income Analysis</h2>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <i className="ri-information-line text-gray-400 font-light text-lg"></i>
                            </TooltipTrigger>
                            <TooltipContent className="w-52 font-normal tracking-normal">
                              <p>
                                Income Analysis: A detailed breakdown of your
                                income sources, trends, and patterns over a
                                specified period.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 max-md:grid-cols-1">
                  <div>
                    <div className="flex items-start mb-2">
                      <h1 className="text-4xl max-md:text-3xl font-extrabold">
                        $12,456,315
                      </h1>
                      <span className="text-danger bg-danger/20 font-bold text-base max-md:text-sm py-1 px-2 rounded-lg ms-2">
                        -2.1%
                      </span>
                    </div>
                    <p className="font-semibold">
                      Expense increased by
                      <span className="mx-2 text-danger">$1.456</span>This Month
                    </p>
                  </div>
                  <div>
                    <BarChart width={650} height={120} data={IncomeAnalysis}>
                      <Bar dataKey="uv" fill="#8884d8" />
                    </BarChart>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold">Expense Analysis</h2>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <i className="ri-information-line text-gray-400 font-light text-lg"></i>
                            </TooltipTrigger>
                            <TooltipContent className="w-52 font-normal tracking-normal">
                              <p>
                                Gain insights into your earnings with detailed
                                reports on your income streams, growth trends,
                                and potential areas for improvement.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 max-md:grid-cols-1">
                  <div>
                    <div className="flex items-start mb-2">
                      <h1 className="text-4xl max-md:text-3xl font-extrabold">
                        $12,456,315
                      </h1>
                      <span className="text-danger bg-danger/20 font-bold text-base max-md:text-sm py-1 px-2 rounded-lg ms-2">
                        -2.1%
                      </span>
                    </div>
                    <p className="font-semibold">
                      Expense increased by
                      <span className="mx-2 text-danger">$1.456</span>This Month
                    </p>
                  </div>
                  <div>
                    <LineChart
                      className="max-md:w-full"
                      width={300}
                      height={80}
                      data={ExpenseAnalysis}
                    >
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold">Expense Analysis</h2>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <i className="ri-information-line text-gray-400 font-light text-lg"></i>
                            </TooltipTrigger>
                            <TooltipContent className="w-52 font-normal tracking-normal">
                              <p>
                                Detailed examination of your spending patterns,
                                helping you identify trends, manage budgets, and
                                control expenses effectively.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 max-md:grid-cols-1 items-center gap-3">
                    <div className="flex items-center justify-center w-full h-full">
                      <PieChart width={260} height={220}>
                        <Pie
                          data={ExpenseOverview}
                          cx={120}
                          cy={100}
                          innerRadius={55}
                          outerRadius={100}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </div>
                    <div className="flex items-center flex-col gap-3 col-span-2 text-left">
                      <div className="flex items-center justify-between gap-3 w-full">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-primary rounded-full"></span>
                          <h5 className="text-lg max-md:text-sm">
                            Subscribed (40.1%)
                          </h5>
                        </div>
                        <h5 className="text-lg max-md:text-sm font-bold">
                          $500.000
                        </h5>
                      </div>
                      <div className="flex items-center justify-between gap-3 w-full">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-warning rounded-full"></span>
                          <h5 className="text-lg max-md:text-sm">Taxs (25%)</h5>
                        </div>
                        <h5 className="text-lg max-md:text-sm font-bold">
                          $1000.000
                        </h5>
                      </div>
                      <div className="flex items-center justify-between gap-3 w-full">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-error rounded-full"></span>
                          <h5 className="text-lg max-md:text-sm">
                            Taxs (6.1%)
                          </h5>
                        </div>
                        <h5 className="text-lg max-md:text-sm font-bold">
                          $1500.000
                        </h5>
                      </div>
                      <div className="flex items-center justify-between gap-3 w-full">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-information rounded-full"></span>
                          <h5 className="text-lg max-md:text-sm">
                            Others (19.2%))
                          </h5>
                        </div>
                        <h5 className="text-lg max-md:text-sm font-bold">
                          $2500.000
                        </h5>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 items-start justify-start flex-col max-md:col-span-2 gap-8">
              <Card className="border-0">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold">My Pocked Plans</h2>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <i className="ri-information-line text-gray-400 font-light text-lg"></i>
                            </TooltipTrigger>
                            <TooltipContent className="w-52 font-normal tracking-normal">
                              <p>
                                Personalized financial strategies and savings
                                plans tailored to help you achieve your
                                financial goals.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <button className="text-gray-400 text-sm flex items-start gap-2">
                        <span>See More</span>
                        <i className="ri-arrow-right-line"></i>
                      </button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="border border-secondary-200 p-5 rounded-xl flex flex-col items-start gap-6">
                      <div className="w-14 h-14 rounded-lg bg-secondary-200 flex items-center justify-center">
                        <img src={SportUtility} className="w-12 h-12" alt="" />
                      </div>
                      <div>
                        <h1 className="font-bold text-lg">New Car</h1>
                        <p className="text-secondary-300">$5.000,00</p>
                      </div>
                    </div>
                    <div className="border border-secondary-200 p-5 rounded-xl flex flex-col items-start gap-6">
                      <div className="w-14 h-14 rounded-lg bg-secondary-200 flex items-center justify-center">
                        <img src={VideoGame} className="w-12 h-12" alt="" />
                      </div>
                      <div>
                        <h1 className="font-bold text-lg">New Console</h1>
                        <p className="text-secondary-300">$5.000,00</p>
                      </div>
                    </div>
                    <div className="border border-secondary-200 p-5 rounded-xl flex flex-col items-start gap-6">
                      <div className="w-14 h-14 rounded-lg bg-secondary-200 flex items-center justify-center">
                        <img src={MoneyBag} className="w-12 h-12" alt="" />
                      </div>
                      <div>
                        <h1 className="font-bold text-lg">Savings</h1>
                        <p className="text-secondary-300">$5.000,00</p>
                      </div>
                    </div>
                    <div className="border border-secondary-200 p-5 rounded-xl flex flex-col items-start gap-6">
                      <div className="w-14 h-14 rounded-lg bg-secondary-200 flex items-center justify-center">
                        <img src={Woman} className="w-12 h-12" alt="" />
                      </div>
                      <div>
                        <h1 className="font-bold text-lg">New Car</h1>
                        <p className="text-secondary-300">$5.000,00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Transaction">
          <div className="grid grid-cols-1 bg-white rounded-lg p-6">
            <DataTable columns={columns} data={data} />
          </div>
        </TabsContent>
        <TabsContent value="Statistics">
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Dashboard;

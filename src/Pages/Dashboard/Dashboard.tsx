import React, { useEffect, useState } from "react";
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
import MoneyBag from "@/assets/svg/MoneyBag.svg";
import SportUtility from "@/assets/svg/SportUtility.svg";
import VideoGame from "@/assets/svg/VideoGame.svg";
import Woman from "@/assets/svg/Woman.svg";
import { Label, Pie, PieChart } from "recharts";
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const BalanceData = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Apr", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "Jul", desktop: 314 },
  { month: "Aug", desktop: 223 },
  { month: "Sep", desktop: 123 },
  { month: "Oct", desktop: 352 },
  { month: "Nov", desktop: 175 },
  { month: "Des", desktop: 357 },
];
const BalanceConfig = {
  desktop: {
    label: "Total Balance",
  },
} satisfies BalanceConfig;

const IncomeData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const IncomeConfig = {
  desktop: {
    label: "Income",
  },
} satisfies IncomeConfig;

const ExpenseData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const ExpenseConfig = {
  desktop: {
    label: "Expense",
  },
} satisfies ExpenseConfig;

const chartData = [
  { browser: "Subscribed", visitors: 300, fill: "#31B099" },
  { browser: "Taxs", visitors: 200, fill: "#E7854D" },
  { browser: "Taxs", visitors: 80, fill: "#C65468" },
  { browser: "Others", visitors: 163, fill: "#4D81E7" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Subscribed",
    color: "#31B099",
  },
  safari: {
    label: "Taxs",
    color: "#E7854D",
  },
  taxs: {
    label: "Taxs",
    color: "#C65468",
  },
  other: {
    label: "Others",
    color: "#4D81E7",
  },
} satisfies ChartConfig;

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
      invoice: "B12341",
      amount: Math.random() * 1000,
      status: status,
      backgroundColor: backgroundColor,
      email: "m@example.com",
      transactionType,
    };
  });
}
const Dashboard: React.FC = () => {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);
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
                        <h2 className="text-2xl max-md:text-xl font-bold">
                          Total Balance
                        </h2>
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
            <div className="col-span-2 grid grid-cols-1 items-start justify-start gap-8">
              <Card className="border-0">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl max-md:text-xl font-bold">
                          Expense Catergory
                        </h2>
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
                <CardContent className="grid grid-cols-3 items-center">
                  <div className="max-md:col-span-3">
                    <ChartContainer
                      config={chartConfig}
                      className="mx-auto aspect-square max-h-[240px]"
                    >
                      <PieChart>
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                          data={chartData}
                          dataKey="visitors"
                          nameKey="browser"
                          innerRadius={60}
                          strokeWidth={5}
                          paddingAngle={10}
                          cornerRadius={6}
                        >
                          <Label
                            content={({ viewBox }) => {
                              if (
                                viewBox &&
                                "cx" in viewBox &&
                                "cy" in viewBox
                              ) {
                                return (
                                  <text
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                  >
                                    <tspan
                                      x={viewBox.cx}
                                      y={viewBox.cy}
                                      className="fill-foreground text-3xl font-bold"
                                    >
                                      {totalVisitors.toLocaleString()}
                                    </tspan>
                                    <tspan
                                      x={viewBox.cx}
                                      y={(viewBox.cy || 0) + 24}
                                      className="fill-muted-foreground"
                                    >
                                      Data Recorded
                                    </tspan>
                                  </text>
                                );
                              }
                            }}
                          />
                        </Pie>
                      </PieChart>
                    </ChartContainer>
                  </div>
                  <div className="col-span-2 max-md:col-span-3">
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
                            Others (19.2%)
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
              <div className="grid grid-cols-2 max-md:grid-cols-1 items-start justify-start gap-8">
                <Card className="border-0 w-full overflow-hidden">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl max-md:text-xl font-bold">
                            Income Analysis
                          </h2>
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
                  <CardContent className="grid grid-cols-1 gap-6">
                    <div>
                      <h1 className="text-4xl max-md:text-3xl font-extrabold">
                        $12,456,315
                      </h1>
                      <div className="flex items-center gap-3 my-3">
                        <p className="text-primary bg-primary-100 font-bold text-base max-md:text-sm py-1 px-2 rounded-lg">
                          <i className="ri-arrow-right-up-line me-1"></i>
                          -2.1%
                        </p>
                        <p>VS This Month</p>
                      </div>
                    </div>
                    {/* <div className="mx-auto max-h-[140]"> */}
                    <ChartContainer config={IncomeConfig}>
                      <BarChart
                        accessibilityLayer
                        data={IncomeData}
                        margin={{
                          top: 20,
                        }}
                      >
                        <CartesianGrid stroke="#EDF1F3" vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          tickMargin={10}
                          axisLine={false}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" fill="#E7854D" radius={8} />
                      </BarChart>
                    </ChartContainer>
                    {/* </div> */}
                  </CardContent>
                </Card>
                <Card className="border-0">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl max-md:text-xl font-bold">
                            Expense Analysis
                          </h2>
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
                  <CardContent className="grid grid-cols-1 gap-6">
                    <div>
                      <h1 className="text-4xl max-md:text-3xl font-extrabold">
                        $12,456,315
                      </h1>
                      <div className="flex items-center gap-3 my-3">
                        <p className="text-error bg-error-100 font-bold text-base max-md:text-sm py-1 px-2 rounded-lg">
                          <i className="ri-arrow-right-down-line me-1"></i>
                          -2.1%
                        </p>
                        <p>VS This Month</p>
                      </div>
                    </div>
                    {/* <div className="mx-auto max-h-[140]"> */}
                    <ChartContainer config={ExpenseConfig}>
                      <LineChart
                        accessibilityLayer
                        data={ExpenseData}
                        margin={{
                          left: 12,
                          right: 12,
                        }}
                      >
                        <CartesianGrid stroke="#EDF1F3" vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                          dataKey="desktop"
                          type="natural"
                          stroke="#4D81E7"
                          strokeWidth={3}
                          dot={{
                            fill: "white",
                          }}
                          activeDot={{
                            r: 6,
                          }}
                        />
                      </LineChart>
                    </ChartContainer>
                    {/* </div> */}
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="grid grid-cols-1 items-start justify-start flex-col max-md:col-span-2 gap-8">
              <Card className="border-0">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl max-md:text-xl font-bold">
                          My Pocked Plans
                        </h2>
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
            <div className="grid grid-cols-1 items-start justify-start gap-8">
              <div className="grid grid-cols-2 max-md:grid-cols-1 items-start justify-start gap-8">
                <Card className="border-0 w-full overflow-hidden">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl max-md:text-xl font-bold">
                            Income Analysis
                          </h2>
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
                  <CardContent className="grid grid-cols-1 gap-6">
                    <div>
                      <h1 className="text-4xl max-md:text-3xl font-extrabold">
                        $12,456,315
                      </h1>
                      <div className="flex items-center gap-3 my-3">
                        <p className="text-primary bg-primary-100 font-bold text-base max-md:text-sm py-1 px-2 rounded-lg">
                          <i className="ri-arrow-right-up-line me-1"></i>
                          -2.1%
                        </p>
                        <p>VS This Month</p>
                      </div>
                    </div>
                    {/* <div className="mx-auto max-h-[140]"> */}
                    <ChartContainer config={IncomeConfig}>
                      <BarChart
                        accessibilityLayer
                        data={IncomeData}
                        margin={{
                          top: 20,
                        }}
                      >
                        <CartesianGrid stroke="#EDF1F3" vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          tickMargin={10}
                          axisLine={false}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" fill="#E7854D" radius={8} />
                      </BarChart>
                    </ChartContainer>
                    {/* </div> */}
                  </CardContent>
                </Card>
                <Card className="border-0">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl max-md:text-xl font-bold">
                            Expense Analysis
                          </h2>
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
                  <CardContent className="grid grid-cols-1 gap-6">
                    <div>
                      <h1 className="text-4xl max-md:text-3xl font-extrabold">
                        $12,456,315
                      </h1>
                      <div className="flex items-center gap-3 my-3">
                        <p className="text-error bg-error-100 font-bold text-base max-md:text-sm py-1 px-2 rounded-lg">
                          <i className="ri-arrow-right-down-line me-1"></i>
                          -2.1%
                        </p>
                        <p>VS This Month</p>
                      </div>
                    </div>
                    {/* <div className="mx-auto max-h-[140]"> */}
                    <ChartContainer config={ExpenseConfig}>
                      <LineChart
                        accessibilityLayer
                        data={ExpenseData}
                        margin={{
                          left: 12,
                          right: 12,
                        }}
                      >
                        <CartesianGrid stroke="#EDF1F3" vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                          dataKey="desktop"
                          type="natural"
                          stroke="#4D81E7"
                          strokeWidth={3}
                          dot={{
                            fill: "white",
                          }}
                          activeDot={{
                            r: 6,
                          }}
                        />
                      </LineChart>
                    </ChartContainer>
                    {/* </div> */}
                  </CardContent>
                </Card>
              </div>
              <Card className="border-0">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl max-md:text-xl font-bold">
                          Expense Catergory
                        </h2>
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
                <CardContent className="grid grid-cols-3 items-center">
                  <div className="max-md:col-span-3">
                    <ChartContainer
                      config={chartConfig}
                      className="mx-auto aspect-square max-h-[240px]"
                    >
                      <PieChart>
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                          data={chartData}
                          dataKey="visitors"
                          nameKey="browser"
                          innerRadius={60}
                          strokeWidth={5}
                          paddingAngle={10}
                          cornerRadius={6}
                        >
                          <Label
                            content={({ viewBox }) => {
                              if (
                                viewBox &&
                                "cx" in viewBox &&
                                "cy" in viewBox
                              ) {
                                return (
                                  <text
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                  >
                                    <tspan
                                      x={viewBox.cx}
                                      y={viewBox.cy}
                                      className="fill-foreground text-3xl font-bold"
                                    >
                                      {totalVisitors.toLocaleString()}
                                    </tspan>
                                    <tspan
                                      x={viewBox.cx}
                                      y={(viewBox.cy || 0) + 24}
                                      className="fill-muted-foreground"
                                    >
                                      Data Recorded
                                    </tspan>
                                  </text>
                                );
                              }
                            }}
                          />
                        </Pie>
                      </PieChart>
                    </ChartContainer>
                  </div>
                  <div className="col-span-2 max-md:col-span-3">
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
                            Others (19.2%)
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
            <div className="grid grid-cols-1 items-start justify-start col-span-2 gap-8">
              <div className="">
                <Card className="border-0">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl max-md:text-xl font-bold">
                            Balance Statistics
                          </h2>
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
                    <div className="mx-auto  h-full">
                      <ChartContainer config={BalanceConfig}>
                        <BarChart
                          accessibilityLayer
                          data={BalanceData}
                          margin={{
                            top: 20,
                          }}
                        >
                          <CartesianGrid stroke="#EDF1F3" vertical={false} />
                          <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                          />
                          <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                          />
                          <Bar dataKey="desktop" fill="#31B099" radius={8} />
                        </BarChart>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card className="border-0">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl max-md:text-xl font-bold">
                          Balance Statistics
                        </h2>
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
                <CardContent>asd</CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Dashboard;

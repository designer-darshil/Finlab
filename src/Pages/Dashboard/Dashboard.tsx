import { useEffect, useState } from "react";
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
async function getData(): Promise<Payment[]> {
  return new Array(85).fill(null).map(() => ({
    id: "728ed52f",
    amount: Math.random() * 10000,
    status: "pending",
    email: "m@example.com",
  }));
}

const Dashboard = () => {
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
            <div className="grid grid-cols-1 items-start justify-start flex-col gap-8">
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
              <Card className="border-0">
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
            <div className="grid grid-cols-1 items-start justify-start flex-col gap-8">
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
                                My Pocket Plans: Personalized financial
                                strategies and savings plans tailored to help
                                you achieve your financial goals.
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
                      <div className="w-14 h-14 rounded-lg bg-secondary-200"></div>
                      <div>
                        <h1 className="font-semibold text-lg">New Car</h1>
                        <p className="text-secondary-300">$5.000,00</p>
                      </div>
                    </div>
                    <div className="border border-secondary-200 p-5 rounded-xl flex flex-col items-start gap-6">
                      <div className="w-14 h-14 rounded-lg bg-secondary-200"></div>
                      <div>
                        <h1 className="font-semibold text-lg">New Car</h1>
                        <p className="text-secondary-300">$5.000,00</p>
                      </div>
                    </div>
                    <div className="border border-secondary-200 p-5 rounded-xl flex flex-col items-start gap-6">
                      <div className="w-14 h-14 rounded-lg bg-secondary-200"></div>
                      <div>
                        <h1 className="font-semibold text-lg">New Car</h1>
                        <p className="text-secondary-300">$5.000,00</p>
                      </div>
                    </div>
                    <div className="border border-secondary-200 p-5 rounded-xl flex flex-col items-start gap-6">
                      <div className="w-14 h-14 rounded-lg bg-secondary-200"></div>
                      <div>
                        <h1 className="font-semibold text-lg">New Car</h1>
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

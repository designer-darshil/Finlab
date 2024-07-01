import React from "react";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard: React.FC = () => {
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
      <Tabs defaultValue="account" className="w-full">
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
        <TabsContent value="Transaction">
          <div className="grid grid-cols-1 bg-white rounded-lg p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
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

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings: React.FC = () => {
  return (
    <>
      <div className="text-white">
        <div className="mb-8">
          <h1 className="text-white text-3xl font-semibold mb-3">Settings</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-[#A2A6AA]">
                  Settings
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">
                  Personal Information
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Tabs
        defaultValue="PersonalInfo"
        className="grid grid-cols-3 max-md:grid-cols-1 gap-8"
      >
        <div className="col-span-1 max-md:hidden">
          <Card className="border-0">
            <CardContent className="p-4">
              <TabsList className="bg-transparent flex-col h-auto w-full">
                <TabsTrigger
                  className="data-[state=active]:bg-primary block w-full p-6 rounded-xl text-start"
                  value="PersonalInfo"
                >
                  <div className="flex">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <i className="ri-user-3-line text-2xl"></i>
                    </div>
                    <h6 className="text-white text-lg">Personal Information</h6>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-primary block w-full p-6 rounded-xl text-start"
                  value="preferences"
                >
                  <div className="flex">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <i className="ri-user-3-line text-2xl"></i>
                    </div>
                    <h6 className="text-white text-lg">Preferences</h6>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-primary block w-full p-6 rounded-xl text-start"
                  value="security"
                >
                  <div className="flex">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <i className="ri-user-3-line text-2xl"></i>
                    </div>
                    <h6 className="text-white text-lg">Security</h6>
                  </div>
                </TabsTrigger>
              </TabsList>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2 max-md:col-span-1">
          <Card className="border-0">
            <div className="hidden max-md:block">
              <TabsList className="bg-transparent overflow-auto justify-start h-auto w-full">
                <TabsTrigger
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-primary data-[state=active]:border-b-primary rounded-none block w-full p-6 shadow-none border-0 text-start"
                  value="PersonalInfo"
                >
                  <h6 className="text-lg">Personal Information</h6>
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-primary data-[state=active]:border-b-primary rounded-none block w-full p-6 shadow-none border-0 text-start"
                  value="preferences"
                >
                  <h6 className="text-lg">Preferences</h6>
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-primary data-[state=active]:border-b-primary rounded-none block w-full p-6 shadow-none border-0 text-start"
                  value="security"
                >
                  <h6 className="text-lg">Security</h6>
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="PersonalInfo">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl max-md:text-xl font-bold">
                        PersonalInfo
                      </h2>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <i className="ri-information-line text-gray-400 font-light text-lg"></i>
                          </TooltipTrigger>
                          <TooltipContent className="w-52 font-normal tracking-normal">
                            <p>
                              Total Balance: The overall sum of all your account
                              balances, including cash, investments, and
                              savings.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
            </TabsContent>
            <TabsContent value="preferences">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl max-md:text-xl font-bold">
                        preferences
                      </h2>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <i className="ri-information-line text-gray-400 font-light text-lg"></i>
                          </TooltipTrigger>
                          <TooltipContent className="w-52 font-normal tracking-normal">
                            <p>
                              Total Balance: The overall sum of all your account
                              balances, including cash, investments, and
                              savings.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
            </TabsContent>
            <TabsContent value="security">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl max-md:text-xl font-bold">
                        security
                      </h2>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <i className="ri-information-line text-gray-400 font-light text-lg"></i>
                          </TooltipTrigger>
                          <TooltipContent className="w-52 font-normal tracking-normal">
                            <p>
                              Total Balance: The overall sum of all your account
                              balances, including cash, investments, and
                              savings.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
            </TabsContent>
          </Card>
        </div>
      </Tabs>
    </>
  );
};

export default Settings;

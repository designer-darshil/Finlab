import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import MyPagination from "@/components/MyPagination/MyPagination";
interface ContentData {
  title: string;
  description: string;
  buttons: string[];
  likes: number;
}
const generateRandomLikes = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const itemsPerPage = 9;
const HelpCenter: React.FC = () => {
  const contentData: ContentData[] = [
    {
      title: "How can I link my bank account to the dashboard?",
      description: `You can link your bank account by navigating to the 'Account Settings' section, selecting 'Add Bank Account,' and following the prompts to securely connect your bank.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "What types of accounts can I add to my finance dashboard?",
      description: `You can add various types of accounts, including checking and savings accounts, credit cards, investment accounts, and loan accounts.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "Is my financial data secure?",
      description: `Yes, your financial data is encrypted and securely stored. We use industry-standard security measures to protect your information.
`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "How often is my financial information updated?",
      description: `Your financial information is updated in real-time or as frequently as your financial institutions provide data. Typically, this is daily.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "Can I set budget alerts and notifications?",
      description: `Yes, you can set budget alerts and notifications in the 'Settings' section. Customize your alerts to receive notifications about overspending, bill due dates, and more.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "How do I categorize my expenses?",
      description: `You can categorize your expenses by going to the 'Expense Analysis' section, selecting a transaction, and choosing the appropriate category from the drop-down menu.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "Can I export my financial data?",
      description: `Yes, you can export your financial data by navigating to the 'Reports' section and selecting the 'Export' option. You can choose to export your data in various formats, such as CSV or PDF.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "What should I do if I notice an error in my account balances?",
      description: `If you notice an error in your account balances, please contact our support team immediately. You can also verify your account details and ensure that all transactions are correctly categorized.
`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "How can I track my investment performance?",
      description: `You can track your investment performance by going to the 'Investment Analysis' section. Here, you'll find detailed reports on your investment growth, returns, and portfolio distribution.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "Is there a mobile app available for this dashboard?",
      description: `Yes, we have a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play Store and access your finance dashboard on the go`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "How do I update my personal information?",
      description: `You can update your personal information by going to the 'Profile' section and editing your details. Make sure to save your changes.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "Can I track multiple currencies?",
      description: `Yes, our dashboard supports multiple currencies. You can select your preferred currency in the 'Settings' section.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "How do I set financial goals?",
      description: `You can set financial goals by navigating to the 'Goals' section, clicking 'Add New Goal,' and following the prompts to define your target amount and timeline.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "What should I do if I forget my password?",
      description: `If you forget your password, click on the 'Forgot Password' link on the login page. Follow the instructions to reset your password via email.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "How can I customize my dashboard?",
      description: `You can customize your dashboard by going to the 'Dashboard Settings' section. Here, you can rearrange widgets, choose different themes, and personalize your view.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "Can I integrate other financial apps with this dashboard?",
      description: `Yes, our dashboard supports integration with various financial apps. Check the 'Integrations' section for a list of supported apps and follow the instructions to connect them.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "How do I manage my subscriptions?",
      description: `You can manage your subscriptions by going to the 'Subscriptions' section. Here, you'll find a list of your active subscriptions and options to modify or cancel them.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "Is there a way to track cash transactions?",
      description: `Yes, you can manually enter cash transactions by going to the 'Transactions' section and clicking 'Add Transaction.' Fill in the details and categorize it accordingly.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "How can I view my credit score?",
      description: `You can view your credit score in the 'Credit Score' section. Ensure that you have linked your credit account for the most accurate and up-to-date information.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "Can I share my dashboard with a financial advisor?",
      description: `Yes, you can share your dashboard with a financial advisor by inviting them through the 'Share Dashboard' feature. They will have read-only access to your financial data.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "What is the difference between net worth and total balance?",
      description: `Total balance refers to the sum of all your account balances, while net worth is calculated by subtracting your total liabilities from your total assets.
`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "How do I delete an account from my dashboard?",
      description: `You can delete an account by going to the 'Account Settings' section, selecting the account you wish to remove, and clicking 'Delete Account.'`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "Can I track my loan payments?",
      description: `Yes, you can track your loan payments by adding your loan accounts to the dashboard. The 'Loan Analysis' section provides detailed information on your payments and outstanding balance.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "How do I set up automatic categorization of transactions?",
      description: `You can set up automatic categorization by creating rules in the 'Transactions' section. Define criteria for transactions, and they will be automatically categorized based on your rules.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
    {
      title: "What is the difference between planned and actual expenses?",
      description: `Planned expenses are your budgeted amounts for specific categories, while actual expenses are the amounts you've actually spent. Compare these in the 'Budget Analysis' section.`,
      buttons: ["Payment", "Transaction", "Send"],
      likes: generateRandomLikes(10, 100),
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(contentData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = contentData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="text-white">
        <div className="mb-8">
          <h1 className="text-white text-3xl font-semibold mb-3">
            Help & Center
          </h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-[#A2A6AA]">
                  Help & Center
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">
                  How do make transaction
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
        <div className="col-span-1">
          <Card className="border-0">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-col gap-3 items-start justify-start mb-3">
                  <h2 className="text-secondary-500 text-2xl max-md:text-xl font-bold">
                    Total Balance
                  </h2>
                  <p className="text-base text-secondary-400">
                    Type your question or search by keyword here
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-full px-6 py-5 ps-16 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-secondary-500 placeholder:text-secondary-400"
                />
                <div className="absolute left-0 top-0 h-full flex items-center justify-center w-16">
                  <i className="ri-search-line text-secondary-500 text-2xl"></i>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col justify-start items-start gap-2">
              <p className="text-secondary-500">Popular Search</p>
              <div className="flex items-center max-md:w-full gap-3">
                <button className="text-secondary-500 border border-secondary-200 hover:bg-secondary-100 max-md:text-sm px-4 max-md:px-2 py-3 rounded-lg hover:opacity-80">
                  Transfer
                </button>
                <button className="text-secondary-500 border border-secondary-200 hover:bg-secondary-100 max-md:text-sm px-4 max-md:px-2 py-3 rounded-lg hover:opacity-80">
                  Change card
                </button>
                <button className="text-secondary-500 border border-secondary-200 hover:bg-secondary-100 max-md:text-sm px-4 max-md:px-2 py-3 rounded-lg hover:opacity-80">
                  Flow
                </button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-2 max-md:col-span-1">
          <Card className="border-0">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl max-md:text-xl font-bold">
                      Frequently Asked Questions
                    </h2>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <i className="ri-information-line text-gray-400 font-light text-lg"></i>
                        </TooltipTrigger>
                        <TooltipContent className="w-52 font-normal tracking-normal">
                          <p>
                            Total Balance: The overall sum of all your account
                            balances, including cash, investments, and savings.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <div className="w-full h-[1px] bg-secondary-100 mb-6"></div>
            <CardContent>
              <div className="grid grid-cols-1 items-center justify-start gap-8 w-full">
                {paginatedData.map((content, index) => (
                  <div
                    key={index}
                    className="border border-secondary-200 rounded-2xl p-6 flex flex-col gap-8 w-full"
                  >
                    <div className="flex flex-col gap-4 w-full">
                      <h5 className="text-lg max-md:text-base text-secondary-500 font-bold">
                        {content.title}
                      </h5>
                      <h5 className="text-secondary-300 max-md:text-sm">
                        {content.description}
                      </h5>
                    </div>
                    <div className="flex max-md:flex-col justify-start items-center max-md:items-start gap-6">
                      <div className="flex items-center gap-4 max-md:gap-2 w-full">
                        {content.buttons.map((button, btnIndex) => (
                          <button
                            key={btnIndex}
                            className="text-secondary-500 border border-secondary-200 hover:bg-secondary-100 max-md:text-sm px-4 max-md:px-2 py-3 rounded-lg hover:opacity-80"
                          >
                            {button}
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 w-auto">
                        <i className="ri-thumb-up-line text-lg"></i>
                        <span>{content.likes}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <MyPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;

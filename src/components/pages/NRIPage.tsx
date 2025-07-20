import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Globe, 
  DollarSign, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Home,
  Banknote,
  Calculator,
  Shield
} from 'lucide-react'

export function NRIPage() {
  const [selectedCountry, setSelectedCountry] = useState('India')

  const nriData = {
    usIncome: 150000,
    indiaIncome: 500000, // INR
    totalTaxLiability: 28500,
    treatyBenefits: 4200,
    complianceScore: 85,
    nextDeadline: 'July 31, 2024'
  }

  const accounts = [
    {
      type: 'NRE Account',
      bank: 'HDFC Bank',
      balance: 2500000, // INR
      currency: 'INR',
      repatriable: true,
      taxable: false,
      purpose: 'Repatriable savings'
    },
    {
      type: 'NRO Account',
      bank: 'ICICI Bank',
      balance: 800000, // INR
      currency: 'INR',
      repatriable: false,
      taxable: true,
      purpose: 'India-sourced income'
    },
    {
      type: 'FCNR Account',
      bank: 'SBI',
      balance: 15000, // USD
      currency: 'USD',
      repatriable: true,
      taxable: false,
      purpose: 'Foreign currency deposits'
    }
  ]

  const investments = [
    {
      type: 'Indian Mutual Funds',
      value: 1200000, // INR
      taxImplication: 'Complex - PFIC rules apply',
      recommendation: 'Consider US ETFs instead',
      status: 'review'
    },
    {
      type: 'Indian Real Estate',
      value: 8000000, // INR
      taxImplication: 'Capital gains on sale',
      recommendation: 'Hold for long-term',
      status: 'optimal'
    },
    {
      type: 'US 401(k)',
      value: 85000, // USD
      taxImplication: 'Tax-deferred growth',
      recommendation: 'Maximize contributions',
      status: 'optimal'
    },
    {
      type: 'US Roth IRA',
      value: 35000, // USD
      taxImplication: 'Tax-free growth',
      recommendation: 'Continue contributions',
      status: 'optimal'
    }
  ]

  const complianceItems = [
    {
      requirement: 'FBAR Filing',
      deadline: 'April 15, 2024 (Extended to Oct 15)',
      status: 'completed',
      description: 'Report foreign bank accounts > $10,000'
    },
    {
      requirement: 'Form 8938 (FATCA)',
      deadline: 'April 15, 2024',
      status: 'completed',
      description: 'Report foreign financial assets'
    },
    {
      requirement: 'India Tax Return',
      deadline: 'July 31, 2024',
      status: 'pending',
      description: 'File Indian income tax return'
    },
    {
      requirement: 'Form 3520',
      deadline: 'April 15, 2024',
      status: 'not_required',
      description: 'Foreign trust reporting'
    }
  ]

  const repatriationPlan = {
    totalRepatriableAmount: 3500000, // INR
    annualLimit: 1000000, // USD equivalent
    plannedRepatriation: [
      { year: 2024, amount: 500000, purpose: 'Investment diversification' },
      { year: 2025, amount: 750000, purpose: 'US real estate down payment' },
      { year: 2026, amount: 600000, purpose: 'Education expenses' }
    ]
  }

  const taxOptimizations = [
    {
      strategy: 'US-India Tax Treaty Benefits',
      description: 'Claim treaty benefits to avoid double taxation',
      potentialSavings: 4200,
      complexity: 'Medium',
      deadline: 'April 15, 2024'
    },
    {
      strategy: 'Foreign Tax Credit',
      description: 'Use Indian taxes paid as credit against US taxes',
      potentialSavings: 3800,
      complexity: 'High',
      deadline: 'April 15, 2024'
    },
    {
      strategy: 'PFIC Election',
      description: 'Make QEF election for Indian mutual funds',
      potentialSavings: 2500,
      complexity: 'Very High',
      deadline: 'April 15, 2024'
    },
    {
      strategy: 'Repatriation Timing',
      description: 'Optimize timing of fund repatriation for tax efficiency',
      potentialSavings: 1800,
      complexity: 'Medium',
      deadline: 'December 31, 2024'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">NRI Services</h1>
          <p className="text-muted-foreground">
            Cross-border financial planning for Non-Resident Indians
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Compliance Report
          </Button>
          <Button>
            <Calculator className="mr-2 h-4 w-4" />
            Tax Calculator
          </Button>
        </div>
      </div>

      {/* NRI Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">US Income</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${nriData.usIncome.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">
              Annual gross income
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">India Income</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{nriData.indiaIncome.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">
              Rental & investment income
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Treaty Benefits</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${nriData.treatyBenefits.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">
              Tax savings this year
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{nriData.complianceScore}/100</div>
            <div className="text-xs text-muted-foreground">
              Next deadline: {nriData.nextDeadline}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="accounts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="accounts">NRI Accounts</TabsTrigger>
          <TabsTrigger value="investments">Investments</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="repatriation">Repatriation</TabsTrigger>
          <TabsTrigger value="tax-optimization">Tax Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="accounts" className="space-y-4">
          <div className="grid gap-4">
            {accounts.map((account, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Banknote className="mr-2 h-5 w-5" />
                      {account.type} - {account.bank}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant={account.repatriable ? 'secondary' : 'outline'}>
                        {account.repatriable ? 'Repatriable' : 'Non-Repatriable'}
                      </Badge>
                      <Badge variant={account.taxable ? 'destructive' : 'secondary'}>
                        {account.taxable ? 'Taxable' : 'Tax-Free'}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>{account.purpose}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Balance</p>
                      <p className="text-2xl font-bold">
                        {account.currency === 'INR' ? '₹' : '$'}{account.balance.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Currency</p>
                      <p className="text-lg font-bold">{account.currency}</p>
                    </div>
                    <div className="flex items-end">
                      <Button variant="outline" className="w-full">
                        Manage Account
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="investments" className="space-y-4">
          <div className="grid gap-4">
            {investments.map((investment, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      {investment.type}
                    </CardTitle>
                    <Badge variant={
                      investment.status === 'optimal' ? 'secondary' : 
                      investment.status === 'review' ? 'destructive' : 'default'
                    }>
                      {investment.status === 'optimal' ? 'Optimal' : 'Needs Review'}
                    </Badge>
                  </div>
                  <CardDescription>{investment.taxImplication}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Current Value</p>
                      <p className="text-2xl font-bold">
                        {investment.type.includes('Indian') ? '₹' : '$'}{investment.value.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Recommendation</p>
                      <p className="text-sm">{investment.recommendation}</p>
                    </div>
                    <div className="flex items-end">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Compliance Checklist
              </CardTitle>
              <CardDescription>
                Track your US and India tax compliance requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        item.status === 'completed' ? 'bg-green-50' : 
                        item.status === 'pending' ? 'bg-yellow-50' : 'bg-gray-50'
                      }`}>
                        {item.status === 'completed' ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : item.status === 'pending' ? (
                          <AlertTriangle className="h-6 w-6 text-yellow-500" />
                        ) : (
                          <FileText className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{item.requirement}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <p className="text-xs text-muted-foreground">Deadline: {item.deadline}</p>
                      </div>
                    </div>
                    <Badge variant={
                      item.status === 'completed' ? 'secondary' : 
                      item.status === 'pending' ? 'destructive' : 'outline'
                    }>
                      {item.status === 'completed' ? 'Completed' : 
                       item.status === 'pending' ? 'Pending' : 'Not Required'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="repatriation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Repatriation Planning
              </CardTitle>
              <CardDescription>
                Plan the transfer of funds from India to the US
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Repatriable Amount</p>
                    <p className="text-2xl font-bold">₹{repatriationPlan.totalRepatriableAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Annual Limit</p>
                    <p className="text-2xl font-bold">${repatriationPlan.annualLimit.toLocaleString()}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Planned Repatriation Schedule</h4>
                  <div className="space-y-3">
                    {repatriationPlan.plannedRepatriation.map((plan, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{plan.year}</p>
                          <p className="text-sm text-muted-foreground">{plan.purpose}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹{plan.amount.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">
                            ~${Math.round(plan.amount / 83).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tax-optimization" className="space-y-4">
          <div className="grid gap-4">
            {taxOptimizations.map((optimization, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Calculator className="mr-2 h-5 w-5" />
                      {optimization.strategy}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant={
                        optimization.complexity === 'Low' ? 'secondary' : 
                        optimization.complexity === 'Medium' ? 'default' : 
                        optimization.complexity === 'High' ? 'destructive' : 'destructive'
                      }>
                        {optimization.complexity} complexity
                      </Badge>
                      <Badge variant="outline">
                        Due: {optimization.deadline}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>{optimization.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Potential Savings</p>
                      <p className="text-2xl font-bold text-green-600">
                        ${optimization.potentialSavings.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Complexity</p>
                      <p className="text-lg font-bold">{optimization.complexity}</p>
                    </div>
                    <div className="flex items-end">
                      <Button variant="outline" className="w-full">
                        Implement Strategy
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
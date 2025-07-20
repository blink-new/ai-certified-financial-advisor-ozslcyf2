import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Receipt, 
  TrendingDown, 
  DollarSign, 
  Calendar,
  FileText,
  AlertTriangle,
  CheckCircle,
  Calculator,
  Target
} from 'lucide-react'

export function TaxPlanningPage() {
  const [selectedYear, setSelectedYear] = useState('2024')

  const taxData = {
    estimatedTax: 28500,
    effectiveRate: 18.2,
    marginalRate: 24,
    totalDeductions: 18400,
    standardDeduction: 14600,
    itemizedDeductions: 18400,
    taxCredits: 2500,
    potentialSavings: 4200
  }

  const harvestingOpportunities = [
    {
      security: 'GOOGL',
      currentValue: 6219,
      costBasis: 6500,
      unrealizedLoss: -281,
      potentialSavings: 67,
      washSaleRisk: false
    },
    {
      security: 'META',
      currentValue: 4850,
      costBasis: 5200,
      unrealizedLoss: -350,
      potentialSavings: 84,
      washSaleRisk: false
    },
    {
      security: 'NFLX',
      currentValue: 2100,
      costBasis: 2400,
      unrealizedLoss: -300,
      potentialSavings: 72,
      washSaleRisk: true
    }
  ]

  const strategies = [
    {
      strategy: 'Roth IRA Conversion',
      description: 'Convert $15,000 from Traditional IRA to Roth IRA',
      currentYearImpact: '+$3,600 tax',
      longTermBenefit: '$45,000 tax savings in retirement',
      complexity: 'Medium',
      deadline: 'December 31, 2024'
    },
    {
      strategy: 'HSA Maximization',
      description: 'Increase HSA contribution to annual maximum',
      currentYearImpact: '-$1,200 tax',
      longTermBenefit: 'Triple tax advantage',
      complexity: 'Low',
      deadline: 'December 31, 2024'
    },
    {
      strategy: 'Charitable Giving',
      description: 'Donate appreciated securities instead of cash',
      currentYearImpact: '-$2,400 tax',
      longTermBenefit: 'Avoid capital gains tax',
      complexity: 'Medium',
      deadline: 'December 31, 2024'
    },
    {
      strategy: 'Tax-Loss Harvesting',
      description: 'Realize losses to offset capital gains',
      currentYearImpact: '-$931 tax',
      longTermBenefit: 'Optimize portfolio tax efficiency',
      complexity: 'High',
      deadline: 'December 31, 2024'
    }
  ]

  const deductions = [
    {
      category: 'Mortgage Interest',
      amount: 12000,
      utilized: 12000,
      limit: 750000,
      percentage: 100
    },
    {
      category: 'State & Local Taxes',
      amount: 10000,
      utilized: 10000,
      limit: 10000,
      percentage: 100
    },
    {
      category: 'Charitable Contributions',
      amount: 8400,
      utilized: 8400,
      limit: 'No limit',
      percentage: 85
    },
    {
      category: 'Medical Expenses',
      amount: 2800,
      utilized: 0,
      limit: '7.5% AGI threshold',
      percentage: 0
    }
  ]

  const quarterlyEstimates = [
    { quarter: 'Q1 2024', dueDate: 'April 15, 2024', amount: 7125, status: 'paid' },
    { quarter: 'Q2 2024', dueDate: 'June 17, 2024', amount: 7125, status: 'paid' },
    { quarter: 'Q3 2024', dueDate: 'September 16, 2024', amount: 7125, status: 'paid' },
    { quarter: 'Q4 2024', dueDate: 'January 15, 2025', amount: 7125, status: 'upcoming' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tax Planning</h1>
          <p className="text-muted-foreground">
            Advanced tax optimization strategies and loss harvesting
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Tax Documents
          </Button>
          <Button>
            <Calculator className="mr-2 h-4 w-4" />
            Tax Calculator
          </Button>
        </div>
      </div>

      {/* Tax Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estimated Tax 2024</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${taxData.estimatedTax.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">
              Effective rate: {taxData.effectiveRate}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Potential Savings</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${taxData.potentialSavings.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">
              Through optimization strategies
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Deductions</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${taxData.totalDeductions.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">
              Itemized vs ${taxData.standardDeduction.toLocaleString()} standard
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Marginal Tax Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{taxData.marginalRate}%</div>
            <div className="text-xs text-muted-foreground">
              Current tax bracket
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="strategies" className="space-y-4">
        <TabsList>
          <TabsTrigger value="strategies">Tax Strategies</TabsTrigger>
          <TabsTrigger value="harvesting">Loss Harvesting</TabsTrigger>
          <TabsTrigger value="deductions">Deductions</TabsTrigger>
          <TabsTrigger value="quarterly">Quarterly Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="strategies" className="space-y-4">
          <div className="grid gap-4">
            {strategies.map((strategy, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Calculator className="mr-2 h-5 w-5" />
                      {strategy.strategy}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant={strategy.complexity === 'Low' ? 'secondary' : strategy.complexity === 'Medium' ? 'default' : 'destructive'}>
                        {strategy.complexity} complexity
                      </Badge>
                      <Badge variant="outline">
                        Due: {strategy.deadline}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Current Year Impact</p>
                      <p className={`text-lg font-bold ${strategy.currentYearImpact.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>
                        {strategy.currentYearImpact}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Long-term Benefit</p>
                      <p className="text-lg font-bold text-blue-600">{strategy.longTermBenefit}</p>
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

        <TabsContent value="harvesting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingDown className="mr-2 h-5 w-5" />
                Tax-Loss Harvesting Opportunities
              </CardTitle>
              <CardDescription>
                Realize losses to offset capital gains and reduce tax liability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {harvestingOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-red-600">{opportunity.security}</span>
                      </div>
                      <div>
                        <p className="font-medium">{opportunity.security}</p>
                        <p className="text-sm text-muted-foreground">
                          Current: ${opportunity.currentValue.toLocaleString()} | 
                          Cost: ${opportunity.costBasis.toLocaleString()}
                        </p>
                        {opportunity.washSaleRisk && (
                          <div className="flex items-center mt-1">
                            <AlertTriangle className="mr-1 h-3 w-3 text-amber-500" />
                            <span className="text-xs text-amber-600">Wash sale risk</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-red-600">${Math.abs(opportunity.unrealizedLoss).toLocaleString()} loss</p>
                      <p className="text-sm text-green-600">${opportunity.potentialSavings} tax savings</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2"
                        disabled={opportunity.washSaleRisk}
                      >
                        {opportunity.washSaleRisk ? 'Wash Sale Risk' : 'Harvest Loss'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Total Potential Tax Savings</p>
                    <p className="text-sm text-muted-foreground">From available harvesting opportunities</p>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    ${harvestingOpportunities.reduce((sum, opp) => sum + (opp.washSaleRisk ? 0 : opp.potentialSavings), 0)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deductions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Itemized Deductions</CardTitle>
              <CardDescription>
                Current deductions vs. standard deduction of ${taxData.standardDeduction.toLocaleString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {deductions.map((deduction, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{deduction.category}</span>
                        {deduction.percentage === 100 ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : deduction.percentage === 0 ? (
                          <AlertTriangle className="h-4 w-4 text-amber-500" />
                        ) : null}
                      </div>
                      <div className="text-right">
                        <span className="font-medium">${deduction.utilized.toLocaleString()}</span>
                        <p className="text-sm text-muted-foreground">
                          of ${typeof deduction.limit === 'string' ? deduction.limit : deduction.limit.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <Progress value={deduction.percentage} className="h-2" />
                    {deduction.percentage === 0 && (
                      <p className="text-xs text-amber-600">
                        Below threshold - consider bundling strategies
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quarterly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Quarterly Estimated Payments
              </CardTitle>
              <CardDescription>
                Track and manage your quarterly tax payments for 2024
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {quarterlyEstimates.map((payment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        payment.status === 'paid' ? 'bg-green-50' : 'bg-blue-50'
                      }`}>
                        {payment.status === 'paid' ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                          <Calendar className="h-6 w-6 text-blue-500" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{payment.quarter}</p>
                        <p className="text-sm text-muted-foreground">Due: {payment.dueDate}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${payment.amount.toLocaleString()}</p>
                      <Badge variant={payment.status === 'paid' ? 'secondary' : 'default'}>
                        {payment.status === 'paid' ? 'Paid' : 'Upcoming'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Total Quarterly Payments</p>
                    <p className="text-sm text-muted-foreground">For tax year 2024</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    ${quarterlyEstimates.reduce((sum, payment) => sum + payment.amount, 0).toLocaleString()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
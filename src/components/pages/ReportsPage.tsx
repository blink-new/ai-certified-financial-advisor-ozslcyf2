import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  FileText, 
  Download, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  PieChart,
  BarChart3,
  Calendar,
  Target,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

export function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly')
  const [selectedReport, setSelectedReport] = useState('comprehensive')

  const financialHealthMetrics = {
    overallScore: 82,
    netWorthGrowth: 12.5,
    savingsRate: 27,
    debtToIncomeRatio: 15,
    emergencyFundMonths: 3.2,
    investmentDiversification: 85,
    creditUtilization: 18,
    retirementProgress: 78
  }

  const monthlyReports = [
    {
      month: 'December 2024',
      netWorth: 125000,
      income: 8500,
      expenses: 6200,
      savings: 2300,
      investmentGain: 1240,
      status: 'excellent'
    },
    {
      month: 'November 2024',
      netWorth: 123760,
      income: 8500,
      expenses: 6400,
      savings: 2100,
      investmentGain: -580,
      status: 'good'
    },
    {
      month: 'October 2024',
      netWorth: 122340,
      income: 8500,
      expenses: 6100,
      savings: 2400,
      investmentGain: 890,
      status: 'excellent'
    }
  ]

  const categoryBreakdown = [
    { category: 'Housing', amount: 2200, percentage: 35.5, budget: 2500, status: 'under' },
    { category: 'Transportation', amount: 850, percentage: 13.7, budget: 800, status: 'over' },
    { category: 'Food & Dining', amount: 680, percentage: 11.0, budget: 700, status: 'under' },
    { category: 'Utilities', amount: 320, percentage: 5.2, budget: 350, status: 'under' },
    { category: 'Entertainment', amount: 420, percentage: 6.8, budget: 400, status: 'over' },
    { category: 'Healthcare', amount: 280, percentage: 4.5, budget: 300, status: 'under' },
    { category: 'Shopping', amount: 650, percentage: 10.5, budget: 600, status: 'over' },
    { category: 'Other', amount: 800, percentage: 12.9, budget: 750, status: 'over' }
  ]

  const investmentPerformance = [
    { asset: 'US Stocks', allocation: 65, return: 11.2, benchmark: 10.8, performance: 'outperforming' },
    { asset: 'International Stocks', allocation: 20, return: 8.5, benchmark: 9.1, performance: 'underperforming' },
    { asset: 'Bonds', allocation: 10, return: 4.2, benchmark: 4.0, performance: 'outperforming' },
    { asset: 'REITs', allocation: 3, return: 15.8, benchmark: 14.2, performance: 'outperforming' },
    { asset: 'Cash', allocation: 2, return: 2.1, benchmark: 2.0, performance: 'matching' }
  ]

  const recommendations = [
    {
      category: 'Spending',
      title: 'Reduce Transportation Costs',
      description: 'Transportation spending is 6% above budget. Consider carpooling or public transit.',
      impact: 'Save $50/month',
      priority: 'medium'
    },
    {
      category: 'Investment',
      title: 'Rebalance Portfolio',
      description: 'US stocks allocation is 5% above target. Consider rebalancing.',
      impact: 'Reduce risk',
      priority: 'low'
    },
    {
      category: 'Emergency Fund',
      title: 'Increase Emergency Fund',
      description: 'Current emergency fund covers 3.2 months. Target is 6 months.',
      impact: 'Improve financial security',
      priority: 'high'
    },
    {
      category: 'Tax',
      title: 'Tax-Loss Harvesting',
      description: 'Potential $2,400 in tax savings from loss harvesting.',
      impact: 'Save $2,400',
      priority: 'high'
    }
  ]

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent'
    if (score >= 60) return 'Good'
    return 'Needs Improvement'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Reports</h1>
          <p className="text-muted-foreground">
            Comprehensive financial health reports and analytics
          </p>
        </div>
        <div className="flex space-x-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Financial Health Score */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5" />
            Financial Health Score
          </CardTitle>
          <CardDescription>
            Overall assessment of your financial well-being
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="text-center">
              <div className={`text-6xl font-bold ${getScoreColor(financialHealthMetrics.overallScore)}`}>
                {financialHealthMetrics.overallScore}
              </div>
              <p className="text-lg font-medium mt-2">{getScoreLabel(financialHealthMetrics.overallScore)}</p>
              <p className="text-sm text-muted-foreground">Overall Financial Health</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Net Worth Growth</span>
                <span className="text-sm font-bold text-green-600">+{financialHealthMetrics.netWorthGrowth}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Savings Rate</span>
                <span className="text-sm font-bold">{financialHealthMetrics.savingsRate}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Debt-to-Income Ratio</span>
                <span className="text-sm font-bold text-green-600">{financialHealthMetrics.debtToIncomeRatio}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Emergency Fund</span>
                <span className="text-sm font-bold text-yellow-600">{financialHealthMetrics.emergencyFundMonths} months</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="spending">Spending Analysis</TabsTrigger>
          <TabsTrigger value="investments">Investment Performance</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Worth</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$125,000</div>
                <div className="flex items-center text-xs text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +12.5% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Savings</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,300</div>
                <div className="flex items-center text-xs text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +9.5% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Investment Returns</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">+11.2%</div>
                <div className="text-xs text-muted-foreground">
                  Year-to-date return
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Credit Score</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">785</div>
                <div className="flex items-center text-xs text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +15 points
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
              <CardDescription>
                Track your financial progress over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyReports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        report.status === 'excellent' ? 'bg-green-50' : 'bg-blue-50'
                      }`}>
                        <Calendar className={`h-6 w-6 ${
                          report.status === 'excellent' ? 'text-green-500' : 'text-blue-500'
                        }`} />
                      </div>
                      <div>
                        <p className="font-medium">{report.month}</p>
                        <p className="text-sm text-muted-foreground">
                          Net Worth: ${report.netWorth.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Saved: ${report.savings.toLocaleString()}</p>
                      <p className={`text-sm ${report.investmentGain > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        Investment: {report.investmentGain > 0 ? '+' : ''}${report.investmentGain.toLocaleString()}
                      </p>
                    </div>
                    <Badge variant={report.status === 'excellent' ? 'secondary' : 'default'}>
                      {report.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="spending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="mr-2 h-5 w-5" />
                Spending Breakdown
              </CardTitle>
              <CardDescription>
                Analysis of your spending patterns by category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoryBreakdown.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{category.category}</span>
                        {category.status === 'over' ? (
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                        ) : (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                      <div className="text-right">
                        <span className="font-medium">${category.amount.toLocaleString()}</span>
                        <p className="text-sm text-muted-foreground">
                          {category.percentage}% | Budget: ${category.budget.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <Progress value={category.percentage} className="h-2" />
                    {category.status === 'over' && (
                      <p className="text-xs text-red-600">
                        ${category.amount - category.budget} over budget
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="investments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5" />
                Investment Performance
              </CardTitle>
              <CardDescription>
                Performance analysis vs benchmarks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {investmentPerformance.map((investment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">{investment.asset}</p>
                        <p className="text-sm text-muted-foreground">
                          {investment.allocation}% allocation
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{investment.return}% return</p>
                      <p className="text-sm text-muted-foreground">
                        vs {investment.benchmark}% benchmark
                      </p>
                    </div>
                    <Badge variant={
                      investment.performance === 'outperforming' ? 'secondary' : 
                      investment.performance === 'underperforming' ? 'destructive' : 'outline'
                    }>
                      {investment.performance}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Trends</CardTitle>
              <CardDescription>
                Long-term trends and patterns in your finances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                Trend analysis charts will be implemented with real data
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <div className="grid gap-4">
            {recommendations.map((rec, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      {rec.priority === 'high' ? (
                        <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
                      ) : rec.priority === 'medium' ? (
                        <TrendingUp className="mr-2 h-5 w-5 text-yellow-500" />
                      ) : (
                        <CheckCircle className="mr-2 h-5 w-5 text-blue-500" />
                      )}
                      {rec.title}
                    </CardTitle>
                    <Badge variant={
                      rec.priority === 'high' ? 'destructive' : 
                      rec.priority === 'medium' ? 'default' : 'secondary'
                    }>
                      {rec.priority} priority
                    </Badge>
                  </div>
                  <CardDescription>{rec.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Potential Impact</p>
                      <p className="text-lg font-bold text-green-600">{rec.impact}</p>
                    </div>
                    <Button variant="outline">
                      Take Action
                    </Button>
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
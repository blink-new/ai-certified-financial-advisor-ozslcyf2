import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  PiggyBank,
  Target,
  AlertTriangle,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  Plus
} from 'lucide-react'
import { FinancialHealthScore } from './FinancialHealthScore'
import { NetWorthChart } from './NetWorthChart'
import { SpendingBreakdown } from './SpendingBreakdown'
import { RecentTransactions } from './RecentTransactions'
import { AIInsights } from './AIInsights'

export function Dashboard() {
  // Mock data - in real app this would come from Blink SDK
  const financialData = {
    netWorth: 125000,
    netWorthChange: 8.5,
    totalAssets: 180000,
    totalLiabilities: 55000,
    monthlyIncome: 8500,
    monthlyExpenses: 6200,
    savingsRate: 27,
    emergencyFund: 18600,
    emergencyFundMonths: 3,
    creditScore: 785,
    healthScore: 82
  }

  const quickStats = [
    {
      title: 'Net Worth',
      value: `$${financialData.netWorth.toLocaleString()}`,
      change: financialData.netWorthChange,
      icon: DollarSign,
      trend: 'up'
    },
    {
      title: 'Monthly Savings',
      value: `$${(financialData.monthlyIncome - financialData.monthlyExpenses).toLocaleString()}`,
      change: 12.3,
      icon: PiggyBank,
      trend: 'up'
    },
    {
      title: 'Savings Rate',
      value: `${financialData.savingsRate}%`,
      change: 2.1,
      icon: Target,
      trend: 'up'
    },
    {
      title: 'Credit Score',
      value: financialData.creditScore,
      change: 15,
      icon: TrendingUp,
      trend: 'up'
    }
  ]

  const alerts = [
    {
      type: 'warning',
      title: 'Emergency Fund Below Target',
      description: 'Consider increasing to 6 months of expenses',
      action: 'Review Budget'
    },
    {
      type: 'success',
      title: 'Tax-Loss Harvesting Opportunity',
      description: 'Potential $2,400 in tax savings identified',
      action: 'View Details'
    },
    {
      type: 'info',
      title: '401(k) Contribution Optimization',
      description: 'Increase contribution by 2% to maximize employer match',
      action: 'Optimize'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Dashboard</h1>
          <p className="text-muted-foreground">
            Your comprehensive financial overview powered by AI
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Connect Account
        </Button>
      </div>

      {/* Financial Health Score */}
      <FinancialHealthScore score={financialData.healthScore} />

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat) => {
          const Icon = stat.icon
          const isPositive = stat.change > 0
          
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {isPositive ? (
                    <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
                  )}
                  <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
                    {Math.abs(stat.change)}%
                  </span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          <NetWorthChart />
          <SpendingBreakdown />
        </div>

        {/* Right Column - Insights & Alerts */}
        <div className="space-y-6">
          <AIInsights />
          
          {/* Alerts & Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
                Action Items
              </CardTitle>
              <CardDescription>
                AI-powered recommendations for your financial health
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border">
                  <div className="flex-shrink-0">
                    {alert.type === 'warning' && (
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                    )}
                    {alert.type === 'success' && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    {alert.type === 'info' && (
                      <TrendingUp className="h-5 w-5 text-blue-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{alert.title}</p>
                    <p className="text-xs text-muted-foreground">{alert.description}</p>
                    <Button variant="link" size="sm" className="h-auto p-0 mt-1">
                      {alert.action}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <RecentTransactions />
        </div>
      </div>
    </div>
  )
}
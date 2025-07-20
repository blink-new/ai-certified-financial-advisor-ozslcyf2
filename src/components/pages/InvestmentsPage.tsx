import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  RefreshCw
} from 'lucide-react'

export function InvestmentsPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1Y')

  const portfolioData = {
    totalValue: 245680,
    totalGain: 18420,
    totalGainPercent: 8.1,
    dayChange: 1240,
    dayChangePercent: 0.51
  }

  const holdings = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      shares: 150,
      currentPrice: 175.43,
      totalValue: 26314.50,
      gain: 2314.50,
      gainPercent: 9.6,
      allocation: 10.7
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      shares: 85,
      currentPrice: 338.11,
      totalValue: 28739.35,
      gain: 3739.35,
      gainPercent: 14.9,
      allocation: 11.7
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      shares: 45,
      currentPrice: 138.21,
      totalValue: 6219.45,
      gain: -280.55,
      gainPercent: -4.3,
      allocation: 2.5
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      shares: 25,
      currentPrice: 248.50,
      totalValue: 6212.50,
      gain: 1212.50,
      gainPercent: 24.2,
      allocation: 2.5
    },
    {
      symbol: 'VTI',
      name: 'Vanguard Total Stock Market ETF',
      shares: 200,
      currentPrice: 220.15,
      totalValue: 44030.00,
      gain: 4030.00,
      gainPercent: 10.1,
      allocation: 17.9
    }
  ]

  const assetAllocation = [
    { category: 'US Stocks', percentage: 65, value: 159692, color: 'bg-blue-500' },
    { category: 'International Stocks', percentage: 20, value: 49136, color: 'bg-green-500' },
    { category: 'Bonds', percentage: 10, value: 24568, color: 'bg-yellow-500' },
    { category: 'REITs', percentage: 3, value: 7370, color: 'bg-purple-500' },
    { category: 'Cash', percentage: 2, value: 4914, color: 'bg-gray-500' }
  ]

  const recommendations = [
    {
      type: 'Rebalance',
      title: 'Portfolio Rebalancing Needed',
      description: 'Your US stocks allocation is 5% above target. Consider rebalancing.',
      action: 'Rebalance Now',
      priority: 'medium'
    },
    {
      type: 'Tax',
      title: 'Tax-Loss Harvesting Opportunity',
      description: 'GOOGL position shows losses. Consider harvesting for tax benefits.',
      action: 'Review Details',
      priority: 'high'
    },
    {
      type: 'Diversification',
      title: 'Sector Concentration Risk',
      description: 'High concentration in technology sector (45%). Consider diversifying.',
      action: 'View Suggestions',
      priority: 'low'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Investment Portfolio</h1>
          <p className="text-muted-foreground">
            AI-powered portfolio analysis and investment recommendations
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Sync Accounts
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Investment
          </Button>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${portfolioData.totalValue.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">${portfolioData.totalGain.toLocaleString()}</span>
              <span className="ml-1">({portfolioData.totalGainPercent}%)</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Change</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+${portfolioData.dayChange.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+{portfolioData.dayChangePercent}%</span>
              <span className="ml-1">today</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Asset Allocation Score</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.2/10</div>
            <div className="text-xs text-muted-foreground">
              Well diversified portfolio
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Moderate</div>
            <div className="text-xs text-muted-foreground">
              Balanced risk-return profile
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="holdings" className="space-y-4">
        <TabsList>
          <TabsTrigger value="holdings">Holdings</TabsTrigger>
          <TabsTrigger value="allocation">Asset Allocation</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="holdings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Holdings</CardTitle>
              <CardDescription>
                Your investment positions across all connected accounts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {holdings.map((holding) => (
                  <div key={holding.symbol} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-primary">{holding.symbol.slice(0, 2)}</span>
                      </div>
                      <div>
                        <p className="font-medium">{holding.symbol}</p>
                        <p className="text-sm text-muted-foreground">{holding.name}</p>
                        <p className="text-xs text-muted-foreground">{holding.shares} shares @ ${holding.currentPrice}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${holding.totalValue.toLocaleString()}</p>
                      <div className="flex items-center">
                        {holding.gain > 0 ? (
                          <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                        ) : (
                          <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
                        )}
                        <span className={holding.gain > 0 ? 'text-green-500' : 'text-red-500'}>
                          ${Math.abs(holding.gain).toLocaleString()} ({Math.abs(holding.gainPercent)}%)
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{holding.allocation}% of portfolio</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="allocation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
              <CardDescription>
                Current portfolio distribution across asset classes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {assetAllocation.map((asset) => (
                  <div key={asset.category} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${asset.color}`}></div>
                        <span className="font-medium">{asset.category}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-medium">{asset.percentage}%</span>
                        <p className="text-sm text-muted-foreground">${asset.value.toLocaleString()}</p>
                      </div>
                    </div>
                    <Progress value={asset.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
              <CardDescription>
                Historical performance analysis and benchmarking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                Performance chart will be implemented with real data
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
                    <CardTitle className="text-lg">{rec.title}</CardTitle>
                    <Badge variant={rec.priority === 'high' ? 'destructive' : rec.priority === 'medium' ? 'default' : 'secondary'}>
                      {rec.priority} priority
                    </Badge>
                  </div>
                  <CardDescription>{rec.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">{rec.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
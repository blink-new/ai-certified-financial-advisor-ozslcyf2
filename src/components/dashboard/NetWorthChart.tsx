import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { TrendingUp, Calendar, Download } from 'lucide-react'

export function NetWorthChart() {
  // Mock data - in real app this would come from Blink SDK
  const netWorthData = [
    { month: 'Jan', assets: 165000, liabilities: 58000, netWorth: 107000 },
    { month: 'Feb', assets: 168000, liabilities: 57000, netWorth: 111000 },
    { month: 'Mar', assets: 172000, liabilities: 56000, netWorth: 116000 },
    { month: 'Apr', assets: 175000, liabilities: 55500, netWorth: 119500 },
    { month: 'May', assets: 178000, liabilities: 55000, netWorth: 123000 },
    { month: 'Jun', assets: 180000, liabilities: 55000, netWorth: 125000 }
  ]

  const currentNetWorth = netWorthData[netWorthData.length - 1].netWorth
  const previousNetWorth = netWorthData[netWorthData.length - 2].netWorth
  const monthlyChange = ((currentNetWorth - previousNetWorth) / previousNetWorth) * 100

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-primary" />
              Net Worth Trend
            </CardTitle>
            <CardDescription>
              Track your wealth growth over time
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-green-600">
              +{monthlyChange.toFixed(1)}% this month
            </Badge>
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              6M
            </Button>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Current Values */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Total Assets</p>
              <p className="text-lg font-semibold text-green-600">
                ${netWorthData[netWorthData.length - 1].assets.toLocaleString()}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Total Liabilities</p>
              <p className="text-lg font-semibold text-red-600">
                ${netWorthData[netWorthData.length - 1].liabilities.toLocaleString()}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Net Worth</p>
              <p className="text-xl font-bold text-primary">
                ${currentNetWorth.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Chart */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={netWorthData}>
                <defs>
                  <linearGradient id="netWorthGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="assetsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  className="text-xs"
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  className="text-xs"
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                          <p className="font-medium mb-2">{label}</p>
                          {payload.map((entry, index) => (
                            <div key={index} className="flex items-center justify-between space-x-4">
                              <span 
                                className="text-sm"
                                style={{ color: entry.color }}
                              >
                                {entry.name}:
                              </span>
                              <span className="font-medium">
                                ${entry.value?.toLocaleString()}
                              </span>
                            </div>
                          ))}
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="assets"
                  stroke="#10b981"
                  strokeWidth={2}
                  fill="url(#assetsGradient)"
                  name="Assets"
                />
                <Area
                  type="monotone"
                  dataKey="netWorth"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  fill="url(#netWorthGradient)"
                  name="Net Worth"
                />
                <Line
                  type="monotone"
                  dataKey="liabilities"
                  stroke="#ef4444"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Liabilities"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Insights */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <h4 className="font-medium text-accent mb-2">AI Insight</h4>
            <p className="text-sm text-muted-foreground">
              Your net worth has grown by <span className="font-medium text-green-600">16.8%</span> over 
              the past 6 months. The consistent debt reduction and asset growth indicate strong financial 
              discipline. Consider increasing your investment allocation to accelerate wealth building.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
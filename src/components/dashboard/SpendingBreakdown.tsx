import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import { PiggyBank, TrendingDown, TrendingUp, AlertCircle } from 'lucide-react'

export function SpendingBreakdown() {
  // Mock data - in real app this would come from Blink SDK
  const spendingData = [
    { category: 'Housing', amount: 2200, budget: 2500, color: '#1B365D', percentage: 35.5 },
    { category: 'Transportation', amount: 850, budget: 900, color: '#2563EB', percentage: 13.7 },
    { category: 'Food & Dining', amount: 720, budget: 800, color: '#10B981', percentage: 11.6 },
    { category: 'Utilities', amount: 320, budget: 350, color: '#F59E0B', percentage: 5.2 },
    { category: 'Healthcare', amount: 280, budget: 400, color: '#EF4444', percentage: 4.5 },
    { category: 'Entertainment', amount: 450, budget: 500, color: '#8B5CF6', percentage: 7.3 },
    { category: 'Shopping', amount: 680, budget: 600, color: '#EC4899', percentage: 11.0 },
    { category: 'Other', amount: 700, budget: 800, color: '#6B7280', percentage: 11.3 }
  ]

  const totalSpent = spendingData.reduce((sum, item) => sum + item.amount, 0)
  const totalBudget = spendingData.reduce((sum, item) => sum + item.budget, 0)
  const budgetUtilization = (totalSpent / totalBudget) * 100

  const monthlyTrend = [
    { month: 'Jan', spending: 5800 },
    { month: 'Feb', spending: 6100 },
    { month: 'Mar', spending: 5900 },
    { month: 'Apr', spending: 6300 },
    { month: 'May', spending: 6000 },
    { month: 'Jun', spending: 6200 }
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <PiggyBank className="mr-2 h-5 w-5 text-primary" />
              Spending Analysis
            </CardTitle>
            <CardDescription>
              Monthly budget vs actual spending breakdown
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All Categories
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Budget Overview */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Total Spent</p>
              <p className="text-xl font-bold">${totalSpent.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Total Budget</p>
              <p className="text-xl font-bold text-muted-foreground">
                ${totalBudget.toLocaleString()}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Utilization</p>
              <p className={`text-xl font-bold ${budgetUtilization > 90 ? 'text-red-500' : 'text-green-500'}`}>
                {budgetUtilization.toFixed(1)}%
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Pie Chart */}
            <div className="space-y-4">
              <h4 className="font-medium">Category Distribution</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={spendingData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="amount"
                    >
                      {spendingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload
                          return (
                            <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                              <p className="font-medium">{data.category}</p>
                              <p className="text-sm text-muted-foreground">
                                ${data.amount.toLocaleString()} ({data.percentage}%)
                              </p>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Category Details */}
            <div className="space-y-4">
              <h4 className="font-medium">Budget vs Actual</h4>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {spendingData.map((item) => {
                  const utilization = (item.amount / item.budget) * 100
                  const isOverBudget = utilization > 100
                  
                  return (
                    <div key={item.category} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span>{item.category}</span>
                          {isOverBudget && (
                            <AlertCircle className="h-3 w-3 text-red-500" />
                          )}
                        </div>
                        <div className="text-right">
                          <span className="font-medium">
                            ${item.amount.toLocaleString()}
                          </span>
                          <span className="text-muted-foreground">
                            /${item.budget.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <Progress 
                        value={Math.min(utilization, 100)} 
                        className="h-2"
                      />
                      <div className="flex items-center justify-between text-xs">
                        <span className={`${isOverBudget ? 'text-red-500' : 'text-muted-foreground'}`}>
                          {utilization.toFixed(1)}% of budget
                        </span>
                        {isOverBudget && (
                          <span className="text-red-500 font-medium">
                            ${(item.amount - item.budget).toLocaleString()} over
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Monthly Trend */}
          <div className="space-y-4">
            <h4 className="font-medium">6-Month Spending Trend</h4>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyTrend}>
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
                            <p className="font-medium">{label}</p>
                            <p className="text-sm">
                              Spending: ${payload[0].value?.toLocaleString()}
                            </p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Bar 
                    dataKey="spending" 
                    fill="hsl(var(--primary))" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <h4 className="font-medium text-accent mb-2">Spending Insights</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <TrendingDown className="mr-2 h-4 w-4 text-green-500" />
                <span>You're $300 under budget this month - great job!</span>
              </div>
              <div className="flex items-center">
                <AlertCircle className="mr-2 h-4 w-4 text-amber-500" />
                <span>Shopping spending is 13% above budget. Consider reviewing discretionary purchases.</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="mr-2 h-4 w-4 text-blue-500" />
                <span>Healthcare costs are lower than expected - you may want to schedule routine checkups.</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
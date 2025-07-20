import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart, TrendingUp, Info } from 'lucide-react'

interface FinancialHealthScoreProps {
  score: number
}

export function FinancialHealthScore({ score }: FinancialHealthScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500'
    if (score >= 60) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent'
    if (score >= 80) return 'Very Good'
    if (score >= 70) return 'Good'
    if (score >= 60) return 'Fair'
    return 'Needs Improvement'
  }

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 80) return 'default'
    if (score >= 60) return 'secondary'
    return 'destructive'
  }

  const scoreBreakdown = [
    { category: 'Emergency Fund', score: 75, weight: 20 },
    { category: 'Debt Management', score: 90, weight: 25 },
    { category: 'Savings Rate', score: 85, weight: 20 },
    { category: 'Investment Diversification', score: 80, weight: 20 },
    { category: 'Credit Health', score: 95, weight: 15 }
  ]

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <div>
              <CardTitle className="text-xl">Financial Health Score</CardTitle>
              <CardDescription>
                AI-powered assessment of your overall financial wellness
              </CardDescription>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Info className="mr-2 h-4 w-4" />
            How it's calculated
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Main Score Display */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className={`text-4xl font-bold ${getScoreColor(score)}`}>
                  {score}
                </span>
                <div className="flex flex-col">
                  <Badge variant={getScoreBadgeVariant(score)} className="w-fit">
                    {getScoreLabel(score)}
                  </Badge>
                  <span className="text-xs text-muted-foreground mt-1">out of 100</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500">+5 points</span>
                <span className="ml-1">from last month</span>
              </div>
            </div>
            
            {/* Circular Progress */}
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-muted/20"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - score / 100)}`}
                  className={getScoreColor(score)}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-lg font-bold ${getScoreColor(score)}`}>
                  {score}
                </span>
              </div>
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Score Breakdown</h4>
            {scoreBreakdown.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{item.category}</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{item.score}/100</span>
                    <span className="text-xs text-muted-foreground">
                      ({item.weight}% weight)
                    </span>
                  </div>
                </div>
                <Progress 
                  value={item.score} 
                  className="h-2"
                />
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex space-x-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1">
              View Detailed Report
            </Button>
            <Button size="sm" className="flex-1">
              Get Recommendations
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
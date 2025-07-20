import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Bot, Sparkles, TrendingUp, DollarSign, Target, ArrowRight } from 'lucide-react'

export function AIInsights() {
  const insights = [
    {
      type: 'optimization',
      title: 'Tax-Loss Harvesting Opportunity',
      description: 'Sell underperforming VXUS position to offset capital gains',
      impact: '$2,400 tax savings',
      confidence: 95,
      action: 'Review Portfolio'
    },
    {
      type: 'retirement',
      title: 'Increase 401(k) Contribution',
      description: 'Boost contribution by 2% to maximize employer match',
      impact: '$1,200 additional match',
      confidence: 100,
      action: 'Adjust Contribution'
    },
    {
      type: 'savings',
      title: 'High-Yield Savings Opportunity',
      description: 'Move emergency fund to Marcus savings (4.5% APY)',
      impact: '$620 additional interest',
      confidence: 90,
      action: 'Compare Rates'
    },
    {
      type: 'investment',
      title: 'Rebalancing Recommended',
      description: 'Your equity allocation is 5% above target',
      impact: 'Reduce risk exposure',
      confidence: 85,
      action: 'Rebalance Now'
    }
  ]

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'optimization':
        return <DollarSign className="h-4 w-4" />
      case 'retirement':
        return <Target className="h-4 w-4" />
      case 'savings':
        return <TrendingUp className="h-4 w-4" />
      case 'investment':
        return <Sparkles className="h-4 w-4" />
      default:
        return <Bot className="h-4 w-4" />
    }
  }

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'optimization':
        return 'text-green-600 bg-green-50 border-green-200'
      case 'retirement':
        return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'savings':
        return 'text-purple-600 bg-purple-50 border-purple-200'
      case 'investment':
        return 'text-amber-600 bg-amber-50 border-amber-200'
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <Bot className="mr-2 h-5 w-5 text-primary" />
              AI Financial Insights
            </CardTitle>
            <CardDescription>
              Personalized recommendations powered by advanced AI
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <Sparkles className="mr-1 h-3 w-3" />
            Live Analysis
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border ${getInsightColor(insight.type)}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {getInsightIcon(insight.type)}
                  <h4 className="font-medium text-sm">{insight.title}</h4>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {insight.confidence}% confidence
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">
                {insight.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-green-600">
                    {insight.impact}
                  </span>
                </div>
                <Button variant="outline" size="sm" className="h-8">
                  {insight.action}
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}

          {/* AI Chat Prompt */}
          <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Bot className="h-5 w-5 text-primary" />
              <h4 className="font-medium">Ask Your AI Financial Advisor</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Get personalized advice on any financial question
            </p>
            <Button className="w-full">
              <Sparkles className="mr-2 h-4 w-4" />
              Start AI Consultation
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
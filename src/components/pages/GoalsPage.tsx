import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  Target, 
  Home, 
  GraduationCap, 
  Plane,
  TrendingUp,
  Calendar,
  DollarSign,
  Plus,
  CheckCircle,
  Clock
} from 'lucide-react'

export function GoalsPage() {
  const [newGoalName, setNewGoalName] = useState('')
  const [newGoalAmount, setNewGoalAmount] = useState('')
  const [newGoalDate, setNewGoalDate] = useState('')

  const fireScenarios = [
    {
      type: 'Lean FIRE',
      targetAmount: 625000,
      annualExpenses: 25000,
      timeToFire: 12,
      monthlyRequired: 3200,
      description: 'Minimal expenses, frugal lifestyle'
    },
    {
      type: 'Regular FIRE',
      targetAmount: 1250000,
      annualExpenses: 50000,
      timeToFire: 18,
      monthlyRequired: 4800,
      description: 'Comfortable middle-class lifestyle'
    },
    {
      type: 'Fat FIRE',
      targetAmount: 2500000,
      annualExpenses: 100000,
      timeToFire: 25,
      monthlyRequired: 8200,
      description: 'Luxury lifestyle with high expenses'
    },
    {
      type: 'Coast FIRE',
      targetAmount: 1250000,
      annualExpenses: 50000,
      timeToFire: 8,
      monthlyRequired: 0,
      description: 'Stop saving, let compound interest work'
    }
  ]

  const goals = [
    {
      id: 1,
      name: 'Emergency Fund',
      targetAmount: 30000,
      currentAmount: 18600,
      targetDate: '2024-12-31',
      category: 'Emergency',
      icon: Target,
      priority: 'high',
      monthlyContribution: 950,
      onTrack: true
    },
    {
      id: 2,
      name: 'House Down Payment',
      targetAmount: 100000,
      currentAmount: 45000,
      targetDate: '2026-06-01',
      category: 'Real Estate',
      icon: Home,
      priority: 'high',
      monthlyContribution: 2300,
      onTrack: true
    },
    {
      id: 3,
      name: 'Kids College Fund',
      targetAmount: 200000,
      currentAmount: 35000,
      targetDate: '2035-09-01',
      category: 'Education',
      icon: GraduationCap,
      priority: 'medium',
      monthlyContribution: 1200,
      onTrack: true
    },
    {
      id: 4,
      name: 'European Vacation',
      targetAmount: 15000,
      currentAmount: 8500,
      targetDate: '2025-07-01',
      category: 'Travel',
      icon: Plane,
      priority: 'low',
      monthlyContribution: 500,
      onTrack: false
    }
  ]

  const milestones = [
    {
      name: 'First $10K Saved',
      completed: true,
      completedDate: '2022-03-15',
      description: 'Built initial emergency fund'
    },
    {
      name: 'First $100K Net Worth',
      completed: true,
      completedDate: '2023-08-22',
      description: 'Reached six-figure milestone'
    },
    {
      name: 'Debt-Free (Except Mortgage)',
      completed: true,
      completedDate: '2023-11-10',
      description: 'Paid off all consumer debt'
    },
    {
      name: 'First $250K Net Worth',
      completed: false,
      targetDate: '2024-12-31',
      description: 'Quarter million milestone'
    },
    {
      name: 'Coast FIRE Number',
      completed: false,
      targetDate: '2026-06-01',
      description: 'Enough saved to coast to retirement'
    }
  ]

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100)
  }

  const getTimeRemaining = (targetDate: string) => {
    const target = new Date(targetDate)
    const now = new Date()
    const diffTime = target.getTime() - now.getTime()
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30))
    return diffMonths
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Goals</h1>
          <p className="text-muted-foreground">
            FIRE calculations and milestone planning
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Goal
        </Button>
      </div>

      {/* FIRE Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            FIRE Progress
          </CardTitle>
          <CardDescription>
            Financial Independence, Retire Early - Track your progress
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-3xl font-bold mb-2">$125,000</div>
              <p className="text-muted-foreground mb-4">Current Net Worth</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to Lean FIRE</span>
                  <span>20%</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">18 years</div>
              <p className="text-muted-foreground mb-4">Time to Regular FIRE</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>At current savings rate</span>
                  <span>$4,800/month</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="goals" className="space-y-4">
        <TabsList>
          <TabsTrigger value="goals">Active Goals</TabsTrigger>
          <TabsTrigger value="fire">FIRE Calculator</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="planning">Goal Planning</TabsTrigger>
        </TabsList>

        <TabsContent value="goals" className="space-y-4">
          <div className="grid gap-4">
            {goals.map((goal) => {
              const Icon = goal.icon
              const progress = getProgressPercentage(goal.currentAmount, goal.targetAmount)
              const monthsRemaining = getTimeRemaining(goal.targetDate)
              
              return (
                <Card key={goal.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Icon className="mr-2 h-5 w-5" />
                        {goal.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant={goal.priority === 'high' ? 'destructive' : goal.priority === 'medium' ? 'default' : 'secondary'}>
                          {goal.priority} priority
                        </Badge>
                        <Badge variant={goal.onTrack ? 'secondary' : 'destructive'}>
                          {goal.onTrack ? 'On Track' : 'Behind'}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>{goal.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Progress</p>
                        <p className="text-2xl font-bold">{progress.toFixed(1)}%</p>
                        <Progress value={progress} className="mt-2" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Current / Target</p>
                        <p className="text-lg font-bold">
                          ${goal.currentAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ${(goal.targetAmount - goal.currentAmount).toLocaleString()} remaining
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Monthly Contribution</p>
                        <p className="text-lg font-bold">${goal.monthlyContribution.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">
                          {monthsRemaining} months remaining
                        </p>
                      </div>
                      <div className="flex items-end">
                        <Button variant="outline" className="w-full">
                          Adjust Goal
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="fire" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {fireScenarios.map((scenario, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{scenario.type}</CardTitle>
                  <CardDescription>{scenario.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Target Amount</p>
                      <p className="text-xl font-bold">${scenario.targetAmount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Annual Expenses</p>
                      <p className="text-xl font-bold">${scenario.annualExpenses.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Time to FIRE</p>
                      <p className="text-xl font-bold">{scenario.timeToFire} years</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Monthly Required</p>
                      <p className="text-xl font-bold">
                        {scenario.monthlyRequired === 0 ? 'None' : `$${scenario.monthlyRequired.toLocaleString()}`}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {((125000 / scenario.targetAmount) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <Progress value={(125000 / scenario.targetAmount) * 100} className="h-2" />
                  </div>
                  <Button variant="outline" className="w-full">
                    Set as Target
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                Financial Milestones
              </CardTitle>
              <CardDescription>
                Track your journey to financial independence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      milestone.completed ? 'bg-green-50' : 'bg-gray-50'
                    }`}>
                      {milestone.completed ? (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      ) : (
                        <Clock className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{milestone.name}</p>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      {milestone.completed ? (
                        <p className="text-xs text-green-600">Completed: {milestone.completedDate}</p>
                      ) : (
                        <p className="text-xs text-blue-600">Target: {milestone.targetDate}</p>
                      )}
                    </div>
                    {milestone.completed && (
                      <Badge variant="secondary">Completed</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="planning" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Goal</CardTitle>
              <CardDescription>
                Set up a new financial goal with automatic tracking
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="goal-name">Goal Name</Label>
                  <Input
                    id="goal-name"
                    placeholder="e.g., New Car, Vacation, etc."
                    value={newGoalName}
                    onChange={(e) => setNewGoalName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal-amount">Target Amount</Label>
                  <Input
                    id="goal-amount"
                    type="number"
                    placeholder="25000"
                    value={newGoalAmount}
                    onChange={(e) => setNewGoalAmount(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal-date">Target Date</Label>
                  <Input
                    id="goal-date"
                    type="date"
                    value={newGoalDate}
                    onChange={(e) => setNewGoalDate(e.target.value)}
                  />
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    Create Goal
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Goal Planning Tips</CardTitle>
              <CardDescription>
                AI-powered recommendations for achieving your goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900">Emergency Fund Priority</h4>
                  <p className="text-sm text-blue-700">
                    Complete your emergency fund before focusing on other goals. This provides financial security.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900">Automate Your Savings</h4>
                  <p className="text-sm text-green-700">
                    Set up automatic transfers to dedicated savings accounts for each goal.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900">Use Tax-Advantaged Accounts</h4>
                  <p className="text-sm text-purple-700">
                    Consider 529 plans for education goals and HSAs for healthcare expenses.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
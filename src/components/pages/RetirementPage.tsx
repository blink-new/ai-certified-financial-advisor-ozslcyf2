import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Slider } from '@/components/ui/slider'
import { 
  Calculator, 
  TrendingUp, 
  Target, 
  DollarSign,
  Calendar,
  PiggyBank,
  AlertTriangle,
  CheckCircle,
  BarChart3
} from 'lucide-react'

export function RetirementPage() {
  const [currentAge, setCurrentAge] = useState(35)
  const [retirementAge, setRetirementAge] = useState(65)
  const [currentSavings, setCurrentSavings] = useState(125000)
  const [monthlyContribution, setMonthlyContribution] = useState(2000)
  const [expectedReturn, setExpectedReturn] = useState([7])

  const retirementData = {
    projectedValue: 2450000,
    monthlyNeeded: 8500,
    shortfall: 0,
    onTrack: true,
    yearsToRetirement: retirementAge - currentAge,
    socialSecurityEstimate: 2800,
    pensionEstimate: 0
  }

  const accounts = [
    {
      type: '401(k)',
      provider: 'Fidelity',
      balance: 85000,
      contribution: 1200,
      employerMatch: 600,
      maxContribution: 23000,
      utilizationPercent: 78
    },
    {
      type: 'Roth IRA',
      provider: 'Vanguard',
      balance: 35000,
      contribution: 500,
      employerMatch: 0,
      maxContribution: 7000,
      utilizationPercent: 86
    },
    {
      type: 'Traditional IRA',
      provider: 'Charles Schwab',
      balance: 5000,
      contribution: 300,
      employerMatch: 0,
      maxContribution: 7000,
      utilizationPercent: 51
    }
  ]

  const scenarios = [
    {
      name: 'Conservative',
      return: 5,
      projectedValue: 1850000,
      probability: 90
    },
    {
      name: 'Moderate',
      return: 7,
      projectedValue: 2450000,
      probability: 70
    },
    {
      name: 'Aggressive',
      return: 9,
      projectedValue: 3200000,
      probability: 50
    }
  ]

  const optimizations = [
    {
      title: 'Maximize 401(k) Employer Match',
      description: 'Increase contribution by $300/month to get full employer match',
      impact: '+$180,000 by retirement',
      priority: 'high'
    },
    {
      title: 'Roth IRA Conversion',
      description: 'Convert $10,000 from Traditional IRA to Roth IRA this year',
      impact: '+$45,000 in tax savings',
      priority: 'medium'
    },
    {
      title: 'HSA Maximization',
      description: 'Use HSA as retirement account by maximizing contributions',
      impact: '+$125,000 by retirement',
      priority: 'high'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Retirement Planning</h1>
          <p className="text-muted-foreground">
            Comprehensive retirement planning with Monte Carlo simulations
          </p>
        </div>
        <Button>
          <Calculator className="mr-2 h-4 w-4" />
          Run New Simulation
        </Button>
      </div>

      {/* Retirement Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5" />
            Retirement Progress
          </CardTitle>
          <CardDescription>
            Based on current savings rate and investment returns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">${retirementData.projectedValue.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">Projected Retirement Value</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{retirementData.yearsToRetirement}</div>
              <p className="text-sm text-muted-foreground">Years to Retirement</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                <span className="text-lg font-semibold text-green-600">On Track</span>
              </div>
              <p className="text-sm text-muted-foreground">Meeting retirement goals</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progress to Goal</span>
              <span className="text-sm text-muted-foreground">78% complete</span>
            </div>
            <Progress value={78} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="calculator" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
          <TabsTrigger value="accounts">Retirement Accounts</TabsTrigger>
          <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
          <TabsTrigger value="optimization">Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Input Parameters */}
            <Card>
              <CardHeader>
                <CardTitle>Retirement Calculator</CardTitle>
                <CardDescription>
                  Adjust parameters to see how they affect your retirement projections
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="current-age">Current Age</Label>
                    <Input
                      id="current-age"
                      type="number"
                      value={currentAge}
                      onChange={(e) => setCurrentAge(Number(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retirement-age">Retirement Age</Label>
                    <Input
                      id="retirement-age"
                      type="number"
                      value={retirementAge}
                      onChange={(e) => setRetirementAge(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="current-savings">Current Retirement Savings</Label>
                  <Input
                    id="current-savings"
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthly-contribution">Monthly Contribution</Label>
                  <Input
                    id="monthly-contribution"
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Expected Annual Return: {expectedReturn[0]}%</Label>
                  <Slider
                    value={expectedReturn}
                    onValueChange={setExpectedReturn}
                    max={12}
                    min={3}
                    step={0.5}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle>Projection Results</CardTitle>
                <CardDescription>
                  Based on your current parameters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Projected Value at Retirement</span>
                    <span className="text-xl font-bold text-green-600">
                      ${retirementData.projectedValue.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Monthly Income in Retirement</span>
                    <span className="text-xl font-bold text-blue-600">
                      ${Math.round(retirementData.projectedValue * 0.04 / 12).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Social Security (estimated)</span>
                    <span className="text-xl font-bold text-purple-600">
                      ${retirementData.socialSecurityEstimate.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">Total Monthly Income</span>
                    <span className="text-2xl font-bold">
                      ${(Math.round(retirementData.projectedValue * 0.04 / 12) + retirementData.socialSecurityEstimate).toLocaleString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="accounts" className="space-y-4">
          <div className="grid gap-4">
            {accounts.map((account, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <PiggyBank className="mr-2 h-5 w-5" />
                      {account.type} - {account.provider}
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${account.balance.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Current Balance</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-medium">Monthly Contribution</p>
                      <p className="text-xl font-bold">${account.contribution.toLocaleString()}</p>
                      {account.employerMatch > 0 && (
                        <p className="text-sm text-green-600">+${account.employerMatch} employer match</p>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">Annual Limit</p>
                      <p className="text-xl font-bold">${account.maxContribution.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Utilization</p>
                      <p className="text-xl font-bold">{account.utilizationPercent}%</p>
                      <Progress value={account.utilizationPercent} className="mt-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scenarios" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monte Carlo Scenarios</CardTitle>
              <CardDescription>
                Different return scenarios and their probability of success
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {scenarios.map((scenario, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="text-center space-y-2">
                      <h3 className="font-semibold">{scenario.name}</h3>
                      <p className="text-sm text-muted-foreground">{scenario.return}% annual return</p>
                      <div className="text-2xl font-bold">${scenario.projectedValue.toLocaleString()}</div>
                      <div className="text-sm">
                        <span className="font-medium">{scenario.probability}%</span> probability of success
                      </div>
                      <Progress value={scenario.probability} className="mt-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-4">
          <div className="grid gap-4">
            {optimizations.map((opt, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      {opt.priority === 'high' ? (
                        <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
                      ) : (
                        <TrendingUp className="mr-2 h-5 w-5 text-blue-500" />
                      )}
                      {opt.title}
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{opt.impact}</div>
                      <div className="text-sm text-muted-foreground">{opt.priority} priority</div>
                    </div>
                  </div>
                  <CardDescription>{opt.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Implement Optimization</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
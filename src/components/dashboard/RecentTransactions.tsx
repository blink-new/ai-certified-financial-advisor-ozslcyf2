import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  ShoppingCart, 
  Car, 
  Home, 
  Coffee,
  Zap,
  Smartphone,
  MoreHorizontal
} from 'lucide-react'

export function RecentTransactions() {
  // Mock data - in real app this would come from Blink SDK
  const transactions = [
    {
      id: '1',
      description: 'Whole Foods Market',
      category: 'Food & Dining',
      amount: -127.45,
      date: '2024-01-20',
      account: 'Chase Checking',
      icon: ShoppingCart,
      pending: false
    },
    {
      id: '2',
      description: 'Salary Deposit',
      category: 'Income',
      amount: 4250.00,
      date: '2024-01-20',
      account: 'Chase Checking',
      icon: ArrowDownLeft,
      pending: false
    },
    {
      id: '3',
      description: 'Shell Gas Station',
      category: 'Transportation',
      amount: -52.30,
      date: '2024-01-19',
      account: 'Chase Credit Card',
      icon: Car,
      pending: false
    },
    {
      id: '4',
      description: 'Mortgage Payment',
      category: 'Housing',
      amount: -2200.00,
      date: '2024-01-19',
      account: 'Chase Checking',
      icon: Home,
      pending: false
    },
    {
      id: '5',
      description: 'Starbucks',
      category: 'Food & Dining',
      amount: -8.75,
      date: '2024-01-18',
      account: 'Chase Credit Card',
      icon: Coffee,
      pending: false
    },
    {
      id: '6',
      description: 'Electric Bill',
      category: 'Utilities',
      amount: -145.20,
      date: '2024-01-18',
      account: 'Chase Checking',
      icon: Zap,
      pending: true
    },
    {
      id: '7',
      description: 'Verizon Wireless',
      category: 'Utilities',
      amount: -89.99,
      date: '2024-01-17',
      account: 'Chase Credit Card',
      icon: Smartphone,
      pending: false
    }
  ]

  const formatAmount = (amount: number) => {
    const isPositive = amount > 0
    const formatted = Math.abs(amount).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
    return isPositive ? `+${formatted}` : `-${formatted}`
  }

  const getAmountColor = (amount: number) => {
    return amount > 0 ? 'text-green-600' : 'text-foreground'
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'Income': 'bg-green-100 text-green-800',
      'Food & Dining': 'bg-orange-100 text-orange-800',
      'Transportation': 'bg-blue-100 text-blue-800',
      'Housing': 'bg-purple-100 text-purple-800',
      'Utilities': 'bg-yellow-100 text-yellow-800',
      'Shopping': 'bg-pink-100 text-pink-800',
      'Healthcare': 'bg-red-100 text-red-800',
      'Entertainment': 'bg-indigo-100 text-indigo-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <CreditCard className="mr-2 h-5 w-5 text-primary" />
              Recent Transactions
            </CardTitle>
            <CardDescription>
              Latest activity across all your accounts
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-3">
            {transactions.map((transaction) => {
              const Icon = transaction.icon
              
              return (
                <div 
                  key={transaction.id}
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium truncate">
                          {transaction.description}
                        </p>
                        {transaction.pending && (
                          <Badge variant="outline" className="text-xs">
                            Pending
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${getCategoryColor(transaction.category)}`}
                        >
                          {transaction.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {transaction.account}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-1">
                    <span className={`text-sm font-medium ${getAmountColor(transaction.amount)}`}>
                      {formatAmount(transaction.amount)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(transaction.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>

        {/* Quick Actions */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="w-full">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Transfer Money
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <MoreHorizontal className="mr-2 h-4 w-4" />
              More Actions
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
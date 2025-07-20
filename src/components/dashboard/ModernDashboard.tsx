import { useState } from 'react'
import { Search, Bell, Mail, Settings, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function ModernDashboard() {
  const [transferAmount, setTransferAmount] = useState('')

  // Mock data for the chart
  const chartData = [
    { date: 'Dec 01', income: 1800, outcome: 1200 },
    { date: 'Dec 02', income: 2200, outcome: 1600 },
    { date: 'Dec 03', income: 3400, outcome: 2100 },
    { date: 'Dec 04', income: 1380, outcome: 800 },
    { date: 'Dec 05', income: 3200, outcome: 2400 },
    { date: 'Dec 06', income: 2800, outcome: 1800 },
    { date: 'Dec 07', income: 3100, outcome: 2000 }
  ]

  const quickTransferUsers = [
    { name: 'Helen', avatar: '👩‍💼', color: 'bg-pink-500' },
    { name: 'Alex', avatar: '👨‍💻', color: 'bg-blue-500' },
    { name: 'Polina', avatar: '👩‍🎨', color: 'bg-green-500' },
    { name: 'Megan', avatar: '👩‍🔬', color: 'bg-purple-500' }
  ]

  const recentTransactions = [
    {
      company: 'Youtube',
      date: '02.12.2021',
      amount: '-$15.99',
      logo: 'youtube',
      bgColor: 'bg-red-500'
    },
    {
      company: 'Apple Music',
      date: '02.12.2021',
      amount: '-$58.00',
      logo: 'apple',
      bgColor: 'bg-gray-900'
    },
    {
      company: 'Google Disk',
      date: '01.12.2021',
      amount: '-$129.99',
      logo: 'google',
      bgColor: 'bg-blue-500'
    }
  ]

  return (
    <div className="flex-1 p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="user-avatar">
            <span>L</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Hi, Lesley!</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search" 
              className="pl-10 w-64 bg-gray-50 border-0 rounded-xl"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Mail className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column - Finances Chart */}
        <div className="col-span-2 space-y-6">
          {/* Finances Chart */}
          <div className="finance-chart">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Finances</h2>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Income</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                  <span className="text-sm text-gray-600">Outcome</span>
                </div>
                <Select defaultValue="last-week">
                  <SelectTrigger className="w-32 border-0 bg-transparent">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last-week">Last week</SelectItem>
                    <SelectItem value="last-month">Last month</SelectItem>
                    <SelectItem value="last-year">Last year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Chart Area */}
            <div className="relative h-64">
              <svg className="w-full h-full" viewBox="0 0 600 200">
                {/* Grid lines */}
                <defs>
                  <pattern id="grid" width="100" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 100 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Y-axis labels */}
                <text x="20" y="20" className="text-xs fill-gray-400">$4k</text>
                <text x="20" y="60" className="text-xs fill-gray-400">$3k</text>
                <text x="20" y="100" className="text-xs fill-gray-400">$2k</text>
                <text x="20" y="140" className="text-xs fill-gray-400">$1k</text>
                <text x="20" y="180" className="text-xs fill-gray-400">$0</text>
                
                {/* Income line (purple) */}
                <path
                  d="M 80 120 Q 120 80 160 100 Q 200 120 240 60 Q 280 140 320 80 Q 360 60 400 70 Q 440 80 480 90 Q 520 100 560 110"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="3"
                  className="drop-shadow-sm"
                />
                
                {/* Outcome line (black) */}
                <path
                  d="M 80 160 Q 120 140 160 120 Q 200 100 240 110 Q 280 130 320 100 Q 360 80 400 90 Q 440 100 480 110 Q 520 120 560 130"
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="3"
                  className="drop-shadow-sm"
                />
                
                {/* Data point highlight */}
                <circle cx="240" cy="110" r="4" fill="#1f2937" />
                <rect x="220" y="85" width="80" height="20" rx="10" fill="#1f2937" />
                <text x="260" y="97" className="text-xs fill-white text-center">$1,380.00</text>
                <text x="245" y="110" className="text-xs fill-gray-400">Dec 04 2020</text>
              </svg>
              
              {/* X-axis labels */}
              <div className="flex justify-between mt-4 px-12">
                {chartData.map((item) => (
                  <span key={item.date} className="text-xs text-gray-400">{item.date}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Balance Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Account Balance */}
            <div className="bg-green-50 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">Account Balance</h3>
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-900">$18,455.00</div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-1 bg-gray-900 rounded-full"></div>
                  <span className="text-sm text-green-600 font-medium">+25%</span>
                </div>
              </div>
            </div>

            {/* Card Balance */}
            <div className="bg-blue-50 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">Card Balance</h3>
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-900">$2,331.00</div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-1 bg-gray-900 rounded-full"></div>
                  <span className="text-sm text-red-600 font-medium">-10%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Transfer */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick transfer</h3>
            
            {/* User Avatars */}
            <div className="flex items-center space-x-4 mb-6">
              {quickTransferUsers.map((user) => (
                <div key={user.name} className="text-center">
                  <div className={`transfer-avatar ${user.color} flex items-center justify-center text-white text-lg mb-2`}>
                    {user.avatar}
                  </div>
                  <span className="text-xs text-gray-600">{user.name}</span>
                </div>
              ))}
              <div className="transfer-avatar border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                <span className="text-2xl">+</span>
              </div>
              <span className="text-xs text-gray-600">Add new</span>
            </div>

            {/* Transfer Form */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Enter amount</label>
                <div className="flex space-x-4">
                  <Input
                    type="text"
                    placeholder="$0.00"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    className="flex-1 border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900"
                  />
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 rounded-xl">
                    Transfer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - My Cards & Transactions */}
        <div className="space-y-6">
          {/* My Cards */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">My cards</h3>
            <div className="balance-card p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-gray-300 text-sm mb-1">Salary Card</p>
                  <p className="text-white text-2xl font-bold">$6,500.99</p>
                </div>
                <div className="flex space-x-1">
                  <div className="w-8 h-6 bg-red-500 rounded-sm"></div>
                  <div className="w-8 h-6 bg-yellow-500 rounded-sm"></div>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <p className="text-gray-300 text-sm tracking-wider">5282 4888 1292 1655</p>
                <p className="text-gray-300 text-sm">09/24</p>
              </div>
              <div className="flex justify-center mt-4 space-x-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent transactions</h3>
              <Select defaultValue="all">
                <SelectTrigger className="w-20 border-0 bg-transparent">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-medium text-gray-600 mb-3">Today</div>
              
              {recentTransactions.slice(0, 2).map((transaction, index) => (
                <div key={index} className="transaction-item">
                  <div className={`company-logo ${transaction.logo} ${transaction.bgColor} mr-3`}>
                    {transaction.logo === 'youtube' && '▶'}
                    {transaction.logo === 'apple' && '🍎'}
                    {transaction.logo === 'google' && 'G'}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{transaction.company}</p>
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                  </div>
                  <p className="font-semibold text-gray-900">{transaction.amount}</p>
                </div>
              ))}

              <div className="text-sm font-medium text-gray-600 mb-3 mt-6">Yesterday</div>
              
              {recentTransactions.slice(2).map((transaction, index) => (
                <div key={index} className="transaction-item">
                  <div className={`company-logo ${transaction.logo} ${transaction.bgColor} mr-3`}>
                    {transaction.logo === 'google' && 'G'}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{transaction.company}</p>
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                  </div>
                  <p className="font-semibold text-gray-900">{transaction.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
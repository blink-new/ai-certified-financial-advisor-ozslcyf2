import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  LayoutDashboard,
  CreditCard,
  PiggyBank,
  TrendingUp,
  Calculator,
  Receipt,
  Target,
  Globe,
  FileText,
  Settings,
  Bot,
  Menu,
  X
} from 'lucide-react'

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
  className?: string
}

const navigation = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    id: 'dashboard',
    description: 'Financial overview'
  },
  {
    name: 'Accounts',
    icon: CreditCard,
    id: 'accounts',
    description: 'Connected institutions'
  },
  {
    name: 'Budget',
    icon: PiggyBank,
    id: 'budget',
    description: 'Expense tracking'
  },
  {
    name: 'Investments',
    icon: TrendingUp,
    id: 'investments',
    description: 'Portfolio management'
  },
  {
    name: 'Retirement',
    icon: Calculator,
    id: 'retirement',
    description: 'Planning & projections'
  },
  {
    name: 'Tax Planning',
    icon: Receipt,
    id: 'tax',
    description: 'Optimization strategies'
  },
  {
    name: 'Goals',
    icon: Target,
    id: 'goals',
    description: 'FIRE & milestones'
  },
  {
    name: 'NRI Services',
    icon: Globe,
    id: 'nri',
    description: 'Cross-border planning'
  },
  {
    name: 'Reports',
    icon: FileText,
    id: 'reports',
    description: 'Financial health'
  },
  {
    name: 'Settings',
    icon: Settings,
    id: 'settings',
    description: 'Preferences'
  }
]

export function Sidebar({ currentPage, onPageChange, className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-0 z-40 h-full bg-card border-r border-border transition-all duration-300',
          isCollapsed ? 'w-16' : 'w-64',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          className
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-border">
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <Bot className="h-8 w-8 text-primary" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">AI CFA</span>
                  <span className="text-xs text-muted-foreground">Financial Advisor</span>
                </div>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 px-3 py-4">
            <nav className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = currentPage === item.id
                
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? 'default' : 'ghost'}
                    className={cn(
                      'w-full justify-start h-auto p-3',
                      isCollapsed && 'px-2',
                      isActive && 'bg-primary text-primary-foreground'
                    )}
                    onClick={() => {
                      onPageChange(item.id)
                      setIsMobileOpen(false)
                    }}
                  >
                    <Icon className={cn('h-5 w-5', !isCollapsed && 'mr-3')} />
                    {!isCollapsed && (
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-xs opacity-70">{item.description}</span>
                      </div>
                    )}
                  </Button>
                )
              })}
            </nav>
          </ScrollArea>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            {!isCollapsed && (
              <div className="text-xs text-muted-foreground text-center">
                <p>Powered by AI</p>
                <p className="font-medium">Certified Financial Advisor</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
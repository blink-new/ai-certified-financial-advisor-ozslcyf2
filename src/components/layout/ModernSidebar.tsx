import { useState } from 'react'
import { cn } from '@/lib/utils'
import {
  LayoutGrid,
  ArrowUpDown,
  CreditCard,
  Users,
  Tag,
  AlertTriangle,
  MoreHorizontal
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface ModernSidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

const navigation = [
  {
    icon: LayoutGrid,
    id: 'dashboard',
    active: true
  },
  {
    icon: ArrowUpDown,
    id: 'transactions'
  },
  {
    icon: CreditCard,
    id: 'accounts'
  },
  {
    icon: Users,
    id: 'contacts'
  },
  {
    icon: Tag,
    id: 'budget'
  },
  {
    icon: AlertTriangle,
    id: 'alerts'
  }
]

// Additional pages accessible via menu
const additionalPages = [
  { id: 'investments', label: 'Investments' },
  { id: 'retirement', label: 'Retirement' },
  { id: 'tax', label: 'Tax Planning' },
  { id: 'goals', label: 'Goals' },
  { id: 'nri', label: 'NRI Services' },
  { id: 'reports', label: 'Reports' }
]

export function ModernSidebar({ currentPage, onPageChange }: ModernSidebarProps) {
  return (
    <div className="minimal-sidebar w-16 h-full flex flex-col items-center py-6 space-y-6">
      {/* Logo */}
      <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">W</span>
      </div>
      
      {/* Navigation Icons */}
      <nav className="flex flex-col space-y-4">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                'w-10 h-10 rounded-lg flex items-center justify-center smooth-transition',
                isActive 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              )}
            >
              <Icon className="w-5 h-5" />
            </button>
          )
        })}
        
        {/* More Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                'w-10 h-10 rounded-lg flex items-center justify-center smooth-transition',
                'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              )}
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" className="w-48">
            {additionalPages.map((page) => (
              <DropdownMenuItem
                key={page.id}
                onClick={() => onPageChange(page.id)}
                className={cn(
                  'cursor-pointer',
                  currentPage === page.id && 'bg-gray-100'
                )}
              >
                {page.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  )
}
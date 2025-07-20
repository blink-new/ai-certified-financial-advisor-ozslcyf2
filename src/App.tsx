import { useState, useEffect } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { ModernSidebar } from '@/components/layout/ModernSidebar'
import { ModernDashboard } from '@/components/dashboard/ModernDashboard'
import { InvestmentsPage } from '@/components/pages/InvestmentsPage'
import { RetirementPage } from '@/components/pages/RetirementPage'
import { TaxPlanningPage } from '@/components/pages/TaxPlanningPage'
import { GoalsPage } from '@/components/pages/GoalsPage'
import { NRIPage } from '@/components/pages/NRIPage'
import { ReportsPage } from '@/components/pages/ReportsPage'
import blink from '@/blink/client'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="gradient-bg flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-white">Loading your financial dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="gradient-bg flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md mx-auto p-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">AI Certified Financial Advisor</h1>
            <p className="text-white/80">
              Professional-grade financial planning powered by AI
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-white/70">
              Please sign in to access your personalized financial dashboard
            </p>
          </div>
        </div>
      </div>
    )
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <ModernDashboard />
      case 'transactions':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Transactions</h1>
            <p className="text-muted-foreground">Transaction history and management</p>
            <div className="text-center py-12">
              <p className="text-muted-foreground">Transaction management coming soon...</p>
            </div>
          </div>
        )
      case 'accounts':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Connected Accounts</h1>
            <p className="text-muted-foreground">Manage your financial institution connections</p>
            <div className="text-center py-12">
              <p className="text-muted-foreground">Account management coming soon...</p>
            </div>
          </div>
        )
      case 'contacts':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Contacts</h1>
            <p className="text-muted-foreground">Manage your financial contacts and advisors</p>
            <div className="text-center py-12">
              <p className="text-muted-foreground">Contact management coming soon...</p>
            </div>
          </div>
        )
      case 'budget':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Budget & Expenses</h1>
            <p className="text-muted-foreground">AI-powered budget management and expense tracking</p>
            <div className="text-center py-12">
              <p className="text-muted-foreground">Budget management coming soon...</p>
            </div>
          </div>
        )
      case 'alerts':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Alerts & Notifications</h1>
            <p className="text-muted-foreground">Financial alerts and important notifications</p>
            <div className="text-center py-12">
              <p className="text-muted-foreground">Alert management coming soon...</p>
            </div>
          </div>
        )
      case 'investments':
        return <InvestmentsPage />
      case 'retirement':
        return <RetirementPage />
      case 'tax':
        return <TaxPlanningPage />
      case 'goals':
        return <GoalsPage />
      case 'nri':
        return <NRIPage />
      case 'reports':
        return <ReportsPage />
      case 'settings':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Manage your preferences and account settings</p>
            <div className="text-center py-12">
              <p className="text-muted-foreground">Settings coming soon...</p>
            </div>
          </div>
        )
      default:
        return <ModernDashboard />
    }
  }

  return (
    <div className="gradient-bg">
      {/* Modern Window Container */}
      <div className="min-h-screen p-8">
        <div className="modern-window max-w-7xl mx-auto min-h-[calc(100vh-4rem)]">
          {/* Traffic Light Buttons */}
          <div className="traffic-lights">
            <div className="traffic-light red"></div>
            <div className="traffic-light yellow"></div>
            <div className="traffic-light green"></div>
          </div>
          
          {/* Main Content */}
          <div className="flex h-[calc(100vh-8rem)]">
            {/* Sidebar */}
            <ModernSidebar 
              currentPage={currentPage} 
              onPageChange={setCurrentPage}
            />
            
            {/* Main Content Area */}
            <div className="flex-1 overflow-auto custom-scrollbar">
              {renderPage()}
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  )
}

export default App
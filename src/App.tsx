import { useState, useEffect } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { Sidebar } from '@/components/layout/Sidebar'
import { Dashboard } from '@/components/dashboard/Dashboard'
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">Loading your financial dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md mx-auto p-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">AI Certified Financial Advisor</h1>
            <p className="text-muted-foreground">
              Professional-grade financial planning powered by AI
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
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
        return <Dashboard />
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
      case 'investments':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Investment Portfolio</h1>
            <p className="text-muted-foreground">Portfolio analysis and investment recommendations</p>
            <div className="text-center py-12">
              <p className="text-muted-foreground">Investment management coming soon...</p>
            </div>
          </div>
        )
      case 'retirement':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Retirement Planning</h1>
            <p className="text-muted-foreground">Comprehensive retirement planning with Monte Carlo simulations</p>
            <div className="text-center py-12">
              <p className="text-muted-foreground">Retirement planning coming soon...</p>
            </div>
          </div>
        )
      case 'tax':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Tax Planning</h1>
            <p className="text-muted-foreground">Tax optimization strategies and loss harvesting</p>
            <div className="text-center py-12">
              <p className="text-muted-foreground">Tax planning coming soon...</p>
            </div>
          </div>
        )
      case 'goals':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Financial Goals</h1>
            <p className="text-muted-foreground">FIRE calculations and milestone planning</p>
            <div className="text-center py-12">
              <p className="text-muted-foreground">Goal planning coming soon...</p>
            </div>
          </div>
        )
      case 'nri':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">NRI Services</h1>
            <p className="text-muted-foreground">Cross-border financial planning for Non-Resident Indians</p>
            <div className="text-center py-12">
              <p className="text-muted-foreground">NRI services coming soon...</p>
            </div>
          </div>
        )
      case 'reports':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Financial Reports</h1>
            <p className="text-muted-foreground">Comprehensive financial health reports and analytics</p>
            <div className="text-center py-12">
              <p className="text-muted-foreground">Reports coming soon...</p>
            </div>
          </div>
        )
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
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
      />
      
      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen">
        <main className="p-6 lg:p-8">
          {renderPage()}
        </main>
      </div>

      <Toaster />
    </div>
  )
}

export default App
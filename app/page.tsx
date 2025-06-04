import { Header } from "@/components/header"
import { TabNavigation } from "@/components/tab-navigation"
import { DashboardWidgets } from "@/components/dashboard-widgets"

export default function Home() {
  return (
    <>
      <Header />
      <TabNavigation activeTab="overview" />
      <div className="mt-8">
        <DashboardWidgets />
      </div>
    </>
  )
}

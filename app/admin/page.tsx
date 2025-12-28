import { Suspense } from "react"
import AdminDashboardClient from "./admin-dashboard-client"

export default function AdminPage() {
  return (
    <Suspense fallback={null}>
      <AdminDashboardClient />
    </Suspense>
  )
}

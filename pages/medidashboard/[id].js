import { useRouter } from "next/router"

const MediDashboardDetail = () => {
  const router = useRouter()

  return (
    <>
      <h1>MediDashboar Detail</h1>
      <h2>{router.query.id}</h2>
    </>
  )
}

export default MediDashboardDetail

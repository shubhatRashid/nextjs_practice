import Link from "next/link"

const page = () => {
  return (
    <div>
      <div>Notifications</div>
      <Link href="/dashboard/archived">default nofitifications</Link>
    </div>
  )
}

export default page
import TicketDetail from '@/components/TicketDetail'
import React from 'react'

const Page = ({ params }) => {
  return (
    <div>
        <TicketDetail token={params} />
    </div>
  )
}

export default Page
import EventForm from '@/components/shared/EventForm'
import { getEventById } from '@/lib/actions/event.actions'
import { UpdateEventParams } from '@/types'
import { auth } from '@clerk/nextjs'
import React from 'react'

type UpdateEventProps = {
    params: {
        id: string
    }
}

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
    const event = await getEventById(id)
    // Get userId from clerk
    const { sessionClaims } = auth()
    const userId = sessionClaims?.userId as string

  return (
    <>
        <section className='bg-primary-50 bgdotted-pattern bg-cover bg-center py-5 md:py-10'>
            <h2 className="wrapper h3-bold text-center sm:text-left">
                Update Event
            </h2>
        </section>

        <div className="wrapper my-8">
            <EventForm userId={userId} type='Update' event={event} eventId={event._id} />
        </div>
    </>
  )
}

export default UpdateEvent
'use client'
import React, { useState } from 'react'
import UnitWarning from '../components/UnitWarning'

function page() {
    const [open, setOpen] = useState(true)

    function close() {
        setOpen(false)
    }
  return (
    <div className='h-full'>
        {open && <UnitWarning close={close}/>}
          <iframe className='portal ' src="https://rental-center.storedge.com/?companyId=134e9edb-9e09-4c0c-b371-c83c4c6fa9f8&facilityId=6e15c840-103b-4637-afa7-3fb38aabc957#/move-in"></iframe>
    </div>
  )
}

export default page
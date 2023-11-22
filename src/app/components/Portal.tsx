import React, { useState } from 'react'

interface PortalInterface{
    registered: boolean
}

function Portal({registered=false}: PortalInterface) {
    const [login, setLogin] = useState(registered)
  return (
    <div>
        {login ?
              <iframe src="https://rental-center.storedge.com/?companyId=134e9edb-9e09-4c0c-b371-c83c4c6fa9f8&facilityId=6e15c840-103b-4637-afa7-3fb38aabc957#/login"></iframe> :
              <iframe src="https://rental-center.storedge.com/?companyId=134e9edb-9e09-4c0c-b371-c83c4c6fa9f8&facilityId=6e15c840-103b-4637-afa7-3fb38aabc957#/sign-up?facilityId=6e15c840-103b-4637-afa7-3fb38aabc957" ></iframe>
    }
    </div>
  )
}

export default Portal
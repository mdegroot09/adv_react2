import React, {memo} from 'react'

let Profile = memo(function({name}) {
  return <div>Hello, {name}</div>
})

export default Profile
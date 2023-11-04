import Link from 'next/link'
import React from 'react'

const List = () => {
  return (
    <div>
        <ul>
            <li> <Link href='/events/1'> 1 </Link> </li>
            <li> <Link href='/events/2'> 2 </Link> </li>
            <li> <Link href='/events/3'> 3 </Link> </li>
        </ul>
    </div>
  )
}

export default List
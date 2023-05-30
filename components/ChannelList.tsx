'use client'

import { usePathname } from 'next/dist/client/components/navigation'
import { useEffect, useState } from 'react'

const ChannelList = () => {
    const pathname = usePathname()

    const serverId = pathname?.slice(8)

    console.log(serverId)

    return <div className="bg-[#2B2D31] flex-1">ChannelList</div>
}

export default ChannelList

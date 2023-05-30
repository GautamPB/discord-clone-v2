'use client'

import { db } from '@/firebase'
import { collection, doc, orderBy, query } from 'firebase/firestore'
import { usePathname } from 'next/dist/client/components/navigation'
import { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useSession } from 'next-auth/react'
import ChannelComponent from './ChannelComponent'
import { useDocument } from 'react-firebase-hooks/firestore'

const ChannelList = () => {
    const pathname = usePathname()

    const [serverId, setServerId] = useState<any>('')

    const [server] = useDocument(serverId && doc(db, 'servers', serverId))

    const [activeServer, setActiveServer] = useState<any>(null)

    const { data: session } = useSession()

    const [channels, loading, error] = useCollection(
        serverId &&
            query(
                collection(db, 'servers', serverId, 'channels'),
                orderBy('createdAt', 'desc')
            )
    )

    useEffect(() => {
        if (server) {
            setActiveServer(server?.data())
        }
    }, [server])

    useEffect(() => {
        if (pathname?.indexOf('server') !== -1) {
            setServerId(pathname?.slice(8))
        }
    }, [pathname])

    return (
        <div className="bg-[#2B2D31] flex w-full flex-1 flex-col">
            <div className="bg-[#2b2d31] shadow-lg py-4 px-3 text-md font-semibold text-white">
                <h1 className="truncate">{activeServer?.serverName}</h1>
            </div>

            <div className="space-y-2 p-2 flex-1 h-full overflow-y-scroll scrollbar-hide">
                {channels?.docs.map((channel) => (
                    <ChannelComponent
                        key={channel.id}
                        channelData={channel.data()}
                    />
                ))}
            </div>
        </div>
    )
}

export default ChannelList

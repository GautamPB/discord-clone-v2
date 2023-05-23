'use client'

import ServerIcon from './ServerIcon'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useSession, signOut } from 'next-auth/react'

const ServerList = () => {
    const { data: session } = useSession()

    const servers = [
        {
            imageURL:
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            serverName: 'Test Server',
        },

        {
            imageURL:
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            serverName: 'Test Server',
        },

        {
            imageURL:
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            serverName: 'Test Server',
        },

        {
            imageURL:
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            serverName: 'Test Server',
        },
    ]

    return (
        <div className="bg-[#1E1F22] w-1/4 p-2 flex flex-col items-center">
            {/* user profile */}
            <div className="border-b-2 border-[#35363C] pb-3">
                <img
                    src={session?.user?.image!}
                    alt=""
                    className="hover:rounded-xl transition-all h-12 object-fit w-12 rounded-3xl cursor-pointer hover:opacity-50"
                    onClick={() => signOut()}
                />
            </div>

            {/* server list */}
            <div className="space-y-2 flex-1 mt-2 scrollbar-hide overflow-y-scroll">
                {servers.map((server) => (
                    <ServerIcon
                        key={server.serverName}
                        imageURL={server.imageURL}
                        serverName={server.serverName}
                    />
                ))}

                {/* create server */}
                <div className="rounded-3xl hover:rounded-xl bg-[#2B2D31] h-12 w-12 justify-center flex items-center cursor-pointer hover:bg-[#23A559] group transition-all duration-200">
                    <PlusIcon className="h-6 w-6 text-[#23A559] rounded-3xl group-hover:text-white" />
                </div>
            </div>
        </div>
    )
}

export default ServerList

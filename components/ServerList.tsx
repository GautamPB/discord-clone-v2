'use client'

import ServerIcon from './ServerIcon'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

const boxStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    outline: 'none',
}

const ServerList = () => {
    const { data: session } = useSession()

    const [createServer, setCreateServer] = useState(false)
    const [serverName, setServerName] = useState('')
    const [serverPhoto, setServerPhoto] = useState('')

    const [servers, loading, error] = useCollection(collection(db, 'servers'))

    const handleServerCreation = async () => {
        const serverObj: serverObj = {
            members: [session?.user?.email!],
            serverOwner: {
                name: session?.user?.name!,
                email: session?.user?.email!,
            },
            serverName: serverName,
            serverPhoto: serverPhoto,
            createdAt: serverTimestamp(),
        }

        const generalChannel: channel = {
            channelName: 'general',
            createdAt: serverTimestamp(),
        }

        await addDoc(collection(db, 'servers'), serverObj)
            .then(async (docRef) => {
                await addDoc(
                    collection(db, 'servers', docRef.id, 'channels'),
                    generalChannel
                )
                setCreateServer(false)
            })
            .catch((err) => {
                console.error(err)
            })
    }

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
                {servers?.docs.map((server) => (
                    <ServerIcon
                        key={server.id}
                        serverId={server.id}
                        serverData={server}
                    />
                ))}

                {/* create server */}
                <div className="rounded-3xl hover:rounded-xl bg-[#2B2D31] h-12 w-12 justify-center flex items-center cursor-pointer hover:bg-[#23A559] group transition-all duration-200">
                    <PlusIcon
                        onClick={() => setCreateServer(true)}
                        className="h-6 w-6 text-[#23A559] rounded-3xl group-hover:text-white"
                    />
                </div>

                <Modal
                    open={createServer}
                    onClose={() => setCreateServer(false)}
                >
                    <Box sx={boxStyle}>
                        <div className="w-full h-full flex flex-col items-center">
                            <h1 className="text-2xl font-bold mb-12 text-center mt-4">
                                Customize your server
                            </h1>

                            <div className="flex flex-col px-4 space-y-8 w-full md:w-1/2 mx-auto">
                                <div className="flex flex-col items-start space-y-2">
                                    <label className="text-xs font-bold text-gray-700 tracking-wide">
                                        SERVER NAME
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-400/40 w-full p-3 rounded-xl outline-none border-none"
                                        value={serverName}
                                        onChange={(e) =>
                                            setServerName(e.target.value)
                                        }
                                        placeholder="What's your server's name?"
                                    />
                                </div>

                                <div className="flex flex-col items-start space-y-2">
                                    <label className="text-xs font-bold text-gray-700 tracking-wide">
                                        SERVER PHOTO
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-400/40 w-full p-3 rounded-xl outline-none border-none"
                                        value={serverPhoto}
                                        onChange={(e) =>
                                            setServerPhoto(e.target.value)
                                        }
                                        placeholder="Link to server photo"
                                    />
                                </div>
                            </div>

                            <div className="bg-gray-100 mt-8 w-full">
                                <div className="flex flex-col p-4 items-end w-full mx-auto md:w-1/2">
                                    <button
                                        onClick={handleServerCreation}
                                        className="bg-[#5865F2] px-8 py-2 rounded-md text-white font-bold cursor-pointer hover:bg-blend-darken transition-all duration-300 hover:bg-[#5865F2]/90"
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default ServerList

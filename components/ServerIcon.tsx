import { DocumentData } from 'firebase/firestore'
import { useRouter } from 'next/dist/client/components/navigation'

type Props = {
    serverId: string
    serverData: DocumentData
}

const ServerIcon = ({ serverId, serverData }: Props) => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.push(`/server/${serverId}`)}
            className="flex relative"
        >
            <img
                src={serverData.serverPhoto}
                alt=""
                className="hover:rounded-xl transition-all duration-200 h-12 object-fit w-12 rounded-3xl cursor-pointer"
            />
        </div>
    )
}

export default ServerIcon

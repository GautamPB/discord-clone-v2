import { DocumentData } from 'firebase/firestore'

type Props = {
    serverId: string
    serverData: DocumentData
}

const ServerIcon = ({ serverId, serverData }: Props) => {
    console.log(serverId)

    return (
        <div className="flex relative">
            <img
                src={serverData.serverPhoto}
                alt=""
                className="hover:rounded-xl transition-all duration-200 h-12 object-fit w-12 rounded-3xl cursor-pointer"
            />
        </div>
    )
}

export default ServerIcon

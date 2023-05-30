'use client'

import { DocumentData } from 'firebase/firestore'

type Props = {
    channelData: DocumentData
}

const ChannelComponent = ({ channelData }: Props) => {
    return (
        <div className="text-white px-3 bg-[#313338] p-2 rounded-md cursor-pointer">
            # {channelData.channelName}
        </div>
    )
}

export default ChannelComponent

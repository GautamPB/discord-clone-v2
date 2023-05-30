// server side components come with path parameters as props

type Props = {
    params: {
        serverId: string
    }
}

const page = ({ params: { serverId } }: Props) => {
    return <div className="flex flex-1 bg-[#313338]">{serverId}</div>
}

export default page

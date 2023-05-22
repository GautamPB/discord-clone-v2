type Props = {
    imageURL: string
    serverName: string
}

const ServerIcon = ({ imageURL, serverName }: Props) => {
    return (
        <div className="flex relative">
            <img
                src={imageURL}
                alt=""
                className="hover:rounded-xl transition-all duration-200 h-12 object-fit w-12 rounded-3xl cursor-pointer"
            />
        </div>
    )
}

export default ServerIcon

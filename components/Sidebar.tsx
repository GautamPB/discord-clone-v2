import ServerList from './ServerList'
import ChannelList from './ChannelList'

const Sidebar = () => {
    return (
        <div className="flex h-full w-4/5 md:w-2/5 lg:w-1/5">
            <ServerList />
            <ChannelList />
        </div>
    )
}

export default Sidebar

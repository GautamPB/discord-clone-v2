import ServerList from './ServerList'
import ChannelList from './ChannelList'

const Sidebar = () => {
    return (
        <div className="flex max-h-screen w-4/5 md:w-2/5 lg:w-1/4">
            <ServerList />
            <ChannelList />
        </div>
    )
}

export default Sidebar

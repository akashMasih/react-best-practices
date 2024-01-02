import Header from "./Header"
import Sidebar from "./Sidebar"

interface layoutP {
    children: React.ReactNode
}

const AdminLayout: React.FC<layoutP> = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <div className="flex-1 p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
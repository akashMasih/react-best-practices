import AdminLayout from '@/components/admin/layout'
import React from 'react'

const AdminPage: React.FC = () => {

    return (
        <AdminLayout>
            <h2 className="text-xl font-bold mb-4">Welcome to the Dashboard!</h2>
            <p>This is the main content area.</p>
        </AdminLayout>
    )
}

export default AdminPage
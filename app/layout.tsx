import './globals.css'
import SessionProvider from '@/components/SessionProvider'
import { getServerSession } from 'next-auth/next'
import Login from '@/components/Login'
import { authOptions } from '../pages/api/auth/[...nextauth]'

export const metadata = {
    title: 'Discord Clone',
    description: 'Discord Clone created using NextJS and ChatGPT',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions)

    return (
        <html lang="en">
            <body>
                <SessionProvider session={session}>
                    {!session ? (
                        <Login />
                    ) : (
                        <div className="flex h-screen">{children}</div>
                    )}
                </SessionProvider>
            </body>
        </html>
    )
}

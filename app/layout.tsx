import './globals.css'

export const metadata = {
    title: 'Discord Clone',
    description: 'Discord Clone created using NextJS and ChatGPT',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className="flex h-screen">{children}</div>
            </body>
        </html>
    )
}

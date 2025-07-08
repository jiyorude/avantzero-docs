 export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>Avant Zero | Experimental Quake III Machinima Algorithm </title>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}
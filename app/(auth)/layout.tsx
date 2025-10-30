const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full bg-amber-700 text-white">
            {children}
        </div>
     );
}
 
export default RootLayout;

import { Children } from "react";
import './defaultLayuot.css';


interface DefaultLayoutProps {
    children: React.ReactNode;
}

export default function DefaultLayout ({children}: DefaultLayoutProps) {
    return (
        <>
            <div className="layaout">
                <main className="">
                    {children}
                </main>

            </div>
        </>
    );
}
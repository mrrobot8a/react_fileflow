import { NavbarCustom } from '../../auth/pages/navbar/navbar_custom';
import './dafault_layuot.css';
interface DefaultLayuotProbs{
    children: React.ReactNode;
}


export default function DafaultLayuott  ({children}: DefaultLayuotProbs) {

    return (
        <>
            <div className="dafault_layuot_container">
                <div >
                    <NavbarCustom></NavbarCustom>
                </div>
                <main className="main">
                    {children}
                </main>

            </div>
        </>
    );
}

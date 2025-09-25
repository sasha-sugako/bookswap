import {Layout} from "antd";
import AppHeader from "./AppHeader.jsx";
import AppContext from "./AppContext.jsx";

export default function AppLayout({ children }){
    return (<Layout>
        <AppHeader />
        <AppContext>
            {children}
        </AppContext>
    </Layout>)
}

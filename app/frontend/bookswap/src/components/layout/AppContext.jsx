import {Layout} from "antd";

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 4rem)',
    color: '#1B2D45',
    background: '#F4F7FB',
    padding: '1rem',
};
export default function AppContext({children}){
    return <Layout.Content style={contentStyle}>
        {children}
    </Layout.Content>
}

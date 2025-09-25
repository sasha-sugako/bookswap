import {Layout, Drawer, Button, Menu} from "antd";
import {useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {BookOutlined} from "@ant-design/icons";

const headerStyle = {
    background: '#1B2D45',
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    height: '4rem',
    justifyContent: 'space-between'
};
export default function AppHeader(){
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();
    let user = 1;
    function openDrawer(){
        if (user) {
            setOpen(true)
        }
        return <Navigate to="/login" replace />
    }
    return <Layout.Header style={headerStyle}>
        <div style={{display: 'flex', flexDirection: 'row', position: 'relative'}}>
            <Link to="/" style={
                {   color: 'transparent',
                    textDecoration: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%', }}/>
            <BookOutlined style={{color: '#fff'}}/>
            <h3>
                BookSwap
            </h3>
        </div>
        {
            user ?
                <>
                    <Button type="primary" onClick={()=>setOpen(true)}>
                        Menu
                    </Button>
                    <Drawer
                        title="Menu"
                        closable={{ 'aria-label': 'Close Button' }}
                        onClose={()=>setOpen(false)}
                        open={open}
                    >
                        <div style={{display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                            height: '100%'
                        }}>
                        <Menu mode="inline" selectable={false}>
                            <Menu.Item key="1"><Link to="/profile">Profile</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/my-books">My Books</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/my-requests">My Requests</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/requests-to-me">Requests To Me</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/reviews">Reviews</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/exchange-history">Exchange History</Link></Menu.Item>
                        </Menu>
                        <Button type="primary">
                            Logout
                        </Button>
                        </div>
                    </Drawer>
                </>
                :
                <Button type="primary" onClick={()=>navigate('/login')}>
                    Register / Login
                </Button>
        }

    </Layout.Header>
}

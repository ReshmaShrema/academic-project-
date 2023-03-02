import { Menu } from "antd"
// in react dom we use import {Link} from 'react-dom'
import Link from "next/link"
import {AppstoreOutlined ,LoginOutlined,UserAddOutlined,} from '@ant-design/icons'
const {Item} =Menu; //Menu.Item
const TopNav = ()=>{
    return (
        // mode = horizontal,align item in horizontal way
        <Menu mode="horizontal">
            <Item icon={<AppstoreOutlined/>}>
                {/* instead of href 'to' is  used in react */}
                <Link href="/" legacyBehavior>
                    <a>App</a>
                </Link>
            </Item>
            <Item icon={<LoginOutlined />}>
                <Link href="/login" legacyBehavior>
                    <a>Login</a>
                </Link>
            </Item>
            <Item icon={<UserAddOutlined/>}>
                <Link href="/login" legacyBehavior>
                    <a>Register</a>
                </Link>
            </Item>
        </Menu>
    );
}
export default TopNav

// import to app.js sothat available in all the pages
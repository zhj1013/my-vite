import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Menu } from '@/types'
import Logo from '@/images/logo.svg'
import './index.scss'

const menus: Menu[] = [
    {
        name: '首页',
        href: '/',
        target: '_self'
    },
    {
        name: '我的',
        href: '/my',
    }
]

export default function IndexPage() {
    return (
        <div className="index_page">
            <Header title="happy Vite" />
            <div className="index_main_wrap">
                <img src={Logo}/>
                <div className="index_main">
                    <div className="top">top</div>
                    <div className="left">left</div>
                    <div className="right">right</div>
                </div>
            </div>
            <Footer menus={menus}/>
        </div>
    )
}
import { Menu } from '@/types'

interface FooterProps {
    menus: Menu[];
}
export default function Footer(props: FooterProps) {
    const { menus } = props;
    return (
        <div className="footer">
            {menus.map(menu => (
                <a className="menu_item" key={menu.name} href={menu.href} target={menu.target ?? '_target'}>
                    {menu.icon}
                    <span className="menu_text">{menu.name}</span>
                </a>
            ))}
        </div>
    )
}
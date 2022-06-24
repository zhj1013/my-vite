interface HeaderProps {
    title: string;
}

export default function Header(props :HeaderProps) {
    const { title } = props;
    return (
        <div className="header">
            <div className="title">{title}</div>
        </div>
    )
}
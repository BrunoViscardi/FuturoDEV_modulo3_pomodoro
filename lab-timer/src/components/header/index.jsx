import './header.css'

export function Header() {
    return (
        <header className='container--header'>
            <img height="20px" src="/logo-lab.png" alt="Logotipo do LAB Timer365" />

            <nav>
                <a href="#">Home</a>
                <a href="#">Historico</a>
            </nav>
        </header>
    )
}
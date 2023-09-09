import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <div>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/tw.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imagens/ig.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <img src='/imagens/logo.png' alt='logo' />
            </div>
            <div>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape
import illustationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export const Home = () => {
    return (
        <div>
            <aside>
                <img src={illustationImg} alt="Ilustrações simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A AO-VIVO</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="letmeask" />
                    <button>
                        <img src={googleIconImg} alt="Icon Google" />
                        Crie sua sala com o Google
                    </button>
                    <div>Ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder='Digite o codigo da sala'
                        />
                        <button type='submit'>Entrar na sala  </button>
                    </form>
                </div>

            </main>
        </div>
    )
}
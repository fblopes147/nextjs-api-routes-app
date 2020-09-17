import Geral from '../../components/InfoGerais';
import Conversao from '../../components/ConversaoReal';
import Lugares from '../../components/TabelaLugares';
import styles from '../../styles.module.css'

export default() => {
    return (
        <div>
            <div className={styles.telafundoInfoGerais}>
                <Geral />
                <br />
            </div>
            <div className={styles.telafundoConversor}>
                <Conversao />
            </div>
            <br />
            <div>
                <Lugares />
            </div>
        </div>
    )
}
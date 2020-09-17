import Geral from '../../components/InfoGerais';
import Conversao from '../../components/ConversaoReal';
import Lugares from '../../components/TabelaLugares';
import styles from '../../styles.module.css'

export default() => {
    return (
        <div className={styles.telafundo}>
            <Geral />
            <br />
            <Conversao />
            <br />
            <Lugares />
        </div>
    )
}
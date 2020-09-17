import React from "react"
import styles from '../styles.module.css'

export default () => {
    return(
        <div className={styles.centralizar}>
            <label className={styles.labelInfo}>LUGARES QUE VISITEI</label>
            <table border="5" align="center">
                <tr>
                    <th className={styles.colunaAtracao}>Atração</th>
                    <th className={styles.colunaCidade}>Cidade</th>
                    <th className={styles.colunaEstado}>Estado</th>
                    <th className={styles.colunaDescricao}>Descrição</th>
                </tr>
                <tr>
                    <td className={styles.colunaAtracao}>The Strip</td>
                    <td className={styles.colunaCidade}>Las Vegas</td>
                    <td className={styles.colunaEstado}>Nevada</td>
                    <td className={styles.colunaDescricao}>
                        Rua com os maiores Hotéis-Cassinos do mundo. Todos são grandiosos e valem a pena a visita. Posso destacar o MGM-Grand e o Caesar's Palace
                    </td>
                </tr>
                <tr>
                    <td className={styles.colunaAtracao}>Big Sur/Pacific Highway</td>
                    <td className={styles.colunaCidade}>Várias cidades litorâneas</td>
                    <td className={styles.colunaEstado}>California</td>
                    <td className={styles.colunaDescricao}>
                        Estrada entre San Francisco e Los Angeles com belas e imperdíveis paisagens do litoral da California. Vale a pena fazer o trajeto por alguns dias, parando em cidades como Solvang, Santa Mônica e Camarillo
                    </td>
                </tr>
                <tr>
                    <td className={styles.colunaAtracao}>Niagara Falls</td>
                    <td className={styles.colunaCidade}>Buffalo</td>
                    <td className={styles.colunaEstado}>New York</td>
                    <td className={styles.colunaDescricao}>
                        Conjunto de cataratas que fazem a fronteira natural entre EUA e Canadá. Vistas inesquecíveis e atrações que valem a pena como o barco que chega muito perto das quedas d'água e um show de fogos semanal
                    </td>
                </tr>
                <tr>
                    <td className={styles.colunaAtracao}>Indianapolis Motors Speedway</td>
                    <td className={styles.colunaCidade}>Indianapolis</td>
                    <td className={styles.colunaEstado}>Indiana</td>
                    <td className={styles.colunaDescricao}>
                        Considerado um dos templos do Automobilismo com um museu muito interessante. Assistir as corridas 'in loco' é uma sensação indescrítivel para os amantes do automobilismo (meu caso!!!)
                    </td>
                </tr>
                <tr>
                    <td className={styles.colunaAtracao}>Walt Disney World</td>
                    <td className={styles.colunaCidade}>Orlando</td>
                    <td className={styles.colunaEstado}>Florida</td>
                    <td className={styles.colunaDescricao}>
                        Não é a toa apelidado de 'O lugar de maior magia do mundo'! Os parques são sensacionais (apesar de caros) e as atrações são comentários a parte. Destaco a atração do Avatar no Animal Kingdom que, apesar de ter uma fila enorme, vale muito a pena!
                    </td>
                </tr>
            </table>
        </div>
    )
}
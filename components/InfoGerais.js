import React from "react"
import styles from '../styles.module.css'

export default () => {
    return(
        <div className={styles.centralizar}>
            <label className={styles.labelInfo}>INFORMAÇÕES GERAIS</label>
            <table border="5" align="center">
                <tr>
                    <td className={styles.centralizar, styles.colunaInfo1}>Capital</td>
                    <td className={styles.colunaInfo2}>Washington D.C.</td>
                </tr>
                <tr>
                    <td className={styles.centralizar, styles.colunaInfo1}>Moeda Corrente</td>
                    <td className={styles.colunaInfo2}>Dólar Americano</td>
                </tr>
                <tr>
                    <td className={styles.centralizar, styles.colunaInfo1}>Companhias Aéreas (Vôos Diretos partindo de SP)</td>
                    <td className={styles.colunaInfo2}>
                        <table border="1" align="center" bgcolor="#CCC">
                            <tr>
                                <td className={styles.colunaCiaAereas1}>Delta</td>
                                <td className={styles.colunaCiaAereas2}>Atlanta, New York</td>
                            </tr>
                            <tr>
                                <td className={styles.colunaCiaAereas1}>United Airlines</td>
                                <td className={styles.colunaCiaAereas2}>Houston, Chicago, Washington D.C., New York/Newark</td>
                            </tr>
                            <tr>
                                <td className={styles.colunaCiaAereas1}>American Airlines</td>
                                <td className={styles.colunaCiaAereas2}>New York, Miami, Dallas, Los Angeles</td>
                            </tr>
                            <tr>
                                <td className={styles.colunaCiaAereas1}>LATAM</td>
                                <td className={styles.colunaCiaAereas2}>New York, Miami</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    )
}
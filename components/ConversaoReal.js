import React from "react"
import styles from '../styles.module.css'

export default class ConversorMoeda extends React.Component{
    handleValorRealChange = (e) => {
        this.setState({valorReal: e.target.value});
    }

    handleValorDolarChange = (e) => {
        this.setState({valorDolar: e.target.value});
    }

    handleConverter = () => {
        var valorConversao = this.state.valorReal * CotacaoDolar();
        
        document.querySelector("[name='valorDolar']").value = valorConversao.toFixed(2);
    }

    render(){
        return(
            <div className={styles.centralizar}>
                <label className={styles.labelInfo}>CONVERSOR DE MOEDA</label>
                <p />
                <label className={styles.labelConversor}>COTAÇÃO EM 17/09/2020 - US$1 = R$5,27</label>
                <p />
                <table align="center">
                    <tr>
                        <td><label>Valor em Real</label></td>
                        <td><input type="text" name="valorReal" onChange={this.handleValorRealChange} /></td>
                        <td><button onClick={this.handleConverter}> Converter </button></td>
                    </tr>
                    <tr>
                        <td><label>Valor Convertido em Dólar</label></td>
                        <td><input type="text" name="valorDolar" onChange={this.handleValorDolarChange} /></td>
                    </tr>
                </table>
            </div>
        )
    }
}

function CotacaoDolar() {
    var valorCotacao = 5.27;

    return valorCotacao;
}

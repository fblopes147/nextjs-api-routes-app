import React from "react"

import Button from '@material-ui/core/Button';
import NovoFuncionarioIcon from '@material-ui/icons/AddBox';

export default class ExibirInsercao extends React.Component{
    render(){
        return(
            <div>
                <a style={{fontSize:"30px", fontWeight:"bold"}} >INSERÇÃO DE DADOS</a>
                <p></p>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<NovoFuncionarioIcon />}
                    href="dadosfuncionarios"
                    style={{marginRight:"20px"}}
                >
                    Inserir Novo Funcionário
                </Button>
            </div>
        )
    }
}
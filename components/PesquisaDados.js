import React from "react"

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

var nomeFuncionario = "";

const PesquisarFuncionario = () => {
    // nomeFuncionario = document.querySelector("[name='txtNomeFuncionario']").value;
    nomeFuncionario = document.querySelector("[id='txtNomeFuncionario']").value;
    
    if(nomeFuncionario == ""){
        alert("Nome deve ser preenchido");
    }
    else{
        alert(nomeFuncionario);
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

export default class ExibirConsulta extends React.Component{
    handleNomeFuncionario = (e) => {
        this.setState({txtNomeFuncionario: e.target.value});
    }
    
    render(){
        return(
            <div>
                <a style={{fontSize:"30px", fontWeight:"bold"}} >CONSULTA DE DADOS</a>
                <p/>
                <TextField
                    id="txtNomeFuncionario"
                    label="Nome do Funcionário"
                    style={{ margin: 8, width:"300px", marginRight:"20px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SearchIcon />}
                    onClick={PesquisarFuncionario}
                    style={{marginTop:"6px"}}
                >
                    Pesquisar
                </Button>
            </div>
        )
    }
}
import React from 'react';
import Select from 'react-select';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import BackIcon from '@material-ui/icons/ArrowBack';

// import TextField from '@material-ui/core/TextField';

const listaSexo = [
    {value: 'Feminino', label: 'F'},
    {value: 'Masculino', label: 'M'}
]

const listaEstadoCivil = [
    {value: 'Solteiro', label: 'Solteiro'},
    {value: 'Casado', label: 'Casado'},
    {value: 'Viúvo', label: 'Viúvo'},
    {value: 'Divorciado', label: 'Divorciado'}
]

const listaEstado = [
    {value: 'Acre', label: 'AC'},
    {value: 'Alagoas ', label: 'AL'},
    {value: 'Amapá ', label: 'AP'},
    {value: 'Amazonas ', label: 'AM'},
    {value: 'Bahia ', label: 'BA'},
    {value: 'Ceará ', label: 'CE'},
    {value: 'Distrito Federal ', label: 'DF'},
    {value: 'Espírito Santo ', label: 'ES'},
    {value: 'Goiás ', label: 'GO'},
    {value: 'Maranhão ', label: 'MA'},
    {value: 'Mato Grosso ', label: 'MT'},
    {value: 'Mato Grosso do Sul ', label: 'MS'},
    {value: 'Minas Gerais ', label: 'MG'},
    {value: 'Pará ', label: 'PA'},
    {value: 'Paraíba ', label: 'PB'},
    {value: 'Paraná ', label: 'PR'},
    {value: 'Pernambuco ', label: 'PE'},
    {value: 'Piauí ', label: 'PI'},
    {value: 'Rio de Janeiro ', label: 'RJ'},
    {value: 'Rio Grande do Norte ', label: 'RN'},
    {value: 'Rio Grande do Sul ', label: 'RS'},
    {value: 'Rondônia ', label: 'RO'},
    {value: 'Roraima ', label: 'RR'},
    {value: 'Santa Catarina ', label: 'SC'},
    {value: 'São Paulo ', label: 'SP'},
    {value: 'Sergipe ', label: 'SE'},
    {value: 'Tocantins ', label: 'TO'}
]

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
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

var nomeFuncionario = "";

const SalvarDados = () => {
    // Acessar API de salvar dados no Banco
    alert("Os dados foram salvos com sucesso!");
}

export default class InserirNovoFuncionario extends React.Component{
    render(){
        // const classes = useStyles();
        // const [sexo, setSexo] = React.useState('F');
        
        // const handleChangeSexo = (event) => {
        //     setSexo(event.target.value);
        //   };

        return(
            <div>
                <a style={{fontSize:"30px", fontWeight:"bold"}} >ADICIONAR NOVO FUNCIONÁRIO</a>
                <p/>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SaveIcon />}
                        onClick={SalvarDados}
                        style={{marginRight:"20px"}}
                    >
                        Salvar
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<BackIcon />}
                        href="principal"
                    >
                        Voltar
                    </Button>
                </div>
                <p />

                {/* <TextField
                    id="txtNomeFuncionario"
                    label="Nome do Funcionário"
                    style={{ margin: 8, width:"300px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtProntuario"
                    label="Prontuário"
                    style={{ margin: 8, width:"185px", marginRight:"10px"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="txtDtNascimento"
                    label="Data de Nascimento"
                    style={{ margin: 8, width:"180px", marginRight:"10px"}}
                    type="date"
                    format="dd/MM/yyyy"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />

                <TextField
                    id="txtSexo"
                    label="Sexo"
                    style={{ margin: 8, width:"180px", marginRight:"10px"}}
                    size="small"
                    value={sexo}
                    onChange={handleChangeSexo}
                >
                    {listaSexo.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField> */}
                <table>
                    <tr style={{height:"60px"}}>
                        <td width="150"><label>Nome do Funcionário</label></td>
                        <td width="315">
                            <input type="text" name="txtNomeFuncionario" style={{width:"300px", height:"20px"}} />
                        </td>
                        <td width="75"><label>Prontuário</label></td>
                        <td width="200">
                            <input type="text" name="txtProntuario" style={{width:"185px", height:"20px"}} />
                        </td>
                        <td width="140"><label>Data de Nascimento</label></td>
                        <td width="140">
                            <input type="date" name="txtDtNascimento" style={{width:"125px", height:"20px"}} />
                        </td>
                        <td width="40"><label>Sexo</label></td>
                        <td width="110">
                            <Select options={listaSexo}/>
                        </td>
                        <td width="90"><label>Estado Civil</label></td>
                        <td width="150">
                            <Select options={listaEstadoCivil}/>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr style={{height:"60px"}}>
                        <td width="40"><label>CEP</label></td>
                        <td width="90">
                            <input type="text" name="txtCEP" style={{width:"75px", height:"20px"}} />
                        </td>
                        <td width="70"><label>Endereço</label></td>
                        <td width="315">
                            <input type="text" name="txtEndereco" style={{width:"300px", height:"20px"}} />
                        </td>
                        <td width="55"><label>Bairro</label></td>
                        <td width="215">
                            <input type="text" name="txtBairro" style={{width:"200px", height:"20px"}} />
                        </td>
                        <td width="55"><label>Cidade</label></td>
                        <td width="215">
                            <input type="text" name="txtCidade" style={{width:"200px", height:"20px"}} />
                        </td>
                        <td width="55"><label>Estado</label></td>
                        <td width="75">
                        <Select options={listaEstado}/>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr style={{height:"60px"}}>
                        <td width="65"><label>Telefone</label></td>
                        <td width="120">
                            <input type="text" name="txtTelFuncionario" style={{width:"105px", height:"20px"}} />
                        </td>
                        <td width="50"><label>Cargo</label></td>
                        <td width="165">
                            <input type="text" name="txtCargo" style={{width:"150px", height:"20px"}} />
                        </td>
                        <td width="40"><label>Área</label></td>
                        <td width="115">
                            <input type="text" name="txtArea" style={{width:"100px", height:"20px"}} />
                        </td>
                        <td width="50"><label>Gestor</label></td>
                        <td width="165">
                            <input type="text" name="txtGestor" style={{width:"150px", height:"20px"}} />
                        </td>
                        <td width="110"><label>Telefone Gestor</label></td>
                        <td width="120">
                            <input type="text" name="txtTelGestor" style={{width:"105px", height:"20px"}} />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
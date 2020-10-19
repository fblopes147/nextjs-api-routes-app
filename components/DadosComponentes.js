import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSave } from "@fortawesome/free-solid-svg-icons";
library.add( faSave);
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";

// import { useViaCep } from 'use-via-cep'

var nomeFuncionario = "";

const onClick_Save = function(){
    nomeFuncionario = document.querySelector("[id='txtNomeFuncionario']").value;

    alert(nomeFuncionario);
}

const Save = () => {
    return <FaIcon onClick={onClick_Save} icon="save" />
};

const genero = [
    {
        value: '-',
        label: '-',
    },
    {
        value: 'Feminino',
        label: 'F',
    },
    {
        value: 'Masculino',
        label: 'M',
    },
]

const estcivil = [
    {
        value: '-',
        label: '-',
    },
    {
        value: 'Solteiro',
        label: 'Solteiro',
    },
    {
        value: 'Casado',
        label: 'Casado',
    },
    {
        value: 'Viúvo',
        label: 'Viúvo',
    },
    {
        value: 'Divorciado',
        label: 'Divorciado',
    },
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [sexo, setSexo] = React.useState(0);
    const [estadoCivil, setEstadoCivil] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeSexo = (event) => {
        setSexo(event.target.value);
    }

    const handleChangeEstadoCivil = (event) => {
        setEstadoCivil(event.target.value);
    }

    // const codigoCEP = () => {
    //     const {cep, data, setCEP} = useViaCep()
    // }

    return (
        <div className={classes.root}>
            <Save />
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                    <Tab label="Dados do Funcionário" {...a11yProps(0)} />
                    <Tab label="Mapeamento" {...a11yProps(1)} />
                    <Tab label="Medidas Realizadas" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <TextField
                    id="txtNomeFuncionario"
                    label="Nome do Funcionário"
                    style={{ margin: 8, width:"300px" }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="txtProntuario"
                    label="Prontuário"
                    style={{ margin: 8, width:"200px" }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="txtDtNascimento"
                    label="Data de Nascimento"
                    type="date"
                    format="dd/MM/yyyy"
                    style={{ margin: 8, width:"185px" }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="txtSexo"
                    label="Sexo"
                    select
                    value={sexo}
                    style={{ margin: 8, width:"75px" }}
                    margin="normal"
                    onChange={handleChangeSexo}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                    {genero.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    id="txtEstadoCivil"
                    label="Estado Civil"
                    select
                    value={estadoCivil}
                    style={{ margin: 8, width:"150px" }}
                    margin="normal"
                    onChange={handleChangeEstadoCivil}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                    {estcivil.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    id="txtCEP"
                    label="CEP"
                    style={{ margin: 8, width:"120px" }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    // value={codigoCEP.cep}
                    // onChange={({target}) => codigoCEP.setCEP(target.value)}
                />
                <TextField
                    id="txtEndereco"
                    label="Endereço"
                    style={{ margin: 8, width:"450px" }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    // value={JSON.stringify(codigoCEP.data)}
                />
                <TextField
                    id="txtBairro"
                    label="Bairro"
                    style={{ margin: 8, width:"300px" }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="txtCidade"
                    label="Cidade"
                    style={{ margin: 8, width:"400px" }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="txtEstado"
                    label="Estado"
                    style={{ margin: 8, width:"200px" }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="txtGestor"
                    label="Gestor Imediato"
                    style={{ margin: 8, width:"300px" }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                {/* <table>
                    <tr>
                        <td><label>Nome</label></td>
                        <td width="250"><input type="text" id="txtNomeFuncionario" style={{width:"235px"}}/></td>
                        
                        <td><label>Prontuário</label></td>
                        <td width="150"><input type="text" name="txtProntuario" style={{width:"135px"}} /></td>

                        <td><label>Data de Nascimento</label></td>
                        <td width="90"><InputDtNascimento /></td>
                    </tr>
                </table> */}
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
    );
}

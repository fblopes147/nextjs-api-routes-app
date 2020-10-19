import styles from '../styles.module.css'
import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
library.add( faEdit);
library.add( faBan);
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";

const Edit = () => {
    //return <FaIcon onClick={onClick_Search} icon="edit" />
    return <FaIcon icon="edit" />
};

const Delete = () => {
    //return <FaIcon onClick={onClick_Search} icon="edit" />
    return <FaIcon icon="ban" />
};

export default class TabelaDados extends React.Component{
    render(){
        return(
            <div>
                <table border="2">
                    <tr>
                        <th>Id</th>
                        <th>Nome do Funcionário</th>
                        <th>Cargo</th>
                        <th>Telefone</th>
                        <th>Gestor</th>
                        <th>Telefone Gestor</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>abc</td>
                        <td>Analista</td>
                        <td>123456789</td>
                        <td>def</td>
                        <td>987654321</td>
                        <td title="Editar Funcionário" className={styles.centralizar}><Edit /></td>
                        <td title="Excluir Funcionário" className={styles.centralizar}><Delete /></td>
                    </tr>
                </table>
            </div>
        )
    }
}
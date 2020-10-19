import Pesquisa from '../../components/PesquisaDados';
import Dados from '../../components/GridDadosFuncionarios';
import Adicionar from '../../components/InserirDados'

export default() => {
    return (
        <div>
            <Adicionar />
            <br />
            <Pesquisa />
            <br />
            <Dados />
            <br />
        </div>
    )
}
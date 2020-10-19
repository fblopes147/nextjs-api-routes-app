import useSWR from 'swr'
import Person from '../components/Person'
import Link from 'next/link'
import styles from '../styles.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)
    
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      {/* <li className={styles.mapeamento}>
        <a title="MapeamentoInfo">MAPEAMENTO DE INFORMAÇÕES</a>
      </li>
      
      <label className={styles.labelInfo}>NOME</label>
      <br />
      <input type="text" name="teste" /> */}

      <li className={styles.mapeamento}>
        <Link href="MapeamentoFuncionarios/principal">
          <a>MAPEAMENTO DE FUNCIONÁRIOS</a>
        </Link>
      </li>

      {/* <li className={styles.hello}> 
        <Link href="GuiaEUA/guia">
          <a title="GuiaInfo">GUIA DE VIAGENS - INFORMAÇÕES EUA</a>
        </Link>
      </li> */}
      {/* <ul>
        {data.map((p,i) => (<Person key={i} person={p} />))}
      </ul> */}
    </div>
  )
}

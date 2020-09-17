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
    // <ul>
    //     {data.map((p,i) => (<Person key={i} person={p} />))}
    // </ul>
    <div>
      <li className={styles.hello}> 
        <Link href="GuiaEUA/guia">
          <a title="GuiaInfo">GUIA DE VIAGENS - INFORMAÇÕES EUA</a>
        </Link>
      </li>
      <ul>
        {data.map((p,i) => (<Person key={i} person={p} />))}
      </ul>
    </div>
  )
}

import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'
import '/src/assets/App.css'

export function App() {
    const [name, setName] = useState('midudev')

    console.log('render with name: ', name)

    const addAt = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard addAt={addAt} userName={name}>
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard addAt={addAt} userName="halivert">
                Hali Velazquez Vazquez
            </TwitterFollowCard>

            <TwitterFollowCard addAt={addAt} userName="3velayna">
                Evelyn Serrano Acosta
            </TwitterFollowCard>

            <button className='tw-app-button' onClick={()  => setName('Verenaiss')}>
                Cambio nombre
            </button>
        </section>
    )
}
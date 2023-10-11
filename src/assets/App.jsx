import { TwitterFollowCard } from './TwitterFollowCard'
import '/src/assets/App.css'

export function App() {
    const addAt = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard addAt={addAt} userName="midudev">
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard addAt={addAt} userName="halivert">
                Hali Velazquez Vazquez
            </TwitterFollowCard>

            <TwitterFollowCard addAt={addAt} userName="3velayna">
                Evelyn Serrano Acosta            </TwitterFollowCard>
        </section>
    )
}
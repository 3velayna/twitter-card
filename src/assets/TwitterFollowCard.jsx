import { useState } from 'react'

export function TwitterFollowCard({ addAt, userName, children, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    /*const imageSrc = 'http://unavatar.io/${userName}'*/
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    alt="El avatar de midudev"
                    src={`https://unavatar.io/${userName}`} />
                {/*src="http://unavatar.io/{userName}"*/}
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{addAt(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className= 'tw-followCard-text'>{text}</span>
                    <span className='tw-follow-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
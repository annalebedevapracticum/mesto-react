function Card({ link, name, likes, owner, userId, onImageClick }) {
    const getIsLiked = () => likes.some((item) => {
        return item._id === userId;
    })

    const isOwner = owner._id === userId;
    return (
        <div className="card">
            <img className="card__image" alt="Картинка" src={link} onClick={() => onImageClick({link, name})}/>
            {isOwner && <button type="button" className="card__delete"></button>}
            <div className="card__description">
                <p className="card__title">{name}</p>
                <div className="card__like-wraper">
                    <button type="button" className={`card__like ${getIsLiked() ? 'card__like_active' : ''}`}></button>
                    <div className="card__like-count">{likes.length}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;
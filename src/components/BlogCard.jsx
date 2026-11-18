// 文件路径：src/components/BlogCard.jsx
import { Link } from 'react-router'
import { useFavorites } from '../context/FavoriteContext'

function BlogCard({ id, title, summary, date, category }) {
  const { isFavorite, toggleFavorite } = useFavorites()

  function handleFavorite(e) {
    e.preventDefault()   // 阻止 Link 跳转
    toggleFavorite(id)
  }

  return (
    <Link to={`/post/${id}`} className="card-link">
      <div className="card">
        <span className="tag">{category}</span>
        <h3>{title}</h3>
        <p>{summary}</p>
        <div className="card-footer">
          <span className="date">{date}</span>
          <button className="fav-btn" onClick={handleFavorite}>
            {isFavorite(id) ? '&#x2665;' : '♡'}
          </button>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
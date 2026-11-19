// 文件路径：src/components/BlogCard.tsx
import { type MouseEvent } from 'react'
import { Link } from 'react-router'
import { useFavorites } from '../context/FavoriteContext'

interface BlogCardProps {
  id: number
  title: string
  summary: string
  date: string
  category: string
}

function BlogCard({ id, title, summary, date, category }: BlogCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites()

  function handleFavorite(e: MouseEvent<HTMLButtonElement>) {
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

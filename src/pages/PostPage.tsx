// 文件路径：src/pages/PostPage.tsx
import { useParams, Link } from 'react-router'
import { usePosts } from '../hooks/usePosts'
import { useFavorites } from '../context/FavoriteContext'

function PostPage() {
  const { id } = useParams()
  const { isLoading, error, getArticleById } = usePosts()
  const { isFavorite, toggleFavorite } = useFavorites()
  const article = getArticleById(id)

  if (isLoading) return <p className="status-msg">加载中...</p>
  if (error) return <p className="status-msg error">加载失败：{error}</p>

  if (!article) {
    return (
      <div className="not-found">
        <h2>文章不存在</h2>
        <Link to="/">返回首页</Link>
      </div>
    )
  }

  return (
    <article className="post-view">
      <div className="post-header">
        <h1>{article.title}</h1>
        <button className="fav-btn" onClick={() => toggleFavorite(article.id)}>
          {isFavorite(article.id) ? '&#x2665; 已收藏' : '♡ 收藏'}
        </button>
      </div>

      <span className="category-tag">{article.category}</span>
      <time>{article.date}</time>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <Link to="/" className="back-link">← 返回首页</Link>
    </article>
  )
}

export default PostPage
// 文件路径：src/components/NavBar.tsx
import { useFavorites } from '../context/FavoriteContext'

function NavBar() {
  const { favoriteCount } = useFavorites()

  return (
    <header className="navbar">
      <a href="/" className="logo">RUNOOB Blog</a>
      <nav>
        <a href="/">首页</a>
        {favoriteCount > 0 && (
          <span className="fav-badge">收藏 {favoriteCount}</span>
        )}
      </nav>
    </header>
  )
}

export default NavBar
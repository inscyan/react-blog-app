// 文件路径：src/context/FavoriteContext.tsx
import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react'

// 收藏列表状态：文章 id 数组
type FavoriteState = number[]

type FavoriteAction =
  | { type: 'TOGGLE'; id: number }
  | { type: 'CLEAR' }

interface FavoritesContextValue {
  favoriteIds: FavoriteState
  favoriteCount: number
  toggleFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
}

// 1. 创建 Context
const FavoriteContext = createContext<FavoritesContextValue | null>(null)

// 2. 定义 reducer
function favoriteReducer(state: FavoriteState, action: FavoriteAction): FavoriteState {
  switch (action.type) {
    case 'TOGGLE':
      if (state.includes(action.id)) {
        return state.filter(id => id !== action.id)
      } else {
        return [...state, action.id]
      }
    case 'CLEAR':
      return []
    default:
      return state
  }
}

// 3. Provider 组件：组合 Context + useReducer
export function FavoriteProvider({ children }: { children: ReactNode }) {
  // 从 localStorage 恢复初始状态
  const [favoriteIds, dispatch] = useReducer(favoriteReducer, [], () => {
    const saved = localStorage.getItem('blog-favorites')
    return saved ? (JSON.parse(saved) as FavoriteState) : []
  })

  // 收藏列表变化时，自动同步到 localStorage
  useEffect(() => {
    localStorage.setItem('blog-favorites', JSON.stringify(favoriteIds))
  }, [favoriteIds])

  // 封装几个常用方法
  function toggleFavorite(id: number) {
    dispatch({ type: 'TOGGLE', id })
  }

  function isFavorite(id: number) {
    return favoriteIds.includes(id)
  }

  const value: FavoritesContextValue = {
    favoriteIds,
    favoriteCount: favoriteIds.length,
    toggleFavorite,
    isFavorite
  }

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  )
}

// 4. 自定义 Hook：封装 useContext，让调用方更简洁
export function useFavorites(): FavoritesContextValue {
  const context = useContext(FavoriteContext)
  if (!context) {
    throw new Error('useFavorites 必须在 FavoriteProvider 内部使用')
  }
  return context
}

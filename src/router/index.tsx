// 文件路径：src/router/index.tsx
import { createBrowserRouter } from 'react-router'
import App from '../App'
import HomePage from '../pages/HomePage'
import PostPage from '../pages/PostPage'

// createBrowserRouter 创建路由实例
const router = createBrowserRouter([
  {
    path: '/',                // App 作为根布局
    element: <App />,
    children: [
      {
        index: true,          // index: true 表示 / 路径的默认子路由
        element: <HomePage />
      },
      {
        path: 'post/:id',     // 动态路由：:id 匹配任意值
        element: <PostPage />
      }
    ]
  }
])

export default router
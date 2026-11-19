// 文件路径：src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { FavoriteProvider } from './context/FavoriteContext'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Provider 包裹在最外层，所有组件都能访问 */}
    <FavoriteProvider>
      <RouterProvider router={router} />
    </FavoriteProvider>
  </React.StrictMode>
)
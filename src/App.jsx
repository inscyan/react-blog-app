// 文件路径：src/App.jsx
import { Outlet } from 'react-router'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="container">
        {/* Outlet 是嵌套路由的出口：子路由匹配到的组件会在这里渲染 */}
        <Outlet />
      </main>
      <footer className="footer">
        <p>© 2024 RUNOOB Blog. Powered by React.</p>
      </footer>
    </div>
  )
}

export default App
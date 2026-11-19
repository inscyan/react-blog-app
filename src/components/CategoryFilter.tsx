// 文件路径：src/components/CategoryFilter.tsx
interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="filter-bar">
      {categories.map(cat => (
        <button
          key={cat}
          className={activeCategory === cat ? 'active' : ''}
          // 点击时调用父组件传来的回调函数
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter

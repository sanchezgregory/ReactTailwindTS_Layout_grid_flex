import { useState } from "react"
import { CategoryPills } from "./components/CategoryPills"
import { Sidebar } from "./components/Sidebar"
import { VideoGridItem } from "./components/VideoGridItem"
import { categories, videos } from "./data/home"
import { PageHeader } from "./layouts/PageHeader"

function App() {

  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
      <div className="flex flex-col h-screen">
        <PageHeader />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pt-4 pb-4">
              <CategoryPills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map(video => (
                <VideoGridItem key={video.id} {...video} />
              ))}
            </div>
          </main>
        </div>
      </div>
  )
}

export default App

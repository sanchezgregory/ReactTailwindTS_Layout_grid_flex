import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import { useState } from "react"
import logo from "../assets/Logo.png"
import Button from "../components/Button"

export const PageHeader = () => {
 
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

    const toggleFullWidthSearch = () => {
        setShowFullWidthSearch(!showFullWidthSearch)
    }

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <PageHeaderFirstSection hidden={showFullWidthSearch} setShowFullWidthSearch={setShowFullWidthSearch} />

        <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
            {showFullWidthSearch && (
                <Button type="button" size="icon" variant="ghost" className="flex-shrink-0" onClick={() => setShowFullWidthSearch(false)}>
                    <ArrowLeft />
                </Button>
            )}
            <div className="flex grow max-w-[600px]">
                <input 
                    type="search" 
                    placeholder="Search" 
                    className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full
                    focus:border-blue-500 outline-none"
                />
                <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
                    <Search />
                </Button>
            </div>
            <Button type="button" size="icon" className="flex-shrink-0">
                <Mic />
            </Button>
        </form>
        <div className={ `flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
            <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setShowFullWidthSearch(true)}><Search/></Button>
            <Button size="icon" variant="ghost" className="md:hidden"><Mic/></Button>
            <Button size="icon" variant="ghost"><Upload/></Button>
            <Button size="icon" variant="ghost"><Bell/></Button>
            <Button size="icon" variant="ghost"><User/></Button>
        </div>
    </div>
  )
}

type PageHeaderFirstSectionProps = {
    hidden?: boolean
    setShowFullWidthSearch: (value: boolean) => void
}

export function PageHeaderFirstSection({
    hidden = false,
    setShowFullWidthSearch,
  }: PageHeaderFirstSectionProps) {
  
    return (
      <div
        className={`gap-4 items-center flex-shrink-0 ${
          hidden ? "hidden" : "flex"
        }`}
      >
        <Button onClick={() => setShowFullWidthSearch(true)} variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </div>
    )
  }

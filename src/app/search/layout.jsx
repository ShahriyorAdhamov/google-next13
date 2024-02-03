import '../globals.css'
import SearchHeader from "@/components/search-header";

export const metadata = {
  title: "Google next-13",
  description: "Google next-13 create next app",
};

export default function SearchLayout({ children }) {
  return (
    <div className="m-5 pl-20">
        <SearchHeader/>
        {children}
    </div>
  )
}

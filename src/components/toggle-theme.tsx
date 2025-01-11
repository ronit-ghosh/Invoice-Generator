import { Moon, Sun } from "lucide-react"
import { Button } from "../components/ui/button"
import { useTheme } from "./theme-provider"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')
    } className="absolute bottom-5 left-5 w-5 h-8 rounded-full" >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button >
  )
}

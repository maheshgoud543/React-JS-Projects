import './App.css'
import { TreeView } from './Components'
import menus from './Components/data'
function App() {

  return (
    <div>
      <TreeView Menus={menus} />
    </div>
  )
}

export default App

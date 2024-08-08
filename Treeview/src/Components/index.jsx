import menus from "./data"
import { MenuList } from "./menu-list"

import './Styles.css'

export const TreeView = ({ Menus = [] }) => {

    return (
        <div className="tree-view-container">
            <MenuList list={menus} />
        </div>
    )

}
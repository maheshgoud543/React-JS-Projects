import { Menuitem } from "./menu-item"
export const MenuList = ({ list = [] }) => {

    return (
        <ul className="menu-list-container">
            {list && list.length ? list.map((listitem) => <Menuitem item={listitem} />) : null}
        </ul>
    )
}

const TabItem = (item) => {
    return(`
        <li class="nav-item">
            <a class="nav-link ${item.active}" href=${item.path}>${item.title}</a>
        </li>
    `)
}

export default TabItem;
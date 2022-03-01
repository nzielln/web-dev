
const NavIcon = (icon) => {
    return(`
        <a href="${icon.path}.html" class="list-group-item list-group-item-action">
            <i class="fa${icon.type} fa-${icon.icon} pt-0 pb-0 ps-0 pe-1"></i>
            <span class="d-none d-xl-inline">${icon.title}</span>
        </a>
    
    `);
}

export default NavIcon;
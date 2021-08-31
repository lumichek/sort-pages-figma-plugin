const pages = [];
figma
    .root
    .children
    .forEach((page) => {
    pages.push(page);
});
pages
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((page) => {
    figma.root.appendChild(page);
});
figma.closePlugin();

const pages = [];
figma
    .root
    .children
    .forEach((page) => {
    pages.push(page);
});
pages
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .forEach((page) => {
    figma.root.appendChild(page);
});
figma.closePlugin();

const pages: PageNode[] = [];

figma
  .root
  .children
  .forEach((page: PageNode) => {
    pages.push(page);
  });

pages
  .sort((a: PageNode, b: PageNode) => a.name.localeCompare(b.name))
  .forEach((page: PageNode) => {
    figma.root.appendChild(page);
  });

figma.closePlugin();

const organizeData = (data) => {
  // First, remove all items with no name
  const cleanData = data.filter((item) => item.name);

  // Then sort by  listId then by name
  cleanData.sort((itemA, itemB) => {
    // Sort items in different listId groups
    if (itemA.listId > itemB.listId) return 1;
    if (itemA.listId < itemB.listId) return -1;

    // Next get number associated with name
    const itemAName = +itemA.name.split(' ')[1];
    const itemBName = +itemB.name.split(' ')[1];

    // Finally, sort by name
    if (itemAName > itemBName) return 1;
    if (itemAName < itemBName) return -1;
    return 0;
  });
  return cleanData;
};

export { organizeData };

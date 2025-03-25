
export const extractCostNumber = (costForTwo) => {
    if (!costForTwo) return "N/A";
    const costMatch = costForTwo.match(/\d+/g);
    return costMatch ? parseInt(costMatch[0]) : "N/A";
  };
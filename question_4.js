const invoicingByStates = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const distributorBilling = (data) => {
  const result = Object.values(data).reduce((prev, curr) => prev + curr, 0);
  return { data: result, message: "Success!" };
};

const percentageOfRepresentationByState = (invoicingByStates) => {
  const {data:distributorsTotalRevenue} = distributorBilling(invoicingByStates);
  const result = [];
  for (let prop in invoicingByStates) {
    const percentage = (invoicingByStates[prop] / distributorsTotalRevenue) * 100;
    const entries = new Map([[`${prop}`, `${percentage}%`]]);
    result.push(Object.fromEntries(entries))
  }
  return result
};



console.log(percentageOfRepresentationByState(invoicingByStates));

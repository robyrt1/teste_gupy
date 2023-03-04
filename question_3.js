const invoicing = require("./dados.json");

const billingDuringWeek = async (data) => {
  /**
   * b) Podem existir dias sem faturamento, como nos finais de semana e feriados.
   * Estes dias devem ser ignorados no cálculo da média;
   */
  const result = data.filter(({ valor }) => {
    const billingDays = valor > 0;
    return billingDays;
  });
  return { data: result, message: "Success!" };
};


const lowerBilling = async (data) => {
  const result = data.reduce((prev, curr) =>
    prev.valor > curr.valor ? curr : prev
  ).valor;
  return { data: result, message: "Success!" };
};


const higherRevenue = async (data) => {
  const result = data.reduce((prev, curr) =>
    prev.valor < curr.valor ? curr : prev
  ).valor;
  return { data: result, message: "Success!" };
};


const monthlyAverage = async (data) => {
  const result =
    data.reduce((prev, curr) => prev + curr.valor, 0) / data.length;
  return { data: result, message: "Success!" };
};

const NumberOfDaysHighestBilling = async (data) => {
  const { data: monthly } = await monthlyAverage(data);

  const result = data.reduce(
    (prev, curr) => (curr.valor > monthly ? prev + 1 : prev),
    0
  );
  return { data: result, message: "Success!" };
};

const billingDetails = async (billingData) => {
  try {
    const { data } = await billingDuringWeek(billingData);
    const [
      { data: lowerIncome },
      { data: highestIncome },
      { data: monthly },
      { data: numberOfDays },
    ] = await Promise.all([
      lowerBilling(data),
      higherRevenue(data),
      monthlyAverage(data),
      NumberOfDaysHighestBilling(data),
    ]);
    return {
      statusCode: 200,
      lowerIncome,
      highestIncome,
      monthlyAverage: monthly,
      NumberOfDaysHighestBilling: numberOfDays,
      message: "Success in the request!",
    };
  } catch (err) {
    return { statusCode: 500, message: "Server Failure" };
  }
};

billingDetails(invoicing).then(console.log);

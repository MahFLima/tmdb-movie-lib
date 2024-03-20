export function formatarDataUSparaPT(dataUS) {
  // Cria um objeto Date a partir da data em formato US
  var data = new Date(dataUS);
  // Formata a data para o formato brasileiro
  var options = { day: "2-digit", month: "2-digit", year: "numeric" };
  var dataFormatada = data.toLocaleDateString("pt-BR", options);
  return dataFormatada;
}

export const convertToHoursMinutes = (minutes) => {
  // Calculate the number of hours
  var hours = Math.floor(minutes / 60);
  // Calculate the remaining minutes
  var remainingMinutes = minutes % 60;
  // Format the output to the desired format
  var formattedHoursMinutes =
    hours.toString().padStart(2, "0") +
    "h" +
    remainingMinutes.toString().padStart(2, "0");
  return formattedHoursMinutes;
};
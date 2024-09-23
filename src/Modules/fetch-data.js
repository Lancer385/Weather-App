export async function fetchData(location) {
  let encodedLocation = encodeURIComponent(location);
  const promise = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}?unitGroup=uk&key=8UJ9SNEGQTUFSD5AL695MA9RX`,
  );
  if (promise.ok) {
    const data = await promise.json();
    let { address, currentConditions, timezone, days } = data;
    let extractedData = {};
    Object.assign(extractedData, {
      address,
      currentConditions,
      timezone,
      days,
    });
    return extractedData;
  }
  return 0;
}

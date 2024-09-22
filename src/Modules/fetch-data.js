export async function fetchData(location){
    let encodedLocation = encodeURIComponent(location);
    const promise = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}?key=8UJ9SNEGQTUFSD5AL695MA9RX`);
    const data =  await promise.json();
    let {address , currentConditions, timezone, days } = data;
    let extractedData = {};
    Object.assign(extractedData, {address , currentConditions, timezone, days });
    console.log(data);
    console.log(extractedData);
    return extractedData;
};


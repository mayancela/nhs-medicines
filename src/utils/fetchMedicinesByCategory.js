
const getMedicineNames = (significantLinkData) => {
    const names = []

    for(const entry of significantLinkData) {

        // need to replace api call from production to sandbox
        const replacedUrl = entry.url.replace(
            "https://api.service.nhs.uk",
            "https://sandbox.api.service.nhs.uk"
        );

        names.push(replacedUrl)
    }

    return names;
}

const fetchMedicinesByCategory = async (category) => {
  const medicineInfo = [];

  try {
    const res = await fetch(`https://sandbox.api.service.nhs.uk/nhs-website-content/medicines?category=${category}`);
    const data = await res.json();
    const parsedMedicineInfo = data && data.significantLink && getMedicineNames(data.significantLink);

    parsedMedicineInfo && medicineInfo.push(...parsedMedicineInfo);

  } catch (error) {
    console.error('Could not fetch medicines', error);
  }

  return medicineInfo;
};

export default fetchMedicinesByCategory;
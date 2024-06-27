
const fetchAllMedicines = async () => {
    try {
        const res = await fetch('https://api.nhs.uk/medicines', {
            headers: {
                'subscription-key': 'ac660b40edde4ee695ad7704b0e52817'
            }
        })

        return await res.json(); 

    } catch(error) {
       console.error('Could not fetch medicines', error)
    }
}

export default fetchAllMedicines;
import React, {useState, useEffect} from 'react';
import fetchAllMedicines from '../utils/fetchAllMedicines';

const DisplayRawData = () => {
    const [medicineData, setMedicineData] = useState([]);

    useEffect(() => {
        const fetchMedicineData = async () => {
            const data = await fetchAllMedicines();
            setMedicineData(data)
        }

        fetchMedicineData();
    }, [])

    console.log(medicineData)

    return (
        <>
            <div>Hello World</div>
        </>
    );
}

export default DisplayRawData;
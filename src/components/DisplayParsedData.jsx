import React, {useState, useEffect} from 'react';
import fetchMedicinesByCategory from '../utils/fetchMedicinesByCategory';
import fetchMedicinesByUrl from '../utils/fetchMedicinesByUrl';
import styled from "styled-components";

const categories = 'abcdefghijklmnopqrstuvwxyz' 

const DisplayParsedData = () => {
    const [medicineData, setMedicineData] = useState([]);

    useEffect(() => {
        const fetchMedicineData = async () => {

            const categoryData = [];
            const parsedData = [];
            
            for(const category of categories.split('')) {
                const res = await fetchMedicinesByCategory(category);
                categoryData.push(...res)
            }

            for(const url of categoryData) {
                const res = await fetchMedicinesByUrl(url)
                res && parsedData.push(res)
            }

            setMedicineData([...parsedData])
        }

        fetchMedicineData();

     }, [])

    return (
        <InfoContainer>
            <pre>{JSON.stringify(medicineData, null, 2)}</pre>
        </InfoContainer>
    );
}

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export default DisplayParsedData;

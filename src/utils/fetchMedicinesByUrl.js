const fetchMedicinesByUrl = async (passedUrl) => {
        try {
          const res = await fetch(`${passedUrl}?modules=true`);

          const data = await res.json();

          if(!data) {
            return null;
          }

         const {about, hasPart, headline, url } = data

          if(hasPart.length === 0) {
            return { [about.name]: { headline, url } };
          }

        const filteredHasPart = hasPart.map(part => {
            const {hasPart, hasHealthAspect,...filteredPart } = part;
            return filteredPart;
        });

          return { [about.name]: { info: filteredHasPart, headline, url } };

        } catch (error) {
          console.error(`Could not fetch medicine at ${passedUrl}`, error);
          return null;
        }
    
};

export default fetchMedicinesByUrl;
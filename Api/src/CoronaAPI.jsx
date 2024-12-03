import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CoronaAPI() {
    const [data, setData] = useState([]);
    const [err, setErr] = useState("");

    useEffect(() => {
        axios
            .get("https://data.covid19india.org/v4/min/data.min.json")
            .then((response) => {
                const districtsData = response.data;
                const districtsArray = [];

                for (const state in districtsData) {
                    const stateData = districtsData[state].districts;
                    for (const district in stateData) {
                        districtsArray.push({ 
                            state, 
                            district, 
                            ...stateData[district] 
                        });
                    }
                }

                setData(districtsArray);
            })
            .catch((error) => {
                setErr(error.message);
            });
    }, []);

    return (
        <>
            {err ? <p>{err}</p> : null}
            <table border={2}>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>District</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deceased</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        const { state, district, total } = item;
                        return (
                            <tr key={index}>
                                <td>{state}</td>
                                <td>{district}</td>
                                <td>{total?.confirmed || 'N/A'}</td>
                                <td>{total?.recovered || 'N/A'}</td>
                                <td>{total?.deceased || 'N/A'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default CoronaAPI;
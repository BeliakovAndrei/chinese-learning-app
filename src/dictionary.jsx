import React, { useEffect, useState } from "react";
import API from "./API";

const Dictionary = () => { 
    const [dictionary, setDictionary] = useState();

    useEffect(() => {
        API.dictionary.fetchAll().then((data) => setDictionary(data));
    },[]);
        return (
            dictionary && (
            <table className="table">
            <thead>
              <tr>
                <th scope="col">Слово/Фраза</th>
                <th scope="col">Транскрипция</th>
                <th scope="col">Перевод</th>
                <th scope="col">В мой словарь</th>
              </tr>
            </thead>
            <tbody>
                {dictionary.map((word)=>(
                    <tr key={word._id}>
                    <td>{word.name}</td>
                    <td>{word.pianying}</td>
                    <td>{word.translation}</td>
                    </tr>
                    )
                )
            }
        </tbody>
    </table>))
};
 
export default Dictionary;

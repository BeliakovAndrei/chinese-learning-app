import React, { useState } from "react";
import API from "./API";

const Dictionary = () => { 
    const [dictionary, setDictionary] = useState(API.dictionary.fetchAll())
        return (
            <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Слово/Фраза</th>
                <th scope="col">Транскрипция</th>
                <th scope="col">Перевод</th>
                <th scope="col">Тип</th>
                <th scope="col">Пример</th>
                <th scope="col">Сложность</th>
                <th scope="col">В мой словарь</th>
              </tr>
            </thead>
            <tbody>
                {dictionary.map((word)=>(
                    <tr key={word}>
                    <td>{word.name}</td>
                    <td>{word.pianying}</td>
                    <td>{word.translation}</td>
                    </tr>
                    )
                )
            }
        </tbody>
    </table>)
};
 
export default Dictionary;

import styles from "./UserTable.module.css"
import { useState, useEffect } from "react";


export default function UserTable() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/api/get')
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
    }, []);

    return (
        <>

            <h1>Hello</h1>
            {
                data ? (
                    <>
                        <pre>
                            {JSON.stringify(data, null, 2)}
                        </pre>

                        <table id={styles.tableDisplay} className={styles.table}>
                            <tr>
                                <th className={styles.table}>ID</th>
                                <th className={styles.table}>NAME</th>
                                <th className={styles.table}>EMAIL</th>
                            </tr>
                        {data.map((person) => (
                            <tr key={person?.id}>
                            <td className={styles.table}> {person?.id}</td>
                            <td className={styles.table}> {person?.name}</td>
                            <td className={styles.table}> {person?.email}</td>
                            </tr>
                        ))}
                        </table>


                    </>
                ) : (
                    <p>"loading..."</p>
                )

            }
        </>
    )


}
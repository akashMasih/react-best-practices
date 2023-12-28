import React, { useEffect, useState } from 'react'

const Heavy: React.FC = () => {
    const [name, setName] = useState<number>()

    const updateName = () => {
        for (let i: number = 1; i < 10000; i++) {
            console.log(i)
            if (i === 9999) {
                setName(Math.random())
            }
        }

    }

    useEffect(() => {
        updateName()
    }, [])

    return (
        <h1>{name}</h1>
    )
}

export default Heavy
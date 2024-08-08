import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useLocalStorage = (Key, defaultValue) => {
    const [value, setValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(Key) || String(defaultValue))

        } catch (error) {
            console.log(error)
            currentValue = defaultValue
        }
        return currentValue
    })

    useEffect(() => {
        localStorage.setItem(Key, JSON.stringify(value))
    }, [Key, value])


    return [value, setValue ]

}

export default useLocalStorage
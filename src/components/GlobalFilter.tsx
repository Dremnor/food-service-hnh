import React from "react";

export const GlobalFilter = (filter: any, setFilter: (arg0: string) => void)=>{
    return(
        <span>
            Search:{' '}
            <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
        </span>
    )
}
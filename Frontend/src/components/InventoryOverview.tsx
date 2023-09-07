const InventoryOverview = ()=>{
    return (
        <div className='card'>
            <h2 className='text-xl font-bold'>Inventory Overview</h2>
            <div className='flex flex-row justify-evenly w-full relative flex-wrap gap-4'>
                {/*{*/}
                {/*    inventories.map((inventory,key:number)=>{*/}
                {/*        return(*/}
                {/*            <div key={key} className='flex flex-col items-start gap-y-2 gap-x-3 bg-slate-50 rounded-xl px-3.5 py-4'>*/}
                {/*                <div className='flex items-center justify-start'>*/}
                {/*                    {<inventory.icon color={inventory.iconColor}/>}*/}
                {/*                </div>*/}
                {/*                <h3 className='text-gray-600'>{inventory.name}</h3>*/}
                {/*                <p className='text-slate-950 text-3xl font-semibold'>{inventory.value.toLocaleString()}</p>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}

            </div>
        </div>
    )
}

export default InventoryOverview
const OverallInventory = ()=>{
    const inventories = [
        {
            name:'Categories',
            amount:14,
            value:null,
            period:'Last 7 Days',
            valueName:null,
            color:'text-blue-500'
        },
        {
            name:'Total Products',
            amount:868,
            value:25000,
            period:'Last 7 Days',
            valueName:'Revenue',
            color:'text-orange-500'
        },
        {
            name:'Top Selling',
            amount:5,
            value:2500,
            period:'Last 7 Days',
            valueName:'Cost',
            color:'text-violet-500'
        },
        {
            name:'Low Stocks',
            amount:12,
            value:2,
            period:'Ordered',
            valueName:'Not in Stock',
            color:'text-red-500'
        }
    ]
    return (
        <div className='card w-full'>
            <h2 className='text-xl font-bold'>Overall Inventory</h2>
            <div className='flex flex-row justify-around w-full relative flex-wrap divide-x'>
                {
                    inventories.map((inventory,key:number)=>{
                        return(
                            <div key={key} className='flex flex-col flex- items-center basis-1/4 gap-y-3 p-4'>
                                {/*<div className='flex items-center justify-start'>*/}
                                {/*    {<inventory.icon color={inventory.iconColor}/>}*/}
                                {/*</div>*/}
                                <h3 className={`${inventory.color} w-full justify-start flex`}>{inventory.name}</h3>
                                <div className='flex flex-row justify-between w-full relative'>
                                    <div className='flex flex-col items-start gap-y-2 gap-x-3'>
                                        <p className='text-slate-950 text-xl font-semibold'>{inventory.value?.toLocaleString() ?? null}</p>
                                        <p className='text-slate-300 text-sm font-normal'>{inventory.valueName}</p>
                                    </div>

                                    <div className='flex flex-col items-start gap-y-2 gap-x-3'>
                                        <p className='text-slate-950 text-xl font-semibold'>{inventory.amount?.toLocaleString() ?? null}</p>
                                        <p className='text-slate-300 text-sm font-normal'>{inventory.period}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default OverallInventory
import IconSales from "../icons/IconSales";
import IconDashboard from "../icons/IconDashboard";

const InventorySummary = ()=>{
    const inventories = [
        {
            name:'Quantity in Hand',
            icon:IconDashboard,
            iconBackground:'bg-purple-100',
            iconColor:'fill-green-400',
            value:214
        },
        {
            name:'Will be Received',
            icon:IconDashboard,
            iconBackground:'bg-pink-100',
            iconColor:'fill-orange-400',
            value:17584
        }
    ]
    return (
        <div className='flex flex-col items-start flex-auto gap-y-4 border rounded-3xl bg-white  p-6'>
            <h2 className='text-xl font-bold'>Inventory Summary</h2>
            <div className='flex flex-row justify-evenly w-full relative flex-wrap gap-4'>
                {
                    inventories.map((inventory,key:number)=>{
                        return(
                            <div key={key} className='flex flex-col items-start gap-y-2 gap-x-3 bg-slate-50 rounded-xl px-3.5 py-4'>
                                <div className='flex items-center justify-start'>
                                    {<inventory.icon color={inventory.iconColor}/>}
                                </div>
                                    <h3 className='text-gray-600'>{inventory.name}</h3>
                                    <p className='text-slate-950 text-3xl font-semibold'>{inventory.value.toLocaleString()}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default InventorySummary
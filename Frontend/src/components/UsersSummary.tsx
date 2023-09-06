import IconSales from "../icons/IconSales";
import IconDashboard from "../icons/IconDashboard";

const UsersSummary = ()=>{
    const inventories = [
        {
            name:'Total Customers',
            icon:IconDashboard,
            iconBackground:'bg-teal-100',
            iconColor:'fill-teal-400',
            value:1800
        },
        {
            name:'Total Suppliers',
            icon:IconDashboard,
            iconBackground:'bg-sky-100',
            iconColor:'fill-sky-400',
            value:27
        }
    ]
    return (
        <div className='flex flex-col flex-auto items-start gap-y-3.5 border rounded-3xl bg-white  p-6'>
            <h2 className='text-xl font-bold'>No. of Users</h2>
            <div className='flex flex-row items-center flex-wrap gap-4 justify-evenly w-full relative'>
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

export default UsersSummary
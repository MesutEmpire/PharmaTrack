import IconSales from "../icons/IconSales";
import IconDashboard from "../icons/IconDashboard";

const SalesOverview = ()=>{
    const categories = [
        {
            name:'Total Sales',
            icon:IconDashboard,
            iconBackground:'bg-amber-100',
            iconColor:'fill-amber-400',
            value:786
        },
        {
            name:'Revenue',
            icon:IconDashboard,
            iconBackground:'bg-orange-100',
            iconColor:'fill-orange-400',
            value:17584
        },
        {
            name:'Cost',
            icon:IconDashboard,
            iconBackground:'bg-blue-100',
            iconColor:'fill-blue-400',
            value:12487
        },
        {
            name:'Profit',
            icon:IconDashboard,
            iconBackground:'bg-red-100',
            iconColor:'fill-red-400',
            value:5097
        }
    ]
    return (
        <div className='flex flex-col flex-initial items-start gap-y-3.5 border rounded-3xl bg-white p-6'>
            <h2 className='text-xl font-bold'>Sales Overview</h2>
            <div className='flex flex-row justify-center items-center flex-wrap gap-y-8 sm:gap-x-2 lg:gap-x-5 xl:gap-x-10'>
                {
                    categories.map((category,key:number)=>{
                       return(
                           <div key={key} className='flex flex-row flex-nowrap gap-x-3 w-60'>
                               <div className='flex items-center justify-center'>
                                  <span className={`flex items-center justify-center w-12 h-12  rounded-xl ${category.iconBackground}`}> {<category.icon color={category.iconColor}/>}</span>
                               </div>
                               <div className='flex flex-col gap-y-2 items-start'>
                                   <h3 className='text-gray-600'>{category.name}</h3>
                                   <p className='text-slate-950 text-3xl font-semibold'>{category.value.toLocaleString()}</p>
                               </div>
                           </div>
                       )
                    })
                }

            </div>
        </div>
    )
}

export default SalesOverview
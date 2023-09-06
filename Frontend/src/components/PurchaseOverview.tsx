import IconSales from "../icons/IconSales";
import IconDashboard from "../icons/IconDashboard";

const PurchaseOverview = ()=>{
    const categories = [
        {
            name:'No. of Purchase',
            icon:IconDashboard,
            iconBackground:'bg-purple-100',
            iconColor:'fill-purple-400',
            value:786
        },
        {
            name:'Cancel Order',
            icon:IconDashboard,
            iconBackground:'bg-pink-100',
            iconColor:'fill-pink-400',
            value:17584
        },
        {
            name:'Cost',
            icon:IconDashboard,
            iconBackground:'bg-cyan-100',
            iconColor:'fill-cyan-400',
            value:1248712487
        },
        {
            name:'Returns',
            icon:IconDashboard,
            iconBackground:'bg-lime-100',
            iconColor:'fill-lime-400',
            value:5097
        }
    ]
    return (
        <div className='flex flex-col flex-initial items-start gap-y-3.5 border rounded-3xl bg-white  p-6 '>
            <h2 className='text-xl font-bold'>Purchase Overview</h2>
            <div className='flex flex-row justify-center items-center flex-wrap gap-y-8 sm:gap-x-2 lg:gap-x-5 xl:gap-x-10'>
                {
                    categories.map((category,key:number)=>{
                        return(
                            <div key={key} className='flex flex-row justify-start items-center flex-nowrap gap-x-3 w-60'>
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

export default PurchaseOverview
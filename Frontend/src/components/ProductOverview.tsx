import IconSales from "../icons/IconSales";
import IconDashboard from "../icons/IconDashboard";

const ProductOverview = ()=>{
    const productDetails = [
        {
            name:'Low Stock Items',
            value:2
        },
        {
            name:'Item Group',
            value:14
        },
        {
            name:'No of Items',
            value:104
        }
    ]
    return (
        <div className='flex flex-col flex-auto items-start gap-y-3.5 border rounded-3xl bg-white  p-6 w-72'>
            <h2 className='text-xl font-bold'>Product Details</h2>
            <div className='flex flex-col justify-center items-center flex-wrap divide-y w-full relative'>
                {
                    productDetails.map((detail,key:number)=>{
                        return(
                            <div key={key} className='flex flex-row flex-nowrap items-center justify-between w-full relative py-3'>
                                <h3 className='text-gray-600'>{detail.name}</h3>
                                <p className='text-slate-950 text-3xl font-semibold'>{detail.value.toLocaleString()}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ProductOverview
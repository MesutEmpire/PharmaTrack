import InventoryOverview from "../components/InventoryOverview";

const InventoryPage = ()=>{
    return (
        (<div className='w-full relative'>
            <div className='flex flex-col gap-y-5'>
                <div className=' flex flex-initial flex-col md:flex-row gap-5'>
                    <InventoryOverview/>
                </div>
            </div>
        </div>)
    )
}

export default InventoryPage


;
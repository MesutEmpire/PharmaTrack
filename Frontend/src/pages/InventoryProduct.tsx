import ProductDetails from "../components/ProductDetails";
import {NavLink, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectEditProduct, setEditProduct} from "../stores/productSlice";

const InventoryProduct = () => {
    const dispatch = useDispatch()
    const editProduct = useSelector(selectEditProduct)
    const navigations = [
        {
            name:'Overview',
            path:' ',

        },
        {
            name:'Purchase',
            path:'purchase',

        },
        {
            name:'Adjustment',
            path:'adjustment',

        },
        {
            name:'History',
            path:'history',

        }
    ]
    return ((<div className='flex flex-col gap-y-5 w-full'>
        <div className='card w-full'>
            <div className='flex flex-row justify-between items-center w-full relative'>
                <h2 className='text-xl font-bold'>Maggi</h2>
                <div className='flex gap-x-4'>
                    <button className='clearButton ' onClick={()=> dispatch( setEditProduct(!editProduct)) }>
                        {editProduct ? 'Save' : 'Edit'}
                    </button>
                    <button className='clearButton '>Download</button>
                </div>
            </div>
            <div className='flex flex-row items-start gap-x-8 w-full relative text-slate-500 border-b py-2'>
                {
                    navigations.map((nav,index:number)=>{
                        return (
                            <NavLink to={nav.path} key={index} className={`h-full`}>
                                {({ isActive, isPending }) => (
                                    <span className={`w-full h-full  ${isActive && 'border-b-4 border-primary py-2'}`}>{nav.name}</span>
                                )}
                                </NavLink>
                        )
                    })
                }

            </div>
            <Outlet/>
        </div>
    </div>))
}

export default InventoryProduct

;
import {Link, NavLink, Outlet} from "react-router-dom";
import {navlinks} from "../utils/data";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../stores/userAuthSlice";

const Sidebar = () => {
    const currentUser = useSelector(selectCurrentUser);
    return (
            <div className=' flex flex-initial items-baseline flex-col gap-y-2'>
                {navlinks.map((nav: any, key: number) => {
                    return (<NavLink key={key} to={nav.link} className={'nav items-center'}>
                        {({ isActive, isPending }) => (
                            <>
                             <span className={`flex items-center justify-center  rounded-full p-2.5 ${isActive ? 'bg-violet-100' : ''}`}>
                                <nav.icon color={`${isActive ? 'fill-primary':''}`} size='27' className='basis-1/5'/>
                            </span>
                                <p className={`flex justify-center ${ isActive ? 'text-primary  font-semibold' : ''}`}>  {nav.tag}</p>
                            </>
                        )}
                        </NavLink>);
                })}
        </div>);
};

export default Sidebar;
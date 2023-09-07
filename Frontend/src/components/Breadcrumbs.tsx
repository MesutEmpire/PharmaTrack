import {NavLink, useMatches} from "react-router-dom";

const Breadcrumbs = () => {
    let matches = useMatches();
    let crumbs = matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) => {
            return {
                name: match.handle.crumb(match.data), path: match.pathname
            }
        });

    return (<div className='w-full flex flex-row flex-initial justify-start items-center bg-white p-6 gap-x-1'>
            {crumbs.map((crumb, index) => (<NavLink to={crumb.path}
                                                    className={`${crumbs.length === index + 1 ? 'font-bold text-xl' : 'font-medium text-lg'} `}
                                                    key={index}>{crumb.name} {crumbs.length !== index + 1 && '>'}</NavLink>))}
        </div>);
}

export default Breadcrumbs

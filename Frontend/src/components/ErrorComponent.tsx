import {Link} from "react-router-dom";
import { useRouteError } from "react-router-dom";


const ErrorComponent = (props: any)=>{
    const error: any = useRouteError();
    return (
            <div>
                {props.fetchError ? (
                    <div className="my-3 error_container">  <p>{props.fetchError}</p></div>
                        ) : error ? (
                            <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
                                <div className="text-center">
                            <div>
                                <p className="text-base font-semibold text-indigo-600">{error.status}</p>
                                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{error.statusText}</h1>
                                <p className="mt-6 text-base leading-7 text-gray-600">{error.data}</p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <Link
                                        to={'/'}
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Go back home
                                    </Link>
                                    <a href="#" className="text-sm font-semibold text-gray-900">
                                        Contact support <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                                </div>
                            </main>

                            )
                    : (
                            <p></p>
                        )}
            </div>

)
}

export default ErrorComponent
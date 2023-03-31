import {Link} from "react-router-dom";

const Promo = ()=>{
    return (
        <div className=" mx-auto max-w-lg text-center">
            <h2 className="text-3xl tracking-tight sm:text-4xl">Get started today</h2>
            <p className="mt-4 text-lg tracking-tight">It’s time to take control of your books. Buy our software
            so you can feel like you’re doing something productive.</p>
            <Link to='sign_up' className="round_btn mt-10">Get 6 months free</Link>
        </div>
    )
}

export default Promo
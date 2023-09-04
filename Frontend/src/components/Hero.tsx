import { Link } from "react-router-dom";
import { partners } from "../utils/data";
const Hero = () => {
  return (
    <div id="hero" className="flex flex-col items-center justify-center layout gap-y-10 layoutWidth" >
        <div className=" flex flex-col flex-initial gap-y-10 justify-center items-center tracking-tight text-slate-900">
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-center font-medium ">Accounting {" "}
            <span className="text-secondary inline-block"> made simple
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="-mt-5 fill-[#02EB1A] opacity-25"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
            </span>
             <span className="block"> for small businesses.</span>
            </h1>

            <p className="tracking-tight text-slate-700 max-w-prose">
              Say goodbye to the hassle of managing your pharmacy inventory with
              our easy-to-use system that balances accuracy with simplicity, so
              you can streamline your process and stay on top of stock levels
              without worrying about audits.
            </p>


            <Link to="/sign_up" className="round_btn">
              Get 6 months free
            </Link>
        </div>

        <div className="flex flex-col gap-y-10 justify-end">
          <p className="text-base text-center text-slate-900">
            Trusted by these six companies so far
          </p>
          <div
            className="flex flex-row flex-wrap flex-initial justify-center gap-x-32 gap-y-8 relative min-h-full max-w-3xl mx-auto"
          >
            {partners.map((partner: any, key: number) => {
              return (
                <span key={partner.id}>
                  <img
                    alt={partner.alt}
                    src={partner.src}
                    width="158"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                  />
                </span>
              );
            })}
          </div>
        </div>
    </div>
  );
};

export default Hero;
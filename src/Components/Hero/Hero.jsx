import { PiArrowUpRightBold, PiBagBold } from "react-icons/pi";
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <section className="max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[100vh] w-full">
            <div className="relative mx-w-[777px] to-44 xs:top-60">
                <h4 className="h1 max-w-[611px] capitalize">Elevate your wardrobe with trendy fashion from <span className="text-secondary">GlamStore</span></h4>
                <div className="flex gap-x-9 max-md:flex-col-reverse mt-16">
                    <Link className=" flexCenter gap-x-2 inline-flex bg-tertiary text-white p-3 pl-5 max-w-60 rounded-full">Latest Product <PiBagBold className="bg-white text-tertiary text-4xl p-2 rounded-full"/><PiArrowUpRightBold className="bg-white text-tertiary text-4xl p-2 rounded-full"/></Link>
                    <p className="my-2 md:w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur ipsum explicabo neque facilis labore sint magnam aliquam repellendus ullam!</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
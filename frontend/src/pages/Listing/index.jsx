import Sidebar from "../../Component/Sidebar";
const Listing = () => {
    return (
        <>
            <section className="py-10">
                <div className="container mx-auto px-4">
                <div className="flex gap-5">
            <Sidebar className="w-[20%] flex-[0_0_20%]" />
        <div className="w-[80%] flex-[0_0_80%] pl-12.5">
            <img style={{borderRadius:'8px'}} className="w-full" src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg" alt="" />
        </div>
            </div>
                </div>
            </section>
        </>
    )
}

export default Listing;
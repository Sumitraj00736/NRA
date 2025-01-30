import { div } from "framer-motion/client";
import { LuMail, LuShare2, LuPhone } from "react-icons/lu";


const profile = [
    {
        position: "Ambassador",
        name: "John Doe",
        imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        position: "Ambassador",
        name: "John Doe",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s"
    },
    {
        position: "Ambassador",
        name: "John Doe",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s"
    },
    {
        position: "Ambassador",
        name: "John Doe",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s"
    },

]
export default function OurTeam() {
    return (
        <>
        <div className="w-full bg-customBlue bg-opacity-5 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2 py-10 mx-auto w-full max-w-7xl">
            {profile.map((item, index) => (
                <>
                    <div
                        key={index}
                        className=" bg-gray-100 rounded-2xl shadow-lg overflow-hidden w-72 relative h-[420px] font-poppins mx-auto ">

                        <div className=" w-full h-full">
                            <img
                                src={item.imgSrc}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-full scale-150 translate-y-12 flex flex-col gap-2">
                                <div>
                                    <button className="bg-white shadow-md p-2 rounded-full absolute flex gap-4 left-[35%] -top-2 transform -translate-x-1/2 hover:scale-110  hover:transition-all"><LuMail /></button>
                                    <button className="bg-white shadow-md p-2 rounded-full absolute flex gap-4 left-[50%] -top-4 transform -translate-x-1/2 hover:scale-110 hover:transition-all"><LuShare2 /></button>
                                    <button className="bg-white shadow-md p-2 rounded-full absolute flex gap-4 left-[65%] -top-2 transform -translate-x-1/2 hover:scale-110 hover:transition-all"><LuPhone /></button>
                                </div>
                                <div className="text-center ">
                                    <h2 className="mt-6 text-lg font-semibold text-gray-900" >
                                        {item.name}
                                    </h2>
                                    <p className="text-gray-500 text-sm">{item.position}</p>
                                </div>

                            </div>
                        </div>


                    </div>
                </>
            ))}

        </div>
        </div>
        </>
    );
}

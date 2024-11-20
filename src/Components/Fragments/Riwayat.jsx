// import { useEffect, useState } from "react";
// import { getAllHistory } from "../../Service/getAllHistory";
// import HistoryList from "./HistoryList/HistoryList";

const Riwayat = () => {
    // const [historys, setHistorys] = useState([])

    // useEffect(() => {
    //     let allHistorys = getAllHistory();
    //     allHistorys = allHistorys.length > 0 ? allHistorys : [];
    //     setHistorys(allHistorys);
    //   }, []);

    return (
        <section>
        <div className="flex flex-row justify-between gap-4">
            <div className="flex flex-col gap-auto items-center w-full h-[110px] bg-[#FB6816] py-[20px] text-[#fffff0] rounded-xl">
                <h1 className="text-[32px] font-bold flex">1</h1>
                <h6 className="text-[20px] font-semibold">Video Ditonton</h6>
            </div>
            <div className="flex flex-col gap-auto items-center w-full h-[110px] bg-[#FB6816] py-[20px] text-[#fffff0] rounded-xl">
                <h1 className="text-[32px] font-bold flex">1</h1>
                <h6 className="text-[20px] font-semibold">Video Ditonton</h6>
            </div>
            <div className="flex flex-col gap-auto items-center w-full h-[110px] bg-[#FB6816] py-[20px] text-[#fffff0] rounded-xl">
                <h1 className="text-[32px] font-bold flex">1</h1>
                <h6 className="text-[20px] font-semibold">Video Ditonton</h6>
            </div>
        </div>
        <div className="mt-[20px]">
            <h1 className="text-[24px] font-bold flex">Riwayat Video</h1>
        </div>
        <section className="flex justify-between w-full mb-[20px]">
            <div className="mt-[20px] grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[32px]">
                {/* <HistoryList  Historys={historys} />  */}
                <div className="w-[256px] h-[244px] bg-[#4c37ee] flex flex-col rounded-md">
                    <img src="/src/assets/History1.jpg" alt="" className="w-[256px] h-[144px] rounded-tl-md rounded-tr-md" />
                    <h1 className="text-[18px] text-[#fffff0] flex-wrap mx-[20px] mt-[8px]">Menyesuaikan CV dengan pekerjaan</h1>
                    <h6 className="text-[14px] text-[#23ffca] font-bold mx-[20px]">Review CV</h6>
                </div>
                <div className="w-[256px] h-[244px] bg-[#4c37ee] flex flex-col rounded-md">
                    <img src="/src/assets/History1.jpg" alt="" className="w-[256px] h-[144px] rounded-tl-md rounded-tr-md" />
                    <h1 className="text-[18px] text-[#fffff0] flex-wrap mx-[20px] mt-[8px]">Menyesuaikan CV dengan pekerjaan</h1>
                    <h6 className="text-[14px] text-[#23ffca] font-bold mx-[20px]">Review CV</h6>
                </div>
                <div className="w-[256px] h-[244px] bg-[#4c37ee] flex flex-col rounded-md">
                    <img src="/src/assets/History1.jpg" alt="" className="w-[256px] h-[144px] rounded-tl-md rounded-tr-md" />
                    <h1 className="text-[18px] text-[#fffff0] flex-wrap mx-[20px] mt-[8px]">Menyesuaikan CV dengan pekerjaan</h1>
                    <h6 className="text-[14px] text-[#23ffca] font-bold mx-[20px]">Review CV</h6>
                </div>
                <div className="w-[256px] h-[244px] bg-[#4c37ee] flex flex-col rounded-md">
                    <img src="/src/assets/History1.jpg" alt="" className="w-[256px] h-[144px] rounded-tl-md rounded-tr-md" />
                    <h1 className="text-[18px] text-[#fffff0] flex-wrap mx-[20px] mt-[8px]">Menyesuaikan CV dengan pekerjaan</h1>
                    <h6 className="text-[14px] text-[#23ffca] font-bold mx-[20px]">Review CV</h6>
                </div>
            </div>
        </section>
        </section>
    )
}

export default Riwayat
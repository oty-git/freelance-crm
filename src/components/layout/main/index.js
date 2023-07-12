import Header from "./Header";
import Sidebar from "./Sidebar";
import React from "react";
import {ToastContainer} from "react-toastify";

const MainLayout=({children})=>{


    return <React.Fragment>
            <Header/>
            <Sidebar/>
            <div className="content__main">
                {children}
            </div>
            <ToastContainer position={"top-right"} className={'notification-toast'}/>

    </React.Fragment>
};
export default MainLayout;

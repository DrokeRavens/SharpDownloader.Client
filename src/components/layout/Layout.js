import React from 'react'
import SidebarContainer from "./sidebar/Sidebar"
import SidebarLogo from './sidebar/SidebarLogo';
import {NavLink} from "react-router-dom"
import { RiFolderChartFill, RiBarChartFill, RiTaskFill, RiDeleteBin2Fill } from "react-icons/ri";
import style from "./Layout.module.css"
import Topbar from './topbar/Topbar';
import MainContent from './maincontent/MainContent'

function Layout(props) {
    return (
        <div className={style.layout_container}>
            <SidebarContainer>
                <SidebarLogo />
                <div className={style.sidebar_navigation}>
                    <NavLink  className={style.nav_link} 
                    to="/"
                    activeStyle={{
                        color: "#4CC9F0"
                    }} exact>
                        <RiFolderChartFill size={30}/><span>All Downloads</span>
                    </NavLink >

                    <NavLink  className={style.nav_link} 
                    to="/active"
                    activeStyle={{
                        color: "#4CC9F0"
                    }} >
                        <RiBarChartFill size={30}/><span>Active</span>
                    </NavLink >

                    <NavLink  className={style.nav_link} 
                    to="/completed"
                    activeStyle={{
                        color: "#4CC9F0"
                    }} >
                        <RiTaskFill size={30}/><span>Completed</span>
                    </NavLink >

                    <NavLink  className={style.nav_link} 
                    to="/trash"
                    activeStyle={{
                        color: "#4CC9F0"
                    }} >
                        <RiDeleteBin2Fill size={30}/><span>Trash</span>
                    </NavLink >
                </div>
            </SidebarContainer>
            <Topbar />
            <MainContent>
                {props.children}
            </MainContent>
        </div>
    )
}

export default Layout;

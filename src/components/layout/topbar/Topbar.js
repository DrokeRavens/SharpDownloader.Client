import React, { useState } from 'react'
import style from './Topbar.module.css'
import { RiPlayLine, RiStopLine, RiAddLine, RiDeleteBin2Line } from "react-icons/ri";
import Modal from '../../ui/modal/Modal'
import Input from '../../ui/input/Input';
import Select from '../../ui/select/Select';
import { MdLink } from "react-icons/md";
import Button from '../../ui/button/Button';
import axios from "axios";
import FolderNavigator from '../../foldernavigator/FolderNavigator'
function Topbar() {
    const api = axios.create({
        baseURL: 'https://localhost:5001'
    });
    const [newDownloadIsOpen, setNewDownloadOpen] = useState(false);
    var formData = {
        url: '',
        path: ''
    }
    function handleSubmit(e){
        console.log('requesting');
        api
        .post("/download/new", {url: formData.url, path: formData.path})
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });

          setNewDownloadOpen(false);
    }
    function handleUrlChange(e){
        formData.url = e.target.value;
    }
    function handlePathChange(e){
        formData.path = e;
    }
    return (
        <div>
            <div className={style.topbar_container}>
                <div className={style.action_container}>
                    <div className={style.topbar_action} onClick={() => setNewDownloadOpen(!newDownloadIsOpen)}>
                        <RiAddLine size={30}/>
                    </div>
                    <div className={style.topbar_action}>
                        <RiPlayLine size={30}/>
                    </div>
                    <div className={style.topbar_action}>
                        <RiStopLine size={30}/>
                    </div>
                    <div className={style.topbar_action}>
                        <RiDeleteBin2Line size={30}/>
                    </div>
                </div>
            </div>
            {newDownloadIsOpen ? 
            <Modal 
            onClick={setNewDownloadOpen}
            title="New download"
            >
                <form>        
                    <Input icon={<MdLink /> } label="Url" value={formData.url} onChange={handleUrlChange}/>
                    <FolderNavigator onChange={handlePathChange}/>
                    <Button text="Start" type="button" onClick={handleSubmit}></Button>
                </form>
            </Modal> 
            : null}

        </div>
        
    )
}

export default Topbar

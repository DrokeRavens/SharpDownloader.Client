import React from 'react'
import styles from './FolderNavigator.module.css'
import axios from "axios";
import { useState, useEffect } from 'react'
function FolderNavigator(props) {
    const api = axios.create({
        baseURL: 'https://localhost:5001'
    });
    useEffect(() => {
        api
        .get('/folder')
        .then((response) => {
            setFolders(response.data.folders)
            setMainFolder(response.data.currentFolder);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, [])
    

    const [folders, setFolders] = useState(null);
    const [mainFolder, setMainFolder] = useState(null);
    function folderClickHandler(e){
        var dataVal = e.target.getAttribute('dataVal');
        var parentDir = e.target.getAttribute('parentDir');
        props.onChange(mainFolder);
        api
        .get(parentDir !== null ? `/folder/parent/${encodeURI(parentDir)}` : `/folder/${encodeURI(dataVal)}`)
        .then((response) => {
            setFolders(response.data.folders);
            setMainFolder(response.data.currentFolder);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    return (
        <>
            <div className={styles.foldernavigator_container}>
                <label>Folder</label>
                <ul>
                    <li parentDir={mainFolder} onClick={folderClickHandler}> ... </li>
                    {folders ? folders.map((data) => <li dataVal={data.path} onClick={folderClickHandler}>{data.name}</li>) : null}
                </ul>
            </div>
        </>
    )
}

export default FolderNavigator

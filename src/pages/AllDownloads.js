import { useState, useEffect, useMemo } from 'react'
import React from 'react'
import DownloadInfoWidget from '../components/DownloadInfoWidget'
import update from 'immutability-helper';
function AllDownloads() {
    const websocket = useMemo(() => new WebSocket('ws://localhost:5000/ws'), [])
    var identity = '';
    const [downloads, setDownloads] = useState(null);
    const rcvCommands = {
        Identity: 3,
        DownloadList: 1,
        DownloadProgress: 2,
        NewDownload: 4
    }

    const getDownloads = () => {
        console.log(identity);
        if(websocket){
            websocket.send(JSON.stringify({
                PacketType: rcvCommands.DownloadList,
                Id: identity
            }));
        }
    };

    const getProgress = () => {
        console.log(identity);
        if(websocket){
            websocket.send(JSON.stringify({
                PacketType: rcvCommands.DownloadProgress,
                Id: identity
            }));
        }
    };
    const setNewDownload = (data) => {
        var newData = update(downloads, {$push: [data]});
        setDownloads(newData);
    }
    const updateProgress = (data) => {
        var commentIndex = downloads.findIndex(function(c) { 
            return c.Id === data.Id; 
        });
        if(downloads[commentIndex] === 'undefined')
            return;

        var updatedComment = update(downloads[commentIndex], {
            Progress: {$set: data.Progress},
            SizeProgress: {$set: data.SizeProgress},
            RemainingTime: {$set: data.RemainingTime}
        }); 

        var newData = update(downloads, {
            $splice: [[commentIndex, 1, updatedComment]]
        });
        setDownloads(newData);
        return;
    }

    const startup = () => {
        websocket.onopen = () => {
            console.log('connected');
        }

        websocket.onmessage = (payload) => {
            var jsonData = JSON.parse(payload.data);

            switch(jsonData.PacketType){
                case rcvCommands.Identity:
                    identity = jsonData.PacketData.Id;
                    getDownloads();
                    break;
                case rcvCommands.DownloadList:
                    setDownloads(jsonData.PacketData);
                    getProgress();
                    break;
                case rcvCommands.DownloadProgress:
                    updateProgress(jsonData);
                    break;
                case rcvCommands.NewDownload:
                    setNewDownload(jsonData.PacketData);
                    break;
                case rcvCommands.StateChanged:
                    setNewDownload(jsonData.PacketData);
                    break;
                default:
                    console.log('unknown:' + payload.data);
            }
        }
    }

    useEffect(() => {
        startup();
    })

    const selectedItens = []
    function checkHandler(e){
        if(selectedItens.includes(e))
            selectedItens.pop(e);
        else
            selectedItens.push(e);
        console.log(selectedItens)
    }

    function pauseResumeHandler(e){
        console.log(e)
    }

    return (
        <div className="page_container" style={{width: '100%'}}>
            <div style={{width: "100%"}}>
                {
                    downloads ? downloads.map((data) => 
                    <DownloadInfoWidget 
                    title={data.Title}
                    path={data.Path}
                    currentSize={data.SizeProgress}
                    currentSpeed={data.CurrentSpeed}
                    remainingTime={data.RemainingTime}
                    progress={data.Progress}
                    onCheck={() => checkHandler(data.Id)}
                    onPauseResume={() => pauseResumeHandler(data.Id)}
                    isPaused={data.State === 1}
                    />) : null
                }
            </div>
        </div>
        
    )
}

export default AllDownloads

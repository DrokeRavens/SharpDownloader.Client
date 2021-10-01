import { useState, useEffect, useMemo } from 'react'
import React from 'react'
import DownloadInfoWidget from '../components/DownloadInfoWidget'
import update from 'immutability-helper';
function AllDownloads() {
    const websocket = useMemo(() => new WebSocket('ws://localhost:5000/ws'), [])
    var identity = '';
    const [downloads, setDownloads] = useState(null);
    const sndCommands = {
        DownloadList: 1,
        DownloadProgress: 2
    }
    const rcvCommands = {
        Identity: 3,
        DownloadList: 1,
        DownloadProgress: 2
    }

    const getDownloads = () => {
        console.log(identity);
        if(websocket){
            websocket.send(JSON.stringify({
                PacketType: sndCommands.DownloadList,
                Id: identity
            }));
        }
    };

    const getProgress = () => {
        console.log(identity);
        if(websocket){
            websocket.send(JSON.stringify({
                PacketType: sndCommands.DownloadProgress,
                Id: identity
            }));
        }
    };

    const updateProgress = (data) => {
        var commentIndex = downloads.findIndex(function(c) { 
            return c.Id === data.Id; 
        });

        var updatedComment = update(downloads[commentIndex], {Progress: {$set: data.Progress}}); 
        
        var newData = update(downloads, {
            $splice: [[commentIndex, 1, updatedComment]]
        });
        setDownloads(newData);
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
                    updateProgress(jsonData.PacketData);
                    break;
                default:
                    console.log('unknown:' + jsonData);
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
        <div style={{width: "100%"}}>
            {
                downloads ? downloads.map((data) => 
                <DownloadInfoWidget 
                title={data.Title}
                path={data.Path}
                currentSize={data.CurrentSize}
                totalSize={data.FileSize}
                currentSpeed={data.CurrentSpeed}
                remainingTime={data.remainingTime}
                progress={data.Progress}
                onCheck={() => checkHandler(data.Id)}
                onPauseResume={() => pauseResumeHandler(data.Id)}
                isPaused={data.State === 1}
                />) : null
            }
        </div>
    )
}

export default AllDownloads

import { useState, useEffect } from 'react'
import DownloadInfoWidget from '../components/DownloadInfoWidget'
const mock_data = [
    {
        id: 0,
        name: 'manjaro_linux_x64.iso',
        path: '/bin/etc/downloads',
        currentSize: '1.0 GiB',
        totalSize: '4.1 GiB',
        currentSpeed: '90 Mb/s',
        remainingTime: '15 min',
        progress: 10,
        paused: false
    },
    {
        id: 1,
        name: 'manjaro_linux_x64.iso',
        path: '/bin/etc/downloads',
        currentSize: '1.0 GiB',
        totalSize: '4.1 GiB',
        currentSpeed: '90 Mb/s',
        remainingTime: '15 min',
        progress: 80,
        paused: true
    },

]
function AllDownloads() {

    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const websocket = new WebSocket('ws://localhost:5000/ws')
        websocket.onopen = () => {
            websocket.send({
                ola: "wee"
            })
        }
        setSocket(websocket);
    }, [setSocket]);

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
            {mock_data.map((data) => 
                <DownloadInfoWidget 
                title={data.name}
                path={data.path}
                currentSize={data.currentSize}
                totalSize={data.totalSize}
                currentSpeed={data.currentSpeed}
                remainingTime={data.remainingTime}
                progress={data.progress}
                onCheck={() => checkHandler(data.id)}
                onPauseResume={() => pauseResumeHandler(data.id)}
                isPaused={data.paused}
                />
            )}
           {socket ? 'socket' : 'nao socket'}
        </div>
    )
}

export default AllDownloads

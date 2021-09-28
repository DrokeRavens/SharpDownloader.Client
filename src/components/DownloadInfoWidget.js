import React from 'react'
import Card from './ui/Card'
import Text from './ui/Text'
import ProgressBar from './ui/ProgressBar'
import PlayPause from './ui/PlayPause'
import Checkbox from './ui/Checkbox'
import {RiFile2Fill} from 'react-icons/ri'
function DownloadInfoWidget({title, 
    path, 
    currentSize, 
    totalSize, 
    currentSpeed, 
    remainingTime, 
    progress,
    onCheck,
    onPauseResume,
    isPaused}) {
    return (
        <div>
            <Card>
                <RiFile2Fill size={40} style={{
                    textAlign: 'center',
                    padding: '10px'

                }}/>
                <div style={{width: "100%"}}>
                    <Text fontWeight="bolder">{title}</Text>
                    <div style={{display:"flex", justifyContent: "space-between"}}>
                        <Text color="#8C8C8C">{path}</Text>
                        <div style={{display: "flex", justifyContent: "space-between", width: "150px"}}>
                            <Text fontWeight="bolder" display="inline">{`${remainingTime}`}
                            <span style={{fontWeight: "100"}}> remaining</span>
                            </Text>
                            <PlayPause onClick={onPauseResume} size={25} isPaused={isPaused}/>
                            <Checkbox onClick={onCheck}/>
                        </div>
                    </div>
                    <Text size={11} fontWeight="bolder">{`${currentSize} of ${totalSize}`}</Text>
                    <ProgressBar progressbarSize="100%" />
                </div>
                
            </Card>

        </div>
    )
}

export default DownloadInfoWidget

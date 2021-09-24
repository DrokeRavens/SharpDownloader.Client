import Widget from "../ui/Widget"
import classes from "./DownloadWidget.module.css"
import Badge from "../ui/Badge"
import ProgressBar from "../ui/ProgressBar"
function DownloadWidget() {
    return (
        <Widget>
            <div className={classes.widget_container}>
                <div className={classes.title_node}>
                    <h6>Title</h6>
                    <p>manjaro_linux_x64.iso</p>
                </div>
                <div className={classes.data_node}>
                    <h6>Speed</h6>
                    <p>900kb/s</p>
                </div>
                <div className={classes.data_node}>

                    <h6>Downloaded</h6>
                    <p>1.34GiB</p>
                </div>
                <div className={classes.data_node}>

                    <h6>Eta</h6>
                    <p>9 min</p>
                </div>
                <div className={classes.path_node}>
                    <h6>Path</h6>
                    <p>/bin/sdcard/</p>
                </div>
                <div className={classes.data_node}>
                    <h6>Category</h6>
                    <Badge color="yellow" fontColor="black">
                        Download
                    </Badge>
                </div>

                <div className={classes.data_node}>
                    <h6 style={{"textAlign": "center"}}>Status</h6>
                    <ProgressBar width="160px"></ProgressBar>
                </div>
            </div>
        </Widget>
    )
}

export default DownloadWidget;
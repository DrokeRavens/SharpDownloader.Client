import { useState } from "react/cjs/react.development"
import Modal from "../ui/modal/Modal"
import Tab from '../ui/tab/Tab'
import TabContent from '../ui/tab/TabContent'
import TabContentContainer from "../ui/tab/TabContentContainer"
import TabMenu from '../ui/tab/TabMenu'
import TabMenuContainer from "../ui/tab/TabMenuContainer"


function Configuration(props){
    const [currentTab, setCurrentTab] = useState(1);

    const currentTabHandler = (index) => {
        setCurrentTab(index);
        console.log(index)
    };

    return(
        <Modal title="Configuration" backDropOnClick={props.backDropOnClick}>
            <Tab>
                <TabMenuContainer>
                    <TabMenu active={currentTab === 1} onClick={() => currentTabHandler(1)}>
                        <button>Download</button>
                    </TabMenu>
                    <TabMenu active={currentTab === 2} onClick={() => currentTabHandler(2)}>
                        <button>Categories</button>
                    </TabMenu>
                    <TabMenu active={currentTab === 3} onClick={() => currentTabHandler(3)}>
                        <button>Security</button>
                    </TabMenu>
                </TabMenuContainer>
                <TabContentContainer>
                    <TabContent active={currentTab === 1}>oi1</TabContent>
                    <TabContent active={currentTab === 2}>oi2</TabContent>
                    <TabContent active={currentTab === 3}>oi3</TabContent>
                </TabContentContainer>
               
            </Tab>
        </Modal>
    )
}

export default Configuration;
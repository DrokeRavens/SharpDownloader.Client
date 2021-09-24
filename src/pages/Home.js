import Card from '../components/ui/Card'
import ActiveDownloads from '../components/spec/ActiveDownloads'
const mock_data = [
    {
        'id': 1,
        'title': 'manjaro_linux_x64.iso',
        'category': 'Distros',
        'eta': '9hr',
        'speed': '900kb/s',
        'progress': '67'

    },
    {
        'id': 2,
        'title': 'ubuntu_linux_x64.iso',
        'category': 'Distros',
        'eta': '1hr',
        'speed': '300kb/s',
        'progress': '67'
    }
]
function Home() {
    return (
    <Card>
        <ActiveDownloads data={mock_data} headers={['ID', 'TITLE', 'CATEGORY', 'ETA', 'SPEED', 'PROGRESS']}/>
    </Card>)
}

export default Home;
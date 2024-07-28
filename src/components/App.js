import AppContent from './AppContent';
import Header from './Header';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Header pageTitle="Task Management"/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <p>Hello world!</p>
                        <AppContent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
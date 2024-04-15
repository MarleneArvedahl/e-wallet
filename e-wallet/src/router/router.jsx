import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import AddCard from '../pages/AddCard';

const router = createBrowserRouter([
    {
        path: 'hem',
        element: <Home />
    },

    {
        path: 'nyttkort',
        element: <AddCard />
    }
])

export default router
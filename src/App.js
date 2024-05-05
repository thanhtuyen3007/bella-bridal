import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { publicRoutes } from '~/routes/route';
import '~/App.module.scss';
import DefaultLayout from '~/componentes/Layouts/DefaultLayout/DefaultLayout';

function App() {
    return (
        <Fragment>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            const Layout = DefaultLayout
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </Fragment>
    );
}

export default App;

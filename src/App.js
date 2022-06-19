import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'
import { DefaultLayout } from './layouts'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map(route => {
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            const Page = route.component
            return <Route
              key={route.component}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

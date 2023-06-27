import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routerConfig } from "shared/config/routeConfig/routeConfig"
import Loader from "shared/ui/Loader/Loader"

const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {Object.values(routerConfig).map(({path, element}) => 
                    <Route 
                        key={path} 
                        path={path} 
                        element={element}
                    />
                )}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
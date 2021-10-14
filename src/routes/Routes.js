import Attendance from "../pages/Attendance"
import Dashboard from "../pages/Dashboard"
import Visiting from "../pages/Visiting"

const Routes = [
    { path: '/user', exact: true, name: "User" },
    { path: '/user/dashboard', exact: true, name: "Dashboard", component: Dashboard },
    { path: '/user/attendance', exact: true, name: "Attendance", component: Attendance },
    { path: '/user/visiting', exact: true, name: "Visiting", component: Visiting },
]

export default Routes
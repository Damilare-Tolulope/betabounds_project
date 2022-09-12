import React, {Suspense, lazy} from 'react'
import { BounceLoader } from 'react-spinners'

const load = Component => props =>
    (
        <Suspense fallback={<div className="page-content">
            <BounceLoader loading />
        </div>}>
            <Component {...props} />
        </Suspense>
    );


const Dashboard = load(lazy(() => import("../pages/Dashboard")))
const Forum = load(lazy(() => import("../pages/Forum")))
const IdeaPool = load(lazy(() => import("../pages/IdeaPool")))
const CoFunderChallenge = load(lazy(() => import("../pages/CoFunderChallenge")))
const Project = load(lazy(() => import("../pages/Project")))
const ProjectTask = load(lazy(() => import("../pages/Project/components/ProjectTaskField")))
const Settings = load(lazy(() => import("../pages/Settings")))
const Profile = load(lazy(() => import("../pages/Profile")))
const Cover = load(lazy(() => import("../pages/Auth/Cover.jsx")))
const Login = load(lazy(() => import("../pages/Auth/Login.jsx")))
const Register = load(lazy(() => import("../pages/Auth/Register.jsx")))


const authProtectedRoutes = [
    { path: "/dashboard", component: Dashboard, title: "Dashboard" },
    { path: "/forum", component: Forum, title: "Forum" },
    { path: "/ideapool", component: IdeaPool, title: "IdeaPool" },
    { path: "/cofunderchallenge", component: CoFunderChallenge, title: "CoFunderChallenge" },
    { path: "/project", component: Project, title: "Project" },
    { path: "/project/:id", component: ProjectTask, title: "Project Task" },
    { path: "/settings", component: Settings, title: "Settings" },
    { path: "/profile", component: Profile, title: "Profile" },
    { path: "/profile/security", component: Profile, title: "Profile" },
]

const publicRoutes = [
    { path: "/", component: Cover, },
    { path: "/login", component: Login, },
    { path: "/register", component: Register, }
];


export { authProtectedRoutes, publicRoutes }



// Toast
// import { useToasts } from "react-toast-notifications";
//     const { addToast } = useToasts();
//             addToast(response?.message, { appearance: "success" });

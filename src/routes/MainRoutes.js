import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import Approve from 'pages/dashboard/Approve';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - forms
const CommunityProject = Loadable(lazy(() =>  import ('pages/forms/community-propject/CommunityProject')));
const SkillsTrainingBursary = Loadable(lazy(() =>  import ('pages/forms/skills-development-bursary/SkillsTrainingBursary')));
const EmpowermentGrant = Loadable(lazy(() =>  import ( 'pages/forms/empowerment-grant/EmpowermentGrant')));
const EmpowermentLoan = Loadable(lazy(() =>  import ( 'pages/forms/empowerment-loan/EmpowermentLoan')));
const SecondaryBoardingBursary = Loadable(lazy(() =>  import ( 'pages/forms/secondary-school-bursary/SecondaryBoardingBursary')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'community-projects',
            element: <CommunityProject />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'skills-training-bursary',
            element: <SkillsTrainingBursary />
        },
        {
            path: 'empowerment-grant',
            element: <EmpowermentGrant />
        },
        {
            path: 'empowerment-loan',
            element: <EmpowermentLoan />
        },
        {
            path: 'secondary-boarding-bursary',
            element: <SecondaryBoardingBursary />
        },
        {
            path: 'approve/:taskId',
            element: <Approve />
        }
    ]
};

export default MainRoutes;

// assets
import {
    BarcodeOutlined,
} from '@ant-design/icons';

import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

// icons
const icons = {
    BarcodeOutlined,
    PeopleIcon,
    SchoolIcon,
    CreditScoreIcon
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const forms = {
    id: 'forms',
    title: 'Application Forms',
    type: 'group',
    children: [
        {
            id: 'community-projects',
            title: 'Community Projects',
            type: 'item',
            url: '/community-projects',
            icon: icons.PeopleIcon
        },
        {
            id: 'empowerment-loans',
            title: 'Empowerment Loan',
            type: 'item',
            url: '/empowerment-loan',
            icon: icons.CreditScoreIcon
        },
        {
            id: 'empowerment-grants',
            title: 'Empowerment Grant',
            type: 'item',
            url: '/empowerment-grant',
            icon: icons.BarcodeOutlined
        },
        {
            id: 'skills-development-bursary',
            title: 'Skills Development',
            type: 'item',
            url: '/skills-training-bursary',
            icon: icons.SchoolIcon,
            breadcrumbs: false
        },
        {
            id: 'secondary-school-bursary',
            title: 'Secondary School Bursary',
            type: 'item',
            url: '/secondary-boarding-bursary',
            icon: icons.SchoolIcon,
            breadcrumbs: false
        }
    ]
};

export default forms;

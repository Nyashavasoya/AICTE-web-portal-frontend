import { MdSpaceDashboard, MdSettingsApplications, MdOutlinePayment} from 'react-icons/md'
import { IoIosLogOut } from "react-icons/io";
import { IoDocumentOutline } from "react-icons/io5";
import { CiChat2, CiStickyNote } from "react-icons/ci";
import {HiOutlineCog, HiOutlineQuestionMarkCircle} from 'react-icons/hi';

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <MdSpaceDashboard />
	},
	{
		key: 'application-process',
		label: 'ApplicationProcess',
		path: '/application-process',
		icon: <MdSettingsApplications />
	},
	{
		key: 'myDocuments',
		label: 'My-Documents',
		path: '/my-documents',
		icon: <IoDocumentOutline />
	},
	{
		key: 'chatbot',
		label: 'Chat-with-Handbook',
		path: '/chatbot',
		icon: <CiChat2 />
	},
	{
		key: 'payment',
		label: 'Payment',
		path: '/payment',
		icon: <MdOutlinePayment />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	},
    {
        key: 'logout',
        label: 'Logout',
        path: '/logout',
        icon: <IoIosLogOut />
    }
]
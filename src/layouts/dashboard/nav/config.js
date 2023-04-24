import SvgColor from '../../../components/svg-color';

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'repair management',
    path: '/dashboard/repair-management',
    icon: icon('ic_analytics'),
  },
  {
    title: 'add repairs',
    path: '/dashboard/repair-management/add-repair',
    icon: icon('ic_list'),
  },
  {
    title: 'add client',
    path: '/dashboard/repair-management/add-client',
    icon: icon('ic_user'),
  },
];

export default navConfig;

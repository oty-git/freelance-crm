import React from "react";
import {getI18n} from 'react-i18next';

const menuConfig = () => {
    const i18n = getI18n();
    return  {
    headSide: [
        {
            label: i18n.t("Opportunities"),
            link: '#',
            img: '/images/headicon1.svg',
            count: 3,
            resource:'opportunities'

        }
    ],
    mainSide: [
        {
            title: i18n.t("WORKPAGE"),
            items: [
                {
                    label: i18n.t('My projects'),
                    link: '#',
                    img: '/images/headicon2.svg',
                    count: 12,
                    resource:'projects'

                },
                {
                    label: i18n.t('My Orders'),
                    link: '#',
                    img: '/images/headicon5.svg',
                    count: 1,
                    resource:'orders'

                },]
        },
        {
            title: i18n.t('ACCOUNT'),
            items: [
                {
                    label: i18n.t('Employees'),
                    link: '/account/employees',
                    img: '/images/headicon6.svg',
                    resource:'employees'
                },
                {
                    label: i18n.t('Freelancers'),
                    link: '/account/freelancers',
                    img: '/images/headicon6.svg',
                    resource:'freelancers'

                },
            ]
        },
        {
            label: i18n.t("App Settings"),
            link: '/account/freelancers',
            img: '/images/headicon6.svg',
            resource:[
                'app_languages',
                'languages',
                'services',
                'permissions',
                'roles',
            ],
            children:[
                {
                    label: i18n.t('App Languages'),
                    link: '/settings/app_languages',
                    resource:'app_languages'

                },
                {
                    label: i18n.t('Languages'),
                    link: '/settings/languages',
                    resource:'languages'

                },
                {
                    label: i18n.t('Services'),
                    link: '/settings/services',
                    resource:'services'

                },
                {
                    label: i18n.t('Permissions'),
                    link: '/settings/permissions',
                    resource:'permissions'

                },
                {
                    label: i18n.t('Roles'),
                    link: '/settings/roles',
                    resource:'roles'

                },
            ]

        },

        {
            label: i18n.t('Clients'),
            link: '#',
            img: '/images/headicon6.svg',
            resource:'clients'

        },
    ]
}};
export default menuConfig;

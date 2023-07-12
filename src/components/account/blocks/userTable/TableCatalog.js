import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TableFilterIcon from "./TableFilterIcon";
import TableContent from "./TableContent";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

const TableCatalog = ({users, title, type}) => {
    const {t} = useTranslation();

    const [usersObj, setUsersObj] = useState({
        approvedUsers: [],
        waitingUsers: [],
        rejectedUsers: [],
    });


    useEffect(() => {
        filterUsersForTabs();
    }, [users])

    const filterUsersForTabs = () => {
        if (users && users.rows) {
            let approvedUsers = [];
            let waitingUsers = [];
            let rejectedUsers = [];
            users.rows.map((item) => {
               if (item.User && item.User.status) {
                   switch (item.User.status) {
                       case 'approved':
                       case 'temporary_approve':
                           approvedUsers.push(item);
                           break;
                       case 'waiting_for_approval':
                           waitingUsers.push(item);
                           break;
                       case 'rejected':
                       case 'archived':
                           rejectedUsers.push(item);
                           break;
                   }
               }
            });
            setUsersObj({approvedUsers: approvedUsers, waitingUsers: waitingUsers, rejectedUsers: rejectedUsers});
        }
    }

    let tabsList = [
        {label: t(title), count: usersObj.approvedUsers.length},
        {label: t('Registrations'), count: usersObj.waitingUsers.length},
        {label: t('Archived & Rejected'), count: usersObj.rejectedUsers.length},
    ];

    return <div className="employers-page__catalog">
        <div className="catalog">
            <Tabs>
                <div className="catalog__header">
                    <TabList className="catalog__tabs tabs js-tabs">
                        {
                            tabsList && tabsList.map((item, index) => {
                                return <Tab key={index} className={'catalog__tab js-tabs-tab'} selectedClassName={'is-active'}>
                                    <div className="catalog__tab-title">
                                        {item.label}
                                        <span className="unread catalog__tab-unread">{item.count}</span>
                                    </div>
                                </Tab>;
                            })
                        }
                    </TabList>
                    <TableFilterIcon />
                </div>
                <div className={'catalog__box'}>
                    <div className={'catalog__content'}>
                        <TabPanel>
                            <TableContent type={type} users={usersObj.approvedUsers}/>
                        </TabPanel>
                        <TabPanel>
                            <TableContent type={type} users={usersObj.waitingUsers}/>
                        </TabPanel>
                        <TabPanel>
                            <TableContent type={type} users={usersObj.rejectedUsers}/>
                        </TabPanel>
                    </div>

                </div>
            </Tabs>
        </div>
    </div>;
}

export default TableCatalog;

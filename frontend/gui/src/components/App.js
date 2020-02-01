import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from '../routes';
import CustomLayout from '../containers/Layout';
import 'antd/dist/antd.css';

export default () => {
    return (
        <>
            <Router>
                <CustomLayout>
                    <BaseRouter />
                </CustomLayout>
            </Router>
        </>
    );
};

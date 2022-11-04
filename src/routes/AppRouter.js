import { Navigate, Route, Routes } from "react-router-dom";

import Category from '../pages/category';
import React from 'react'

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Category />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes></>
    )
}

export default AppRouter
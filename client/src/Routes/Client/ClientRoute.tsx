import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage.tsx';
import Dashboard from './Dashboard.tsx'
export default function ClientRoute() {
	const [isShrunk, setIsShrunk] = useState(true);

	return (
		<div className="client">
			<div className="client-content">
				<Routes>
					<Route path ="login" element={<LoginPage />} />
					<Route index path ="/" element={<Dashboard />} />
				</Routes>
			</div>
		</div>

	);
}


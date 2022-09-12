/** @format */

import React from 'react';

export default function CustomModal({ children, visible, onClose }) {
	const handleOnBackDropClick = (e) => {
		if (e.target.id === 'backdrop') onClose && onClose();
	};

	return (
		<>
			{visible ? (
				<>
					<div
						style={{display: 'flex', justifyContent: "center", alignItems: "center", position: 'fixed', inset: "0", zIndex: "9999", outline: "none", padding: "10px auto", background: "rgba(0,0,0,0.8", backdropFilter: "blur(10px)"}}
						className='flex justify-center items-center h-screen fixed inset-0 z-[9999999] outline-none focus:outline-none py-10 bg-black bg-opacity-50 backdrop-blur-sm'
						id='backdrop'
						onClick={handleOnBackDropClick}>
						<div className='relative w-auto my-16 mx-auto bg-transparent py-10' style={{position: 'relative', width: 'auto', margin: '30px auto', background: 'transparent', paddingTop: "20px", paddingBottom: "20px"}}>
							{children}
						</div>
					</div>
				</>
			) : null}
		</>
	);
}

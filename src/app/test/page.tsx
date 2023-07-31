'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { testProduct } from '@/services/test';

const Test = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['test'],
		queryFn: testProduct,
	});
	if (isLoading || !data) return <div className='mx-auto w-10/12 p-3'>Loading...</div>;
	return (
		<div className='mx-auto w-10/12 p-3'>
			<span>Test</span>
			{data.map((item: any) => (
				<div key={item.id_product}>
					<span>{item.name_prod}</span>
				</div>
			))}
		</div>
	);
};

export default Test;

import Link from 'next/link';

export default function Team() {
	return (
		<div className='container mx-auto w-10/12'>
			<div>
				<Link className='btn' href='/team/create'>
					Tạo nhóm
				</Link>
			</div>
		</div>
	);
}

import Link from 'next/link';

export default function Layout({ children }) {
	return (
		<div>
			<div>{children}</div>
		</div>
	);
}

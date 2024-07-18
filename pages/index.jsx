import WodButton from '@/components/WodButton';
import WodList from '@/components/WodList';
import axios from 'axios';

function HomePage() {
	return (
		<div>
			<h1>요청한 와드 입니다.</h1>
			{/* <WodList></WodList> */}
			<WodButton></WodButton>
		</div>
	);
}

export default HomePage;

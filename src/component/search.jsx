import Button from '../component/button'
import SearchSvg from '../assets/Search.svg'
import Images from './image';

const Search = () => {
    return ( 
        <div className="search">
            <Button className={'button-search'}>
                <Images src={SearchSvg} alt="search" className='search-svg'/>
            </Button>
            <input type="text" className="search-input" />
        </div>
     );
}
 
export default Search;
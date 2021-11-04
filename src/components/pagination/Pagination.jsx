import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Pagination = ({leagues}) => {
//-------------- PAGINATION --------------//

    const [pageNumber, setPageNumber] = useState(0);

    
       return(
        <>
            {leagues &&
            leagues.map(league=>(
                    
                <>
                    <div class="container">
                        <div class="item">
                        <img
                            id="logo"
                            src={league.image_url}
                            alt="logo"
                        />
                        </div>
                        
                        <div class="item">
                            <h1>{league.name}</h1> 
                        </div>
                        <Link to={`/leagues/${league.id}`}>
                        <div class="item">
                            <button id="btn">view details <i class="fa fa-arrow-right"></i></button>
                        </div>
                        </Link>
                    </div>
                </>
            )
            )
            }
        </>
       ) 
}

export default Pagination;
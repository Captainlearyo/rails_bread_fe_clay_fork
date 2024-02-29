import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchBreadsForCountry } from '../../apiCalls';
import './BreadList.css'; 
import { BreadData, CountryData, ApiResponse } from '../../apiTypes';
import Loading from '../Loading/Loading';
const BreadList = () => {
  const { id: countryName } = useParams();
  const [breads, setBreads] = useState<BreadData[]>([]);
  const [country, setCountry] = useState<CountryData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (countryName) {
      setTimeout(() => {
      fetchBreadsForCountry(countryName)
        .then((data: ApiResponse) => {
          setCountry(data.country.data);
          setBreads(data.breads.data);
        })
        .catch(error => {
          navigate('/error'); // Redirect to error page
        });
        }, 10000); // 10 seconds
    }
  }, [countryName, navigate]);

  

  return (
		<div>
			{country ? (
				<div className="BreadListWrapper">
					<h2>Breads from {country.attributes.name}</h2>
					<p>{country.attributes.overview}</p>
					<p>{country.attributes.culinary}</p>
					<section className="listSection">
						<div className="listDetail">
							<ul>
								{breads.map((bread) => (
									<li key={bread.id}>
										<Link
											to={`/breads/${countryName}/${bread.attributes.name}`}
										>
											{bread.attributes.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</section>
				</div>
			) : (
			  <Loading />
			)}
		</div>
	);
};

export default BreadList;
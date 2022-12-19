import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function RestaurantDetailsPage({ data }) {
  //   const [restaurant, setRestaurant] = useState(null);
  //   const router = useRouter();

  //   useEffect(() => {
  //     // Fetch the restaurant details from the server
  //     const fetchRestaurant = async () => {
  //         const id = router.query.id
  //       const response = await fetch(`https://www.olivegarden.com/web-api/restaurant/${id}?restNumFlag=true&restaurantNumber=${id}`);
  //       const data = await response.json();
  //       setRestaurant(data);
  //     }
  //     console.log(restaurant, router.query.id)
  //     fetchRestaurant();
  //   }, [router.query.id]);
  const restaurant = data.successResponse;
  console.log('restaurant', restaurant, data)
  
  //   getServerSideProps
  if (!restaurant) {
    return <p>Loading...</p>;
  }
  const rest = restaurant.restaurantDetails
  return (
    <div>
      <h1>{rest.restaurantName}</h1>
      <br/>
      <p>{rest.description}</p>
      <br/>
      <p>{rest.address.address1}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
//   const router = useRouter();
  const { id } = context.query;
  console.log(id)
  const response = await fetch(
    `https://www.olivegarden.com/web-api/restaurant/${id}?restNumFlag=true&restaurantNumber=${id}`
  );
  const data = await response.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default RestaurantDetailsPage;

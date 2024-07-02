import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem.jsx";

function Menu() {
  //to get data into component we use custom hook
  //here we not have to pass anything to the function because rect router knows that
  // the data associated with this page
  const menu = useLoaderData();
  // console.log(menu);

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
//this can be done on anywhere because data fetching logic is centralised in route definition
export async function Loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;

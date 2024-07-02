import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fethcer = useFetcher();
  return (
    <fethcer.Form method="patch" className="text-right">
      <Button type="primary">Make priority</Button>
    </fethcer.Form>
  );
}

export default UpdateOrder;

//wheneever react router know data has been changed as a result of this action automatically it will
// refetch the data in the background and then re-render the page with this data
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

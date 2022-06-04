import { Button } from "../../Button";

function MenuItem({ data }) {
    console.log(data.item.title);
    return (
        <Button >
            {data.item.title}
        </Button>
    );
}

export default MenuItem;
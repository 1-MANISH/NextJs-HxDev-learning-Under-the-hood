import {add,subtract} from '@/utils/index';

const ServerComponent = () => {

        const addRes = add(10,5);
        const subRes = subtract(10,5);
        console.log("Add Result from server component: ", addRes);
        console.log("Subtract Result from server component: ", subRes);
        return (
                <div>ServerComponent</div>
        )
}

export default ServerComponent
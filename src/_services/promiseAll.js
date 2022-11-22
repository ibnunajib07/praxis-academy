import { getAllOrder } from "./orderService";

export const promiseAll = async () => {
    await Promise.all(
        [
            getAllOrder(),
        ]
    );
};
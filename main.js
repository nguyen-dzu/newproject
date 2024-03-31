import {getData} from "./src/contains/index.js";

async function callMockData() {
    const data = await getData("/src/data/mockData.json")
    data.json().then((res) => {
        const dataMap = res.map((item, index) => {
            return {
                id: index + 1,
                name: item.full_name,
                age: item.age,
            }
        })
        console.log(dataMap);
    })
}
callMockData();
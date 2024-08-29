async function fetchdata(){
    try {
        const datas = await fetch('http://localhost:3000/json')
        let parsed_datas = await datas.json();
        console.log("parsed-datas",parsed_datas)

        let datacontainer = document.getElementById("data-container");
        console.log(datacontainer)
        let rows = " "
        for (i = 0;i<parsed_datas.length;i++){
            rows = rows+`
            <div class="shadow p-3 mb-5 bg-body rounded  border border-4  text-center">
            <div class="p-3"><img src = "${parsed_datas[i].image}" style="width:200px;height:200px;"></div>
            <div class="fw-bold pt-2">${parsed_datas[i].category}</div>
            <div class="pt-3">${parsed_datas[i].description.slice(0,95)+".."}</div>
            </div>
            `
        }
        datacontainer.innerHTML = rows;
    } 
    catch (error) {
        console.log("error",error)
    }
}
fetchdata()


function getData() {
    let bgImage = ['"https://png.pngtree.com/thumb_back/fw800/back_pic/00/04/81/115624fe1739a98.jpg" alt="Card image"','"https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-paper-cut-wind-and-mountain-background-windmicroscopiccloudlandscapelovelycartoonkindergarten-exhibition-boardadvertising-image_56653.jpg" alt="Card image"','"https://png.pngtree.com/thumb_back/fw800/back_our/20190628/ourmid/pngtree-rainy-day-ancient-pavilion-advertising-background-image_282484.jpg" alt="Card image"','"https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-blue-sky-white-clouds-sun-cool-image_26419.jpg" alt="Card image"','"https://png.pngtree.com/thumb_back/fw800/back_pic/03/86/62/0957cfb903a997e.jpg" alt="Card image"'];
    let pincode = document.getElementById("pincode").value;
    let content = document.getElementById("content");
    let place = document.getElementById("place");
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${pincode},IN&appid=3244357f6a85f3820d7c44772c62e56c&units=metric`;
    fetch(url).then(response => response.json()).then((data) => {
      // content.innerText = `${JSON.stringify(data)}`;
        let BgColor;
        let arrRef=0;
        if (data.main.temp>29) {
          arrRef = 1
        } else if(data.main.temp<15) {
          arrRef = 4
        }
        // else if () {
          
        // }
        
        content.innerHTML += `   
        <div class="col-sm-3 mb-3">
        <div class="card bg-primary text-dark text-end">
        <img class="card-img" src=${bgImage[arrRef]}>
        <div class="card-img-overlay ">
        <div class="card-header text-center" style="font-size: 40px;text-overflow: ellipsis;">${data.name.slice(0,8)}</div>
        <p>
        <span style="font-size: 110px;">${Math.floor(data.main.temp)}&#176;C</span><br>
        <span style="font-size: 25px;">HIGH ${Math.floor(data.main.temp_max)} | LOW ${Math.floor(data.main.temp_min)}</span><br>
        <span style="font-size: 22px;">Humidity ${data.main.humidity}%</span><br>
        <span style="font-size: 22px;">${Math.floor(data.wind.speed * 3.6)} KMpH | ${data.visibility / 1000}KM</span><br>
        </p>
        </div>
            </div>
            </div>
            `;
            console.log(data.name)
            console.log(data);
            
          }).catch((error)=>{
            let alerts = document.getElementById('alert');
            alerts.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>An error ocured!</strong>${error}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
          })
        }
        

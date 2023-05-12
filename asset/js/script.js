fetch("https://restcountries.com/v3.1/all")
  .then((resp) => resp.json())
  .then((_mydata) => {
    // console.log(_mydata);
    _mydata.map((x) => {
      //   console.log(x);

      let _figure = document.createElement("figure");
      _figure.innerHTML = `

                    <div class='d-flex  justify-content-center' >
                    <img src="${x.flags.png}" alt="" class="my-4"> 
                    </div>
                    <figcaption class="d-flex flex-wrap justify-content-center">
                        <span
                            class="col-6 text-center  d-flex mt-3  py-1 text-white justify-content-center ">${x.name.common}</span>
                        <span
                            class="col-6 text-center  d-flex mt-3   py-1 text-white justify-content-center ">${x.name.official}</span>
                        <span
                            class="col-6 text-center  d-flex mt-3   py-1 text-white justify-content-center ">${x.capital}</span>
                        <span
                            class="col-6 text-center  d-flex mt-3   py-1 text-white justify-content-center ">${x.region}</span>
                        <span
                            class="col-6 text-center  d-flex mt-3   py-1 text-white justify-content-center ">${x.subregion}</span>
                        <span
                            class="col-6 text-center  d-flex mt-3   py-1 text-white justify-content-center ">${x.borders}</span>
                       
                        <span class="col-6 text-center    d-flex mt-3   py-1  justify-content-center ">
                            ${x.flag}
                            </span>
                       
                        <span class="col-6 text-center  d-flex mt-3   py-1 text-white justify-content-center ">${x.timezones}</span>
                       
                        <p class="col-12 text-center  d-flex mt-3   py-3 text-white justify-content-center ">${x.flags.alt}</p>
                    
                            <a href="${x.maps.googleMaps}"  class="col-4 text-center border d-flex mb-4  py-3 text-decoration-none d-flex justify-content-center text-white">
                               Map</a>
                 
                    </figcaption> 
                   
                   `;

      document.getElementById("boxCountry").appendChild(_figure);
    });
  });

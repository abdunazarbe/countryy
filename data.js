const bod = document.querySelector("body");
const navbar = document.getElementById("navbar");
const wrapper1 = document.getElementById("wrapper");
const card = document.querySelector(".card");
const inp = document.getElementById("default-search");

let regi = document.querySelector("#region");
let searchBy = document.querySelector("#search-by");
const dark = document.getElementById("dark");

function render(arr) {
  let res = "";
  arr.map((value) => {
    res += `
            <div class="mx-auto w-[264px] h-[336px] bg-white border border-gray-200 rounded-lg shadow dark:bg-[#2B3844] dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="${value.flags.svg}" alt="${value.name}" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-[18px] font-extrabold tracking-tight text-gray-900 dark:text-white">${value.name}</h5>
                    </a>
                    <div class="flex items-center">
                        <h4 class="font-semibold dark:text-white text-[16px]">Population: </h4>
                        <p class="font-light dark:text-white">${value.population}</p>
                    </div>
                    
                    <div class="flex items-center" >
                        <h4 class="font-semibold text-[16px] dark:text-white">Region: </h4>
                        <p class="font-light dark:text-white">${value.region}</p>
                    </div>
                    
                    <div class="flex items-center" >
                        <h4 class="font-semibold text-[16px] dark:text-white">Capital: </h4>
                        <p class="font-light dark:text-white">${value.capital}</p>
                    </div>
                </div>
            </div>
        `;
  });

  wrapper1.innerHTML = res;
}

render(davlatlar);

let reg = [];
davlatlar.forEach((val) => {
  reg.push(val.region);
});
let regions = [...new Set(reg)];

regions.forEach((v) => {
  let opt = document.createElement("option");
  opt.value = v;
  opt.textContent = v;
  regi.append(opt);
});

let keyzz = [];
davlatlar.forEach((v) => {
  for (const key in v) {
    keyzz.push(key);
  }
});

let keyz = [...new Set(keyzz)];

keyz.forEach((key) => {
  let opt = document.createElement("option");
  opt.value = key;
  opt.textContent = key;
  searchBy.append(opt);
});

inp.addEventListener("input", (e) => {
  let res = davlatlar.filter((v) =>
    v[searchBy.value]?.toLowerCase()?.includes(e.target.value.toLowerCase())
  );
  render(res);
});

regi.addEventListener("input", (e) => {
  let res = davlatlar.filter((v) => v.region === e.target.value);
  render(res);
});

// more about json
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
// let requestURL = "../assets/data.json"

// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function() {
//     const data = request.response;
//     console.log(data)

    
//     window.addEventListener('resize', () => {
//         console.log('resized')
//     });


//   }


  function init() {
    let request = Tabletop({
        key: "https://docs.google.com/spreadsheets/d/1cDhKEiybdKCNTaQ5GmOiuzV2vrLbuNd0w5JdTbk_A3E/edit?usp=sharing",
        callback: showInfo,
        simpleSheet: true
    });
  }

  var count = 0;

  function showInfo(data, tabletop) {
    // data comes through as a simple array since simpleSheet is turned on
    console.log(data)
  }

  window.addEventListener('DOMContentLoaded', init)
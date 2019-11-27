'use strict';
// 'https://github.com/users/`${#username-search}`/repos';
function getAPIResult() {
//  fetch("https://dog.ceo/api/breed/" + handleUserInput() + "/images/random")
let userInput = handleUserInput();
let apiRequest = "https://api.github.com/users/" + userInput + "/repos";
console.log(apiRequest);
fetch(apiRequest)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert(userInput+ ' - Problem! '+ error.message));
}

function watchForm() {
 $("#formInput").submit(event => {
    event.preventDefault();
    getAPIResult();
  });
}

function handleUserInput() {
  let breed = $("#userInput").val();
  return breed;
}

/* hello Mr. Benton */

function displayResults(responseJson) {
  console.log(responseJson);
  //return;
  if (responseJson.length < 1) {
    alert("No packages by a user of that name");
  } else  {
//    $("#results").replaceWith(
//      `<img src="${responseJson.message}" class="results">`
    //alert("Are we even getting here?");
    let htmlContent =
        '<div id="results" class="container">';
    //alert("Are we even getting here, the sequel?");
    console.log(responseJson.length);
    for(let i=0; i < responseJson.length; i++) {
      console.log('looping '+i);
     htmlContent += '<section class="results hidden">'
       + '<a href="'+responseJson[i].html_url+'">' + responseJson[i].name + '</a>'
       + '  </section>';
    }
    htmlContent += '</div>';
    //  );
    console.log(htmlContent);
    $("#results").replaceWith(htmlContent);
    $(".results").removeClass("hidden");
    console.log('Image replaced with '+responseJson.message);
  }
}

/* ambient code */

$('.hidden').hide();

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

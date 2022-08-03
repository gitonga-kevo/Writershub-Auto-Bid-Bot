
//Tampermonkey® by Jan Biniok v4.16.1
// ==UserScript==
// @name         Auto Bidding Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.writershub.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=writershub.org
// @grant        none
// ==/UserScript==
//  TO USE, COPY-PASTE INTO TAMPERMONKEY OR SIMILAR PLUGIN
(function() {
    const jobForMe = ["Personal statement", "Essay", "Power Point presentation", "Literature review", "Discussion board post", "Project", "Multiple Choice Questions", "Multiple Choice Questions (Time-framed)", "Research paper"];
    const AcademicLevelToRemove = ["Doctoral", "Master's"];
    //setTimeout(If_takeorder_is_available,2000);
    if (window.location.href.includes("https://www.writershub.org/writer/orders/all_available")) {
        setTimeout(If_takeorder_is_available, 2000);
        setTimeout(Remove_unwanted_jobs,3000);
        setTimeout(main, 6000);
        setTimeout(function() {
          window.open("https://app.essaypro.com/#/writer/orders-available/all", "_self");
        }, 30000);
    } else if (window.location.href.includes("https://www.writershub.org/auth/session/new")) {
        setTimeout(login, 2000);
    } else {
        setTimeout(takeAvailableOrders, 2000);
         setTimeout(bid, 3000);
        setTimeout(function() {
            window.open("https://www.writershub.org/writer/orders/all_available", "_self");
        }, 30000);
    }
    function main() {
        const element = document.getElementsByClassName("table_cost");
        var baseURI = element[1].children[2].baseURI;
        const orderObj = document.getElementsByClassName("ng-binding");
        const objectSize = orderObj.length;
        var counter = 0;
        while (objectSize > counter) {
            var orderID = orderObj[counter].innerHTML;
            var orderURL = orderObj[counter].href;
            if (orderID && orderID.includes("#")) {
                window.open(orderURL, "_self");
                break;
                // setTimeout(bid, 3000);//allow the page to load
            } else {
                console.log("not defined");
            }
            counter++;
        }

    }

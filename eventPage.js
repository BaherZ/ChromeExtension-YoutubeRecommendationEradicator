chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo === "check"){
        //alert("there is a request")
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            //alert(tabs)
            console.log(tabs)
            chrome.pageAction.show(tabs[0].id)
            let myDiv = document.getElementById("contentArea");
            console.log(myDiv)
        })
    }
})

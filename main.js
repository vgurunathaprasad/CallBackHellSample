tag = document.getElementById("txt");

setTimeout(function(){
    tag.innerText="10";
    setTimeout(function(){
        tag.innerText="9";
        setTimeout(function(){
            tag.innerText="8";
            setTimeout(function(){
                tag.innerText="7";
                setTimeout(function(){
                    tag.innerText="6";
                    setTimeout(function(){
                        tag.innerText="5";
                        setTimeout(function(){
                            tag.innerText="4";
                            setTimeout(function(){
                                tag.innerText="3";
                                setTimeout(function(){
                                    tag.innerText="2";
                                    setTimeout(function(){
                                        tag.innerText="1";
                                        setTimeout(function(){
                                            tag.innerText="Happy Independence Day";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);
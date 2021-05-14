#terms_container, #terms_container *{
    all: unset;
}

#terms_container, #terms_container *{
    display: block;
    text-align: justify;
}

#terms_container::-webkit-scrollbar, #terms_container *::-webkit-scrollbar{
    display: none;
}

#terms_container{
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.9);
    top: 0;
    left: 0;
    z-index: 3;
    font-weight: normal;
}

#terms_container>.terms_container_inner{
    display: none;
    position: fixed;
    top:50%;
    left: 50%;
    max-width: 984px;
    max-height: 600px;
    width: calc(100vw - 80px);
    height: calc(100vh - 80px);
    transform: translate(-50%, -50%);
    padding: 40px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #eee;
    -webkit-box-shadow: 0px 0px 3px #eee;
    -moz-box-shadow: 0px 0px 3px #eee;
    box-shadow: 0px 0px 3px #eee;
}

#terms_container>.terms_container_inner>.terms_container_content{
    width: 100%;
    height: 100%;
    overflow: auto;
}

#terms_container>.terms_container_inner>.terms_container_content>.popup-terms-close-button{
    position: absolute;
    top: 0px;
    right: 10px;
    cursor: pointer;
    font-size: 30px;
}

#terms_container>.terms_container_inner>.terms_container_content>h2{
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0;
}

#terms_container>.terms_container_inner>.terms_container_content>h4{
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
}

#terms_container>.terms_container_inner>.terms_container_content>p{
    display: block;
    margin: 5px 0;
}

#terms_container>.terms_container_inner>.terms_container_content>ul{
    padding-left: 25px;
    list-style-position: inside;
    list-style: arabic-indic;
    list-style-type: disc;
}

#terms_container>.terms_container_inner>.terms_container_content>ul li{
    display: list-item;
    margin: 3px 0;
}

#terms_container>.terms_container_inner>.terms_container_content>ul li:before{
    content: '';
    margin-right: 0px;
}

#terms_container>.terms_container_inner>.terms_container_content>ul li a,
#terms_container>.terms_container_inner>.terms_container_content>p a{
    display: inline;
}

#termsLink{
    cursor: pointer;
    text-decoration: underline;
}

/* mobile css */

@media screen and (max-width: 767px){
    #terms_container, #terms_container *{
        text-align: left;
    }
    #terms_container>.terms_container_inner>.terms_container_content>h2{
        font-size: 16px;
    }
    #terms_container>.terms_container_inner>.terms_container_content>h4{
        font-size: 14px;
    }
    #terms_container>.terms_container_inner>.terms_container_content>p{
        font-size: 13px;
    }
    #terms_container>.terms_container_inner>.terms_container_content>ul{
        font-size: 13px;
    }
    #terms_container>.terms_container_inner>.terms_container_content>ul li{
        font-size: 13px;
    }
    #terms_container>.terms_container_inner>.terms_container_content>.popup-terms-close-button {
        position: absolute;
        top: 1px;
        right: 5px;
        font-size: 24px;
    }
    #terms_container>.terms_container_inner>.terms_container_content>ul li a,
    #terms_container>.terms_container_inner>.terms_container_content>p a{
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 260px;
    }
    #terms_container>.terms_container_inner {
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        max-width: 100%;
        max-height: 100%;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        transform: translate(0, 0);
        padding: 20px;
        background: #fff;
        border-radius: 0px;
        border: 1px solid #eee;
        -webkit-box-shadow: 0px 0px 3px #eee;
        -moz-box-shadow: 0px 0px 3px #eee;
        box-shadow: 0px 0px 3px #eee;
    }
}

@media screen and (max-width: 359px){
    #terms_container, #terms_container *{
        text-align: left;
    }
    #terms_container>.terms_container_inner>.terms_container_content>h2{
        font-size: 14px;
    }
    #terms_container>.terms_container_inner>.terms_container_content>h4{
        font-size: 12px;
    }
    #terms_container>.terms_container_inner>.terms_container_content>p{
        font-size: 11px;
    }
    #terms_container>.terms_container_inner>.terms_container_content>ul{
        font-size: 11px;
    }
    #terms_container>.terms_container_inner>.terms_container_content>ul li{
        font-size: 11px;
    }
}
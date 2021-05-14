#privacy_container, #privacy_container *{
    all: unset;
}

#privacy_container::-webkit-scrollbar, #privacy_container *::-webkit-scrollbar{
    display: none;
}

#privacy_container{
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

#privacy_container>.privacy_container_inner{
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

#privacy_container>.privacy_container_inner>.privacy_container_content{
    display: block;
    width: 100%;
    height: 100%;
    overflow: auto;
}

#privacy_container>.privacy_container_inner>.privacy_container_content>.popup-privacy-close-button{
    position: absolute;
    top: 0px;
    right: 10px;
    cursor: pointer;
    font-size: 30px;
}

#privacy_container>.privacy_container_inner>.privacy_container_content>h2{
    display: block;
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0;
}

#privacy_container>.privacy_container_inner>.privacy_container_content>h4{
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
}

#privacy_container>.privacy_container_inner>.privacy_container_content>p{
    display: block;
    margin: 5px 0;
}

#privacy_container>.privacy_container_inner>.privacy_container_content>ul{
    display: block;
    padding-left: 25px;
    list-style-position: inside;
    list-style-type: disc;
}

#privacy_container>.privacy_container_inner>.privacy_container_content>ul li{
    display: list-item;
    margin: 3px 0;
}

#privacy_container>.privacy_container_inner>.privacy_container_content>ul li:before{
    content: '';
    margin-right: 0px;
}

#privacy_container>.privacy_container_inner>.privacy_container_content>ul li a,
#privacy_container>.privacy_container_inner>.privacy_container_content>p a{
    display: inline;
}

#privacyLink{
    cursor: pointer;
    text-decoration: underline;
}

/* mobile css */

@media screen and (max-width: 767px){
    #privacy_container, #privacy_container *{
        text-align: left;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>h2{
        font-size: 16px;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>h4{
        font-size: 14px;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>p{
        font-size: 13px;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>table{
        font-size: 13px;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>ul{
        font-size: 13px;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>ul li{
        font-size: 13px;
    }
    small{
        font-size: 10px;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>.popup-privacy-close-button {
        position: absolute;
        top: 1px;
        right: 5px;
        font-size: 24px;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>ul li a,
    #privacy_container>.privacy_container_inner>.privacy_container_content>p a{
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 260px;
    }
    #privacy_container>.privacy_container_inner {
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

small{
    font-size: 11px!important;
}

table{
    display: table!important;
    border-collapse: separate!important;
    border-spacing: 2px!important;
    border-color: gray!important;
}

table thead{
    display: table-header-group!important;
    vertical-align: middle!important;
    border-color: inherit!important;
}

table thead tr{
    display: table-row!important;
    vertical-align: inherit!important;
    border-color: inherit!important;
}

table thead tr th{
    display: table-cell!important;
    vertical-align: inherit!important;
    font-weight: bold!important;
    text-align: center!important;
}

table tbody{
    display: table-row-group!important;
    vertical-align: middle!important;
    border-color: inherit!important;
}

table tbody tr{
    display: table-row!important;
    vertical-align: inherit!important;
    border-color: inherit!important;
}

table tbody tr td{
    display: table-cell!important;
    vertical-align: inherit!important;
}

table, th, td {
    padding: 10px!important;
    border: 1px solid black!important; 
    border-collapse: collapse!important;
}

@media screen and (max-width: 359px){
    #privacy_container, #privacy_container *{
        text-align: left;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>h2{
        font-size: 14px;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>h4{
        font-size: 12px;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>p{
        font-size: 11px;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>table{
        font-size: 11px;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>ul{
        font-size: 11px;
    }
    #privacy_container>.privacy_container_inner>.privacy_container_content>ul li{
        font-size: 11px;
    }
    small{
        font-size: 9px;
    }
}
